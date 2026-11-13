(function () {
  "use strict";

  var app = document.getElementById("app");


  function normalize(str) {
    return (str || "")
      .toString()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/['’`´]/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function escapeHtml(str) {
    return (str || "").toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function geneSym(symbol) {
    return '<span class="gene-sym">' + escapeHtml(symbol) + "</span>";
  }

  function refListHtml(refs) {
    if (!refs || !refs.length) return "";
    return '<ul class="ref-list">' + refs.map(function (r) {
      return '<li class="ref-item">' +
        '<span class="ref-title">' + escapeHtml(r.title) + "</span>" +
        '<span class="ref-meta">' + escapeHtml(r.journal) + " \u00b7 " + r.year + "</span>" +
        (r.doi ? '<a class="ref-doi" href="https://doi.org/' + escapeHtml(r.doi) + '" target="_blank" rel="noopener">doi:' + escapeHtml(r.doi) + " \u2197</a>" : "") +
      "</li>";
    }).join("") + "</ul>";
  }

  function dedupeRefs(refs) {
    var seen = {};
    var out = [];
    refs.forEach(function (r) {
      var key = r.doi || r.title;
      if (seen[key]) return;
      seen[key] = true;
      out.push(r);
    });
    return out;
  }

  function buildIndex() {
    var index = [];
    GENOME_DATA.genes.forEach(function (gene) {
      var geneTerms = [gene.symbol, gene.name].concat(gene.aliases || []);
      index.push({
        type: "gene",
        label: gene.symbol,
        sub: gene.name + " · " + gene.locus,
        terms: geneTerms,
        route: "#/gene/" + encodeURIComponent(gene.symbol)
      });
      var protTerms = [gene.protein.name, gene.protein.uniprot].concat(gene.protein.aliases || []);
      index.push({
        type: "protein",
        label: gene.protein.name,
        sub: "protéine de " + gene.symbol + " · UniProt " + gene.protein.uniprot,
        terms: protTerms,
        route: "#/gene/" + encodeURIComponent(gene.symbol)
      });
      gene.diseases.forEach(function (d) {
        var terms = [d.name, "OMIM " + d.omim, d.omim].concat(DISEASE_ALIASES[d.id] || []);
        index.push({
          type: "disease",
          label: d.name,
          sub: "OMIM " + d.omim + " · " + d.inheritance + " · gène " + gene.symbol,
          terms: terms,
          route: "#/disease/" + encodeURIComponent(d.id)
        });
      });
    });
    if (window.LOCUS && window.LOCUS.extraIndex) {
      index = index.concat(window.LOCUS.extraIndex());
    }
    index.forEach(function (e) { e.nterms = (e.terms || []).map(normalize); });
    return index;
  }

  var SEARCH_INDEX = buildIndex();

  function scoreEntry(entry, q) {
    var best = -1;
    var nterms = entry.nterms || entry.terms;
    for (var i = 0; i < nterms.length; i++) {
      var t = nterms[i] && entry.nterms ? nterms[i] : normalize(nterms[i]);
      if (!t) continue;
      var s;
      if (t === q) s = 1000;
      else if (t.indexOf(q) === 0) s = 700 - (t.length - q.length);
      else if (t.indexOf(q) !== -1) s = 400 - (t.length - q.length);
      else if (q.length >= 3 && q.indexOf(t) === 0) s = 200;
      if (s > best) best = s;
    }
    return best;
  }

  function search(query) {
    var q = normalize(query);
    if (!q) return [];
    var results = [];
    SEARCH_INDEX.forEach(function (entry) {
      var s = scoreEntry(entry, q);
      if (s > 0) results.push({ entry: entry, score: s });
    });
    var order = { gene: 0, protein: 1, disease: 2 };
    results.sort(function (a, b) {
      var g = order[a.entry.type] - order[b.entry.type];
      if (g !== 0) return g;
      if (b.score !== a.score) return b.score - a.score;
      return a.entry.label.localeCompare(b.entry.label, "fr");
    });
    return results.slice(0, 9).map(function (r) { return r.entry; });
  }

  function diseaseMap() {
    var map = {};
    GENOME_DATA.genes.forEach(function (gene) {
      gene.diseases.forEach(function (d) {
        if (!map[d.id]) {
          map[d.id] = { disease: d, genes: [] };
        }
        map[d.id].genes.push(gene);
      });
    });
    return map;
  }

  var DISEASES = diseaseMap();

  function findGene(symbol) {
    symbol = normalize(symbol).toUpperCase();
    for (var i = 0; i < GENOME_DATA.genes.length; i++) {
      var g = GENOME_DATA.genes[i];
      if (g.symbol.toUpperCase() === symbol) return g;
      var aliases = (g.aliases || []).map(function (a) { return a.toUpperCase(); });
      if (aliases.indexOf(symbol) !== -1) return g;
    }
    return null;
  }

  function findGeneByProtein(uniprot) {
    var u = normalize(uniprot).toUpperCase();
    for (var i = 0; i < GENOME_DATA.genes.length; i++) {
      if (GENOME_DATA.genes[i].protein.uniprot.toUpperCase() === u) return GENOME_DATA.genes[i];
    }
    return null;
  }

  /* ---------- Home ---------- */

  var EXAMPLES = ["TP53", "p53", "BRCA1", "CFTR", "mucoviscidose", "Huntington", "Alzheimer", "drépanocytose", "Parkinson", "Rett"];

  function renderHome() {
    document.title = "LOCUS — Atlas du génome humain";
    var genes = GENOME_DATA.genes.slice().sort(function (a, b) {
      return a.symbol.localeCompare(b.symbol, "en");
    });
    app.innerHTML =
      '<section class="hero">' +
        '<p class="eyebrow">Atlas du génome humain · gène → protéine → cellule → pathologie</p>' +
        "<h1>Du <em>gène</em> à la <em>maladie</em>.</h1>" +
        '<p class="hero-lede">Recherchez un gène, une protéine ou une maladie pour explorer leurs liens : produit protéique, types cellulaires d\'expression et pathologies associées aux mutations.</p>' +
        '<div class="search-wrap">' +
          '<div class="search-box">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>' +
            '<input id="search-input" type="text" role="combobox" aria-expanded="false" aria-controls="suggestions" aria-autocomplete="list" autocomplete="off" spellcheck="false" placeholder="Nom d\'un gène, d\'une protéine ou d\'une maladie…" aria-label="Rechercher un gène, une protéine ou une maladie">' +
            '<span class="search-kbd" aria-hidden="true">/</span>' +
          "</div>" +
          '<div id="suggestions" class="suggestions" role="listbox" aria-label="Suggestions"></div>' +
        "</div>" +
        '<div class="hero-examples"><span>Exemples :</span>' +
          EXAMPLES.map(function (e) {
            return '<button type="button" class="chip" data-q="' + escapeHtml(e) + '">' + escapeHtml(e) + "</button>";
          }).join("") +
        "</div>" +
      "</section>" +
      '<section class="home-section" id="explorer">' +
        '<div class="section-head"><h2>Explorer l\'atlas</h2><p>' + genes.length + " gènes référencés</p></div>" +
        '<div class="gene-grid">' +
          genes.map(function (g) {
            return '<a class="gene-card" href="#/gene/' + encodeURIComponent(g.symbol) + '">' +
              geneSym(g.symbol) +
              '<span class="gene-name">' + escapeHtml(g.name) + "</span>" +
              '<span class="gene-meta"><span>' + escapeHtml(g.locus) + "</span><span>" + g.diseases.length + " pathologie" + (g.diseases.length > 1 ? "s" : "") + "</span></span>" +
            "</a>";
          }).join("") +
        "</div>" +
      "</section>";
    initSearch();
    if (pendingScroll) {
      var target = document.getElementById(pendingScroll);
      pendingScroll = null;
      if (target) target.scrollIntoView({ block: "start" });
    }
  }

  /* ---------- Recherche ---------- */

  var activeIndex = -1;
  var currentResults = [];

  function badgeFor(type) {
    if (type === "gene") return '<span class="suggest-badge gene">Gène</span>';
    if (type === "protein") return '<span class="suggest-badge protein">Protéine</span>';
    return '<span class="suggest-badge disease">Maladie</span>';
  }

  function renderSuggestions(results, query) {
    var box = document.getElementById("suggestions");
    var input = document.getElementById("search-input");
    if (!box) return;
    currentResults = results;
    activeIndex = results.length ? 0 : -1;
    if (!results.length) {
      box.innerHTML = '<div class="suggest-empty">Aucun résultat pour « ' + escapeHtml(query) + " ». Essayez un symbole de gène (ex. TP53), une protéine (ex. p53) ou une maladie (ex. mucoviscidose).</div>";
      box.classList.add("open");
      input.setAttribute("aria-expanded", "true");
      return;
    }
    var groups = { gene: [], protein: [], disease: [] };
    results.forEach(function (r) { groups[r.type].push(r); });
    var labels = { gene: "Gènes", protein: "Protéines", disease: "Maladies" };
    var html = "";
    ["gene", "protein", "disease"].forEach(function (type) {
      if (!groups[type].length) return;
      html += '<div class="suggest-group-label">' + labels[type] + "</div>";
      groups[type].forEach(function (r) {
        var i = results.indexOf(r);
        var main = r.type === "gene" ? geneSym(r.label) : escapeHtml(r.label);
        html += '<div class="suggest-item' + (i === activeIndex ? " active" : "") + '" role="option" id="opt-' + i + '" data-route="' + r.route + '" aria-selected="' + (i === activeIndex) + '">' +
          badgeFor(r.type) +
          '<span><span class="suggest-main">' + main + '</span><br><span class="suggest-sub">' + escapeHtml(r.sub) + "</span></span>" +
        "</div>";
      });
    });
    box.innerHTML = html;
    box.classList.add("open");
    input.setAttribute("aria-expanded", "true");
    box.querySelectorAll(".suggest-item").forEach(function (el) {
      el.addEventListener("mousedown", function (ev) {
        ev.preventDefault();
        location.hash = el.getAttribute("data-route");
      });
      el.addEventListener("mousemove", function () {
        setActive(parseInt(el.id.replace("opt-", ""), 10));
      });
    });
  }

  function setActive(i) {
    if (!currentResults.length) return;
    activeIndex = Math.max(0, Math.min(currentResults.length - 1, i));
    var box = document.getElementById("suggestions");
    var input = document.getElementById("search-input");
    box.querySelectorAll(".suggest-item").forEach(function (el) {
      var idx = parseInt(el.id.replace("opt-", ""), 10);
      el.classList.toggle("active", idx === activeIndex);
      el.setAttribute("aria-selected", idx === activeIndex ? "true" : "false");
    });
    input.setAttribute("aria-activedescendant", "opt-" + activeIndex);
    var el = document.getElementById("opt-" + activeIndex);
    if (el) el.scrollIntoView({ block: "nearest" });
  }

  function closeSuggestions() {
    var box = document.getElementById("suggestions");
    var input = document.getElementById("search-input");
    if (box) box.classList.remove("open");
    if (input) input.setAttribute("aria-expanded", "false");
  }

  function initSearch() {
    var input = document.getElementById("search-input");
    if (!input) return;
    input.addEventListener("input", function () {
      renderSuggestions(search(input.value), input.value.trim());
    });
    input.addEventListener("focus", function () {
      if (input.value.trim()) renderSuggestions(search(input.value), input.value.trim());
    });
    input.addEventListener("keydown", function (ev) {
      if (ev.key === "ArrowDown") { ev.preventDefault(); setActive(activeIndex + 1); }
      else if (ev.key === "ArrowUp") { ev.preventDefault(); setActive(activeIndex - 1); }
      else if (ev.key === "Enter") {
        ev.preventDefault();
        var pick = currentResults[activeIndex] || currentResults[0];
        if (pick) location.hash = pick.route;
      } else if (ev.key === "Escape") { closeSuggestions(); input.blur(); }
    });
    document.addEventListener("click", function (ev) {
      if (!ev.target.closest(".search-wrap")) closeSuggestions();
    });
    document.querySelectorAll(".hero-examples .chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        input.value = chip.getAttribute("data-q");
        input.focus();
        renderSuggestions(search(input.value), input.value.trim());
      });
    });
  }

  /* ---------- Fiche gène ---------- */

  function renderGene(gene) {
    document.title = gene.symbol + " — LOCUS";
    var exprRows = gene.expression.map(function (e) {
      var cls = e.level === "Élevée" ? "high" : e.level === "Moyenne" ? "medium" : "low";
      return '<div class="expr-row">' +
        '<div class="expr-top"><span><span class="expr-cell">' + escapeHtml(e.cellType) + '</span><span class="expr-tissue">' + escapeHtml(e.tissue) + "</span></span>" +
        '<span class="expr-level ' + cls + '">' + escapeHtml(e.level) + "</span></div>" +
        '<div class="expr-bar"><div class="expr-fill" style="width:' + e.score + '%"></div></div>' +
      "</div>";
    }).join("");

    var diseaseCards = gene.diseases.map(function (d) {
      return '<a class="disease-card" href="#/disease/' + encodeURIComponent(d.id) + '">' +
        "<h3>" + escapeHtml(d.name) + "</h3>" +
        '<div class="chip-row" style="margin-bottom:10px"><span class="meta-chip"><span class="chip-label">OMIM</span>' + escapeHtml(d.omim) + "</span><span class=\"meta-chip\"><span class=\"chip-label\">Hérédité</span>" + escapeHtml(d.inheritance) + "</span></div>" +
        "<p>" + escapeHtml(d.description) + "</p>" +
        '<p class="disease-mech"><strong>Mécanisme</strong> — ' + escapeHtml(d.mechanism) + "</p>" +
      "</a>";
    }).join("");

    var aliasList = (gene.aliases || []).join(", ");

    app.innerHTML =
      '<div class="page">' +
        '<a class="back-link" href="#/">← Retour à la recherche</a>' +
        '<div class="page-head">' +
          "<h1>" + geneSym(gene.symbol) + "</h1>" +
          '<p class="page-sub">' + escapeHtml(gene.name) + "</p>" +
          '<div class="chip-row">' +
            '<span class="meta-chip"><span class="chip-label">Locus</span>' + escapeHtml(gene.locus) + "</span>" +
            '<span class="meta-chip"><span class="chip-label">Brin</span>' + escapeHtml(gene.strand) + "</span>" +
            '<span class="meta-chip"><span class="chip-label">Type</span>' + escapeHtml(gene.geneType) + "</span>" +
          "</div>" +
        "</div>" +
        '<div class="detail-grid">' +
          '<div>' +
            '<div class="card">' +
              "<h2>Protéine</h2>" +
              '<p class="protein-name">' + escapeHtml(gene.protein.name) + "</p>" +
              '<p class="protein-sub">UniProt ' + escapeHtml(gene.protein.uniprot) + " · " + gene.protein.length + " acides aminés</p>" +
              '<p class="protein-function">' + escapeHtml(gene.protein.function) + "</p>" +
              '<dl class="kv">' +
                "<dt>UniProt</dt><dd><a href=\"https://www.uniprot.org/uniprotkb/" + escapeHtml(gene.protein.uniprot) + "/entry\" target=\"_blank\" rel=\"noopener\">" + escapeHtml(gene.protein.uniprot) + " ↗</a></dd>" +
                (aliasList ? "<dt>Alias du gène</dt><dd>" + escapeHtml(aliasList) + "</dd>" : "") +
              "</dl>" +
            "</div>" +
            (window.LOCUS && window.LOCUS.geneLocusCard ? window.LOCUS.geneLocusCard(gene) : "") +
            '<div class="card">' +
              "<h2>Expression cellulaire</h2>" +
              exprRows +
            "</div>" +
            (gene.references && gene.references.length ? '<div class="card"><h2>Références clés</h2>' + refListHtml(gene.references) + "</div>" : "") +
          "</div>" +
          '<div class="card">' +
            "<h2>Pathologies associées (" + gene.diseases.length + ")</h2>" +
            diseaseCards +
          "</div>" +
        "</div>" +
      "</div>";
  }

  /* ---------- Fiche maladie ---------- */

  function renderDisease(id) {
    var agg = DISEASES[id];
    if (!agg) { renderNotFound(); return; }
    var d = agg.disease;
    document.title = d.name + " — LOCUS";
    var rawRefs = [];
    agg.genes.forEach(function (g) {
      g.diseases.forEach(function (dd) {
        if (dd.id === id && dd.references) rawRefs = rawRefs.concat(dd.references);
      });
    });
    var diseaseRefs = dedupeRefs(rawRefs);
    var geneCards = agg.genes.map(function (g) {
      return '<a class="gene-link-card" href="#/gene/' + encodeURIComponent(g.symbol) + '">' +
        '<span><span class="gene-sym">' + escapeHtml(g.symbol) + "</span><br><span class=\"gl-name\">" + escapeHtml(g.name) + "</span></span>" +
        '<span class="gl-locus">' + escapeHtml(g.locus) + "</span>" +
      "</a>";
    }).join("");

    app.innerHTML =
      '<div class="page">' +
        '<a class="back-link" href="#/">← Retour à la recherche</a>' +
        '<div class="page-head">' +
          "<h1>" + escapeHtml(d.name) + "</h1>" +
          '<div class="chip-row">' +
            '<span class="meta-chip"><span class="chip-label">OMIM</span><a href="https://omim.org/entry/' + escapeHtml(d.omim) + '" target="_blank" rel="noopener">' + escapeHtml(d.omim) + " ↗</a></span>" +
            '<span class="meta-chip"><span class="chip-label">Hérédité</span>' + escapeHtml(d.inheritance) + "</span>" +
          "</div>" +
        "</div>" +
        '<div class="detail-grid">' +
          '<div class="card">' +
            "<h2>Présentation clinique</h2>" +
            "<p style=\"margin:0;color:var(--ink-soft)\">" + escapeHtml(d.description) + "</p>" +
          "</div>" +
          '<div class="card">' +
            "<h2>Gènes associés (" + agg.genes.length + ")</h2>" +
            geneCards +
          "</div>" +
        "</div>" +
        '<div class="card" style="margin-top:20px">' +
          "<h2>Mécanisme moléculaire</h2>" +
          "<p style=\"margin:0;color:var(--ink-soft)\">" + escapeHtml(d.mechanism) + "</p>" +
        "</div>" +
        (diseaseRefs.length ? '<div class="card" style="margin-top:20px"><h2>Références clés</h2>' + refListHtml(diseaseRefs) + "</div>" : "") +
      "</div>";
  }

  function renderNotFound() {
    document.title = "Introuvable — LOCUS";
    app.innerHTML =
      '<div class="not-found">' +
        "<h1>Introuvable</h1>" +
        "<p>Cette fiche n'existe pas dans l'atlas de démonstration.</p>" +
        '<a class="chip" href="#/">Retour à la recherche</a>' +
      "</div>";
  }

  /* ---------- Routeur ---------- */

  var pendingScroll = null;

  function route() {
    var hash = location.hash || "#/";
    var parts = hash.replace(/^#\//, "").split("/");
    var section = decodeURIComponent(parts[0] || "");
    var arg = decodeURIComponent(parts[1] || "");
    if (section === "" || section === "home") {
      renderHome();
    } else if (section === "gene") {
      var gene = findGene(arg);
      if (gene) renderGene(gene); else renderNotFound();
    } else if (section === "protein") {
      var byProt = findGeneByProtein(arg);
      if (byProt) location.replace("#/gene/" + encodeURIComponent(byProt.symbol));
      else renderNotFound();
    } else if (section === "disease") {
      renderDisease(arg);
    } else if (section === "genes") {
      if (window.LOCUS && window.LOCUS.renderGenes) {
        window.LOCUS.renderGenes(app, arg, decodeURIComponent(parts[2] || ""));
      } else {
        renderNotFound();
      }
    } else {
      renderNotFound();
    }
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  document.querySelectorAll("[data-scroll]").forEach(function (link) {
    link.addEventListener("click", function (ev) {
      var target = link.getAttribute("data-scroll");
      var onHome = !location.hash || location.hash === "#/";
      if (!onHome) {
        ev.preventDefault();
        pendingScroll = target;
        location.hash = "#/";
      }
    });
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
      var input = document.getElementById("search-input");
      if (input) { ev.preventDefault(); input.focus(); }
    }
  });

  window.addEventListener("hashchange", route);
  route();
})();
