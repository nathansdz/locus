(function () {
  "use strict";

  function esc(s) {
    return (s || "").toString()
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  var STAIN_FILL = {
    gneg: "#F7F5EF",
    gpos10: "#DDE0E5",
    gpos25: "#C3C7CE",
    gpos50: "#A6ABB4",
    gpos75: "#7C818B",
    gpos100: "#3D434D",
    acen: "#9B3B2E",
    gvar: "#8A8F98",
    stalk: "#6E7480"
  };

  var ATLAS = {};
  GENOME_DATA.genes.forEach(function (g) { ATLAS[g.symbol] = true; });

  var svgCounter = 0;

  function chromSvg(chr, W, H, highlightBand, clickable) {
    var bands = CYTOBANDS[chr];
    var len = CHROM_LEN[chr];
    var scale = H / len;
    var clipId = "cp" + (++svgCounter);
    var rects = [];
    bands.forEach(function (b) {
      var y = b.s * scale;
      var h = Math.max((b.e - b.s) * scale, 0.5);
      var w = W, x = 0;
      if (b.stain === "acen") { w = W * 0.42; x = (W - w) / 2; }
      else if (b.stain === "stalk" || b.stain === "gvar") { w = W * 0.72; x = (W - w) / 2; }
      var fill = b.name === highlightBand ? "#2C5A8A" : (STAIN_FILL[b.stain] || STAIN_FILL.gneg);
      var attrs = clickable ? ' data-band="' + esc(b.name) + '"' : "";
      rects.push('<rect class="band' + (b.name === highlightBand ? " sel" : "") + '"' + attrs +
        ' x="' + x.toFixed(2) + '" y="' + y.toFixed(2) + '" width="' + w.toFixed(2) + '" height="' + h.toFixed(2) +
        '" fill="' + fill + '"><title>chr' + esc(chr) + " " + esc(b.name) + "</title></rect>");
    });
    return '<svg class="chrom-svg" viewBox="0 0 ' + W + " " + H + '" width="' + W + '" height="' + H +
      '" role="img" aria-label="chromosome ' + esc(chr) + '">' +
      '<defs><clipPath id="' + clipId + '"><rect x="0" y="0" width="' + W + '" height="' + H + '" rx="' + (W / 2) + '"/></clipPath></defs>' +
      '<g clip-path="url(#' + clipId + ')">' + rects.join("") + "</g></svg>";
  }

  function countGenes(chr) {
    var locus = GENOME_LOCUS[chr];
    if (!locus) return 0;
    var n = 0;
    Object.keys(locus).forEach(function (b) { n += locus[b].length; });
    return n;
  }

  function normalizeChr(arg) {
    var c = (arg || "").toString().replace(/^chr/i, "");
    return CHROM_ORDER.indexOf(c) !== -1 ? c : "";
  }

  function renderGenes(app, chrArg, bandArg) {
    document.title = "Caryotype — LOCUS";
    var selChr = normalizeChr(chrArg);
    var selBand = bandArg || "";

    var grid = CHROM_ORDER.map(function (c) {
      var len = CHROM_LEN[c];
      var H = Math.round(64 + (len / CHROM_LEN["1"]) * 176);
      var W = 30;
      return '<a class="k-chrom' + (c === selChr ? " sel" : "") + '" href="#/genes/' + c + '" title="chr' + c + " — " + countGenes(c) + ' gènes localisés">' +
        chromSvg(c, W, H, c === selChr ? selBand : null, false) +
        '<span class="k-label">chr' + c + "</span></a>";
    }).join("");

    var detail = "";
    if (selChr) {
      var bands = CYTOBANDS[selChr];
      var bigSvg = chromSvg(selChr, 64, 460, selBand, true);
      var bandRows = bands.map(function (b) {
        var locus = GENOME_LOCUS[selChr];
        var n = locus && locus[b.name] ? locus[b.name].length : 0;
        if (!n) return "";
        return '<a class="band-row' + (b.name === selBand ? " sel" : "") + '" href="#/genes/' + selChr + "/" + encodeURIComponent(b.name) + '">' +
          '<span class="band-name">' + esc(selChr + b.name) + '</span><span class="band-count">' + n + " gène" + (n > 1 ? "s" : "") + "</span></a>";
      }).join("");
      var genePanel = "";
      var locus = GENOME_LOCUS[selChr];
      if (selBand && locus && locus[selBand]) {
        var genes = locus[selBand];
        var chips = genes.map(function (s) {
          if (ATLAS[s]) return '<a class="chip gene-chip" href="#/gene/' + encodeURIComponent(s) + '">' + esc(s) + "</a>";
          return '<span class="chip gene-chip plain" title="fiche non détaillée">' + esc(s) + "</span>";
        }).join("");
        genePanel = '<div class="card"><h2>Locus ' + esc(selChr + selBand) + " — " + genes.length + " gènes</h2><div class='chip-wrap'>" + chips + "</div></div>";
      }
      detail =
        '<div class="karyotype-detail">' +
          '<div class="card k-detail-svg"><h2>Chromosome ' + esc(selChr) + "</h2>" + bigSvg + "</div>" +
          '<div class="card"><h2>Bandes du chromosome ' + esc(selChr) + " (avec gènes)</h2><div class='band-list'>" + bandRows + "</div></div>" +
        "</div>" + genePanel;
    }

    app.innerHTML =
      '<div class="page">' +
        '<a class="back-link" href="#/">← Retour à la recherche</a>' +
        '<div class="page-head"><h1>Caryotype</h1>' +
        '<p class="page-sub">Sélectionnez un chromosome, puis une bande cytogénétique pour retrouver les gènes du locus. ' +
        "Recherchez aussi un gène dans la barre d'accueil : sa fiche indique son chromosome et son locus.</p></div>" +
        '<div class="card"><div class="karyotype-grid">' + grid + "</div></div>" +
        detail +
      "</div>";

    if (selChr) {
      app.querySelectorAll(".band[data-band]").forEach(function (el) {
        el.addEventListener("click", function () {
          var h = "#/genes/" + selChr + "/" + encodeURIComponent(el.getAttribute("data-band"));
          if (window.LOCUS_NAV) window.LOCUS_NAV(h); else location.hash = h;
        });
      });
    }
  }

  function extraIndex() {
    var out = [];
    Object.keys(SYMBOL_LOCUS).forEach(function (sym) {
      var l = SYMBOL_LOCUS[sym];
      out.push({
        type: "gene",
        label: sym,
        sub: "chr" + l.chr + " · " + l.chr + l.band + (ATLAS[sym] ? " · fiche détaillée" : ""),
        terms: [sym],
        route: ATLAS[sym] ? "#/gene/" + encodeURIComponent(sym) : "#/genes/" + l.chr + "/" + encodeURIComponent(l.band)
      });
    });
    return out;
  }

  function geneLocusCard(gene) {
    var m = /^(\d{1,2}|X|Y|M)([pq].*)$/.exec(gene.locus || "");
    if (!m || !CYTOBANDS[m[1]]) return "";
    var chr = m[1], band = m[2];
    return '<div class="card"><h2>Localisation</h2>' +
      '<a class="locus-map" href="#/genes/' + chr + "/" + encodeURIComponent(band) + '" title="Voir le locus sur le caryotype">' +
        chromSvg(chr, 38, 140, band, false) +
        '<span class="locus-label">chr' + esc(chr) + " · " + esc(gene.locus) + " ↗</span></a>" +
      "</div>";
  }

  window.LOCUS = {
    extraIndex: extraIndex,
    renderGenes: renderGenes,
    geneLocusCard: geneLocusCard
  };
})();
