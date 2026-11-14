(function () {
  "use strict";

  function esc(s) {
    return (s || "").toString()
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function fmtLen(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(2) + " Mb";
    if (n >= 1e3) return (n / 1e3).toFixed(1) + " kb";
    return n + " pb";
  }

  function txSvg(tx, strand) {
    var W = 1000, pad = 40, y = 46;
    var exons = tx.exons.slice().sort(function (a, b) { return a[0] - b[0]; });
    var tstart = exons[0][0], tend = exons[exons.length - 1][1];
    var span = Math.max(1, tend - tstart + 1);
    function x(pos) { return pad + (pos - tstart) / span * (W - 2 * pad); }
    var parts = [];
    parts.push('<line class="intron" x1="' + x(tstart).toFixed(1) + '" y1="' + y + '" x2="' + x(tend).toFixed(1) + '" y2="' + y + '"/>');
    exons.forEach(function (e, i) {
      var x1 = x(e[0]), x2 = x(e[1]);
      parts.push('<rect class="exon" x="' + x1.toFixed(1) + '" y="' + (y - 16) + '" width="' + Math.max(3, x2 - x1).toFixed(1) + '" height="32" rx="2"><title>exon ' + (i + 1) + " — " + e[0] + "-" + e[1] + " (" + fmtLen(e[1] - e[0] + 1) + ")</title></rect>");
      if (x2 - x1 > 16) {
        parts.push('<text class="exon-label" x="' + ((x1 + x2) / 2).toFixed(1) + '" y="' + (y + 4) + '">' + (i + 1) + "</text>");
      }
    });
    var dir = strand < 0 ? -1 : 1;
    var tipX = dir > 0 ? Math.min(W - 4, x(tend) + 16) : Math.max(4, x(tstart) - 16);
    parts.push('<path class="strand-arrow" d="M ' + tipX.toFixed(1) + " " + y + " L " + (tipX - dir * 14).toFixed(1) + " " + (y - 8) + " L " + (tipX - dir * 14).toFixed(1) + " " + (y + 8) + ' Z"/>');
    parts.push('<text class="strand-label" x="' + (dir > 0 ? W - 4 : 4) + '" y="' + (y - 22) + '" text-anchor="' + (dir > 0 ? "end" : "start") + '">' + (dir > 0 ? "3′" : "5′") + "</text>");
    parts.push('<text class="strand-label" x="' + (dir > 0 ? 4 : W - 4) + '" y="' + (y - 22) + '" text-anchor="' + (dir > 0 ? "start" : "end") + '">' + (dir > 0 ? "5′" : "3′") + "</text>");
    parts.push('<text class="tx-label" x="' + pad + '" y="86">' + esc(tx.id) + " — " + exons.length + " exons · " + fmtLen(span) + "</text>");
    return '<svg class="exon-svg" viewBox="0 0 ' + W + ' 96" preserveAspectRatio="xMidYMid meet" role="img" aria-label="ARN pré-messager">' + parts.join("") + "</svg>";
  }

  function cardInner(sym, data, txIndex) {
    var tx = data.transcripts[txIndex || 0];
    var select = "";
    if (data.transcripts.length > 1) {
      select = '<select class="tx-select" data-sym="' + esc(sym) + '" aria-label="Transcrit">' +
        data.transcripts.map(function (t, i) {
          return '<option value="' + i + '"' + (i === (txIndex || 0) ? " selected" : "") + ">" + esc(t.id) + "</option>";
        }).join("") + "</select>";
    }
    return select +
      '<div class="exon-svg-wrap" data-sym="' + esc(sym) + '" data-tx="' + (txIndex || 0) + '">' + txSvg(tx, data.strand) + "</div>" +
      '<p class="pheno-src">ARN pré-messager : <strong>exons</strong> (blocs) et <strong>introns</strong> (ligne fine), transcrit canonique Ensembl GRCh38 — chr' + esc(data.chr) + " " + data.start + "-" + data.end + (data.strand < 0 ? " (brin −)" : " (brin +)") + ".</p>";
  }

  function cardHtml(sym, data, txIndex) {
    if (!data) return "";
    return '<div class="card exon-card" data-sym="' + esc(sym) + '"><h2>ARN pré-messager <span class="card-sub">' + esc(sym) + "</span></h2>" +
      cardInner(sym, data, txIndex) + "</div>";
  }

  var memoryCache = {};

  function card(gene) {
    var sym = gene.symbol;
    var data = (typeof DATA_EXONS !== "undefined" && DATA_EXONS[sym]) || memoryCache[sym];
    if (data) return cardHtml(sym, data, 0);
    if (typeof fetch === "function") {
      memoryCache[sym] = null;
      fetch("https://rest.ensembl.org/lookup/symbol/homo_sapiens/" + encodeURIComponent(sym) + "?expand=1", { headers: { "Content-Type": "application/json" } })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) {
          if (!d || !d.Transcript) return;
          var pc = [];
          d.Transcript.forEach(function (t) {
            if (t.biotype !== "protein_coding") return;
            var exons = (t.Exon || []).map(function (e) { return [e.start, e.end]; }).sort(function (a, b) { return a[0] - b[0]; });
            if (exons.length) pc.push({ id: t.id, exons: exons });
          });
          if (!pc.length) return;
          var canon = String(d.canonical_transcript || "").split(".")[0];
          pc.sort(function (a, b) { var ca = a.id.split(".")[0] === canon ? 0 : 1, cb = b.id.split(".")[0] === canon ? 0 : 1; return ca - cb || (b.exons[b.exons.length - 1][1] - b.exons[0][0]) - (a.exons[a.exons.length - 1][1] - a.exons[0][0]); });
          memoryCache[sym] = { chr: String(d.seq_region_name), start: d.start, end: d.end, strand: d.strand || 1, transcripts: pc.slice(0, 6) };
          var el = document.querySelector('.exon-card[data-sym="' + sym + '"]');
          if (el) el.innerHTML = '<h2>ARN pré-messager <span class="card-sub">' + esc(sym) + "</span></h2>" + cardInner(sym, memoryCache[sym], 0);
        })
        .catch(function () {});
      return '<div class="card exon-card" data-sym="' + esc(sym) + '"><h2>ARN pré-messager <span class="card-sub">' + esc(sym) + "</span></h2><p class=\"pheno-src\">Chargement de la structure (Ensembl)…</p></div>";
    }
    return "";
  }

  document.addEventListener("change", function (ev) {
    var sel = ev.target && ev.target.closest ? ev.target.closest(".tx-select") : null;
    if (!sel) return;
    var sym = sel.getAttribute("data-sym");
    var data = (typeof DATA_EXONS !== "undefined" && DATA_EXONS[sym]) || memoryCache[sym];
    if (!data) return;
    var wrap = document.querySelector('.exon-card[data-sym="' + sym + '"]');
    if (wrap) wrap.innerHTML = '<h2>ARN pré-messager <span class="card-sub">' + esc(sym) + "</span></h2>" + cardInner(sym, data, parseInt(sel.value, 10));
  });

  window.LOCUS_EXONS = { card: card };
})();
