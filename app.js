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
    if (typeof DATA_DISEASE_GROUPS !== "undefined") {
      var seenDiseaseRoute = {};
      index.forEach(function (e) { if (e.type === "disease") seenDiseaseRoute[e.route] = true; });
      DATA_DISEASE_GROUPS.forEach(function (g) {
        var route = "#/disease/" + encodeURIComponent(g.id);
        if (seenDiseaseRoute[route]) return;
        var terms = [g.name].concat(g.aliases || []);
        if (g.omim) terms.push("OMIM " + g.omim, g.omim);
        var ng = (g.genes || []).length;
        index.push({
          type: "disease",
          label: g.name,
          sub: (g.omim ? "OMIM " + g.omim + " · " : "") + (g.inheritance ? g.inheritance + " · " : "") + ng + " gène" + (ng > 1 ? "s" : ""),
          terms: terms,
          route: route
        });
      });
    }
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

  function search(query, types) {
    var q = normalize(query);
    if (!q) return [];
    var results = [];
    SEARCH_INDEX.forEach(function (entry) {
      if (types && types.indexOf(entry.type) === -1) return;
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

  if (typeof DATA_DISEASE_GROUPS !== "undefined") {
    DATA_DISEASE_GROUPS.forEach(function (g) {
      var id = g.id;
      if (g.omim) {
        Object.keys(DISEASES).forEach(function (k) {
          if (DISEASES[k].disease.omim === g.omim) id = k;
        });
      }
      if (!DISEASES[id]) DISEASES[id] = { disease: g, genes: [], extra: [] };
      if (!DISEASES[id].extra) DISEASES[id].extra = [];
      (g.genes || []).forEach(function (s) {
        var atlas = null;
        for (var i = 0; i < GENOME_DATA.genes.length; i++) {
          if (GENOME_DATA.genes[i].symbol === s) { atlas = GENOME_DATA.genes[i]; break; }
        }
        if (atlas) {
          if (DISEASES[id].genes.indexOf(atlas) === -1) DISEASES[id].genes.push(atlas);
        } else if (DISEASES[id].extra.indexOf(s) === -1) {
          DISEASES[id].extra.push(s);
        }
      });
    });
  }

  var OMIM_TO_DISEASE = {};
  Object.keys(DISEASES).forEach(function (id) { OMIM_TO_DISEASE[DISEASES[id].disease.omim] = id; });
  window.LOCUS_OMIM = OMIM_TO_DISEASE;

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

  var EXAMPLES_GENE = ["TP53", "p53", "BRCA1", "CFTR", "A1BG"];
  var EXAMPLES_DISEASE = ["mucoviscidose", "Charcot-Marie-Tooth", "Huntington", "drépanocytose", "cardiomyopathie hypertrophique", "Parkinson"];
  var SEARCH_ICON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>';

  function renderHome() {
    document.title = "LOCUS — Atlas du génome humain";
    var genes = GENOME_DATA.genes.slice().sort(function (a, b) {
      return a.symbol.localeCompare(b.symbol, "en");
    });
    app.innerHTML =
      '<section class="hero">' +
        '<p class="eyebrow">Atlas du génome humain · gène → protéine → cellule → pathologie</p>' +
        "<h1>Du <em>gène</em> à la <em>maladie</em>.</h1>" +
        '<p class="hero-lede">Deux barres de recherche : un gène (ou sa protéine), ou une pathologie — pour explorer leurs liens : produit protéique, types cellulaires d\'expression et pathologies associées aux mutations.</p>' +
        '<div class="search-duo">' +
          '<div class="search-wrap">' +
            '<label class="search-label" for="search-gene">Gène / protéine</label>' +
            '<div class="search-box">' +
              SEARCH_ICON +
              '<input id="search-gene" type="text" role="combobox" aria-expanded="false" aria-controls="suggestions-gene" aria-autocomplete="list" autocomplete="off" spellcheck="false" placeholder="Nom d\'un gène ou d\'une protéine… (ex. TP53, p53)" aria-label="Rechercher un gène ou une protéine">' +
              '<span class="search-kbd" aria-hidden="true">/</span>' +
            "</div>" +
            '<div id="suggestions-gene" class="suggestions" role="listbox" aria-label="Suggestions gènes et protéines"></div>' +
          "</div>" +
          '<div class="search-wrap">' +
            '<label class="search-label" for="search-disease">Pathologie</label>' +
            '<div class="search-box">' +
              SEARCH_ICON +
              '<input id="search-disease" type="text" role="combobox" aria-expanded="false" aria-controls="suggestions-disease" aria-autocomplete="list" autocomplete="off" spellcheck="false" placeholder="Nom d\'une maladie… (ex. mucoviscidose, Charcot-Marie-Tooth)" aria-label="Rechercher une pathologie">' +
            "</div>" +
            '<div id="suggestions-disease" class="suggestions" role="listbox" aria-label="Suggestions maladies"></div>' +
          "</div>" +
        "</div>" +
        '<div class="hero-examples"><span>Gènes :</span>' +
          EXAMPLES_GENE.map(function (e) {
            return '<button type="button" class="chip" data-bar="gene" data-q="' + escapeHtml(e) + '">' + escapeHtml(e) + "</button>";
          }).join("") +
          '<span class="ex-sep"></span><span>Maladies :</span>' +
          EXAMPLES_DISEASE.map(function (e) {
            return '<button type="button" class="chip" data-bar="disease" data-q="' + escapeHtml(e) + '">' + escapeHtml(e) + "</button>";
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

  var BARS = {};
  function barState(suggId) {
    if (!BARS[suggId]) BARS[suggId] = { results: [], active: -1 };
    return BARS[suggId];
  }

  function badgeFor(type) {
    if (type === "gene") return '<span class="suggest-badge gene">Gène</span>';
    if (type === "protein") return '<span class="suggest-badge protein">Protéine</span>';
    return '<span class="suggest-badge disease">Maladie</span>';
  }

  function renderSuggestions(results, query, suggId, inputId) {
    var box = document.getElementById(suggId);
    var input = document.getElementById(inputId);
    if (!box) return;
    var st = barState(suggId);
    st.results = results;
    st.active = results.length ? 0 : -1;
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
        html += '<div class="suggest-item' + (i === st.active ? " active" : "") + '" role="option" id="opt-' + i + '" data-route="' + r.route + '" aria-selected="' + (i === st.active) + '">' +
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
        go(el.getAttribute("data-route"));
      });
      el.addEventListener("mousemove", function () {
        setActive(parseInt(el.id.replace("opt-", ""), 10));
      });
    });
  }

  function setActive(i, suggId) {
    var st = barState(suggId);
    if (!st.results.length) return;
    st.active = Math.max(0, Math.min(st.results.length - 1, i));
    var box = document.getElementById(suggId);
    var input = document.getElementById(suggId.replace("suggestions-", "search-"));
    box.querySelectorAll(".suggest-item").forEach(function (el) {
      var idx = parseInt(el.id.replace("opt-", ""), 10);
      el.classList.toggle("active", idx === st.active);
      el.setAttribute("aria-selected", idx === st.active ? "true" : "false");
    });
    if (input) input.setAttribute("aria-activedescendant", "opt-" + st.active);
    var el = document.getElementById("opt-" + st.active);
    if (el) el.scrollIntoView({ block: "nearest" });
  }

  function closeSuggestions(suggId) {
    Object.keys(BARS).forEach(function (id) {
      if (suggId && id !== suggId) return;
      var box = document.getElementById(id);
      var input = document.getElementById(id.replace("suggestions-", "search-"));
      if (box) box.classList.remove("open");
      if (input) input.setAttribute("aria-expanded", "false");
    });
  }

  function initSearchBar(inputId, suggId, types) {
    var input = document.getElementById(inputId);
    if (!input) return;
    input.addEventListener("input", function () {
      renderSuggestions(search(input.value, types), input.value.trim(), suggId, inputId);
    });
    input.addEventListener("focus", function () {
      if (input.value.trim()) renderSuggestions(search(input.value, types), input.value.trim(), suggId, inputId);
    });
    input.addEventListener("keydown", function (ev) {
      var st = barState(suggId);
      if (ev.key === "ArrowDown") { ev.preventDefault(); setActive(st.active + 1, suggId); }
      else if (ev.key === "ArrowUp") { ev.preventDefault(); setActive(st.active - 1, suggId); }
      else if (ev.key === "Enter") {
        ev.preventDefault();
        var pick = st.results[st.active] || st.results[0];
        if (pick) go(pick.route);
      } else if (ev.key === "Escape") { closeSuggestions(suggId); input.blur(); }
    });
  }

  function initSearch() {
    initSearchBar("search-gene", "suggestions-gene", ["gene", "protein"]);
    initSearchBar("search-disease", "suggestions-disease", ["disease"]);
    document.addEventListener("click", function (ev) {
      if (!ev.target.closest(".search-wrap")) closeSuggestions();
    });
    document.querySelectorAll(".hero-examples .chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var bar = chip.getAttribute("data-bar") === "disease" ? "disease" : "gene";
        var inputId = bar === "disease" ? "search-disease" : "search-gene";
        var suggId = bar === "disease" ? "suggestions-disease" : "suggestions-gene";
        var types = bar === "disease" ? ["disease"] : ["gene", "protein"];
        var input = document.getElementById(inputId);
        if (!input) return;
        input.value = chip.getAttribute("data-q");
        input.focus();
        renderSuggestions(search(input.value, types), input.value.trim(), suggId, inputId);
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
            (gene.omim ? '<span class="meta-chip"><span class="chip-label">OMIM g\u00e8ne</span><a href="https://omim.org/entry/' + escapeHtml(gene.omim) + '" target="_blank" rel="noopener">#' + escapeHtml(gene.omim) + ' \u2197</a></span>' : "") +
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
            (window.LOCUS && window.LOCUS.phenoCardHtml ? window.LOCUS.phenoCardHtml(gene) : "") +
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
    var subsCard = "";
    if (d.subs && d.subs.length) {
      subsCard = '<div class="card"><h2>Sous-pathologies (' + d.subs.length + ")</h2>" +
        '<div class="scroll-box chip-wrap">' + d.subs.map(function (sid) {
          var sd = DISEASES[sid];
          return '<a class="chip" href="#/disease/' + encodeURIComponent(sid) + '">' + escapeHtml(sd ? sd.disease.name : sid) + "</a>";
        }).join("") + "</div></div>";
    }
    var allGenes = agg.genes.slice();
    (agg.extra || []).forEach(function (s) {
      var loc = (window.LOCUS && window.LOCUS.locusOf) ? window.LOCUS.locusOf(s) : "";
      allGenes.push({ symbol: s, name: s, locus: loc });
    });
    var geneCards = allGenes.map(function (g) {
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
            (d.omim ? '<span class="meta-chip"><span class="chip-label">OMIM</span><a href="https://omim.org/entry/' + escapeHtml(d.omim) + '" target="_blank" rel="noopener">' + escapeHtml(d.omim) + " ↗</a></span>" : "") +
            (d.inheritance ? '<span class="meta-chip"><span class="chip-label">Hérédité</span>' + escapeHtml(d.inheritance) + "</span>" : "") +
          "</div>" +
        "</div>" +
        '<div class="detail-cols">' +
          '<div class="card">' +
            "<h2>Présentation clinique</h2>" +
            "<p style=\"margin:0;color:var(--ink-soft)\">" + escapeHtml(d.description) + "</p>" +
          "</div>" +
          '<div class="card">' +
            "<h2>Gènes associés (" + allGenes.length + ")</h2>" +
            '<div class="scroll-box">' + geneCards + "</div>" +
          "</div>" +
          subsCard +
          '<div class="card">' +
            "<h2>Mécanisme moléculaire</h2>" +
            "<p style=\"margin:0;color:var(--ink-soft)\">" + escapeHtml(d.mechanism) + "</p>" +
          "</div>" +
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

  function go(hash, replace) {
    if (location.hash === hash) return;
    try {
      if (replace) history.replaceState(null, "", hash);
      else history.pushState(null, "", hash);
      route();
    } catch (e) {
      location.hash = hash;
    }
  }
  window.LOCUS_NAV = go;

  function route() {
    var hash = location.hash || "#/";
    var parts = hash.replace(/^#\//, "").split("/");
    var section = decodeURIComponent(parts[0] || "");
    var arg = decodeURIComponent(parts[1] || "");
    if (section === "" || section === "home") {
      renderHome();
    } else if (section === "gene") {
      var gene = findGene(arg);
      if (gene) {
        renderGene(gene);
      } else if (window.LOCUS && window.LOCUS.findLocusGene) {
        var lg = window.LOCUS.findLocusGene(arg);
        if (lg) window.LOCUS.renderSimpleGene(app, lg); else renderNotFound();
      } else {
        renderNotFound();
      }
    } else if (section === "protein") {
      var byProt = findGeneByProtein(arg);
      if (byProt) { go("#/gene/" + encodeURIComponent(byProt.symbol), true); return; }
      else renderNotFound();
    } else if (section === "disease") {
      renderDisease(arg);
    } else if (section === "genes" || section === "caryo") {
      if (window.LOCUS && window.LOCUS.renderGenes) {
        window.LOCUS.renderGenes(app, arg, decodeURIComponent(parts[2] || ""));
      } else {
        renderNotFound();
      }
    } else {
      renderNotFound();
    }
    app.focus({ preventScroll: true });
  }

  document.querySelectorAll("[data-scroll]").forEach(function (link) {
    link.addEventListener("click", function (ev) {
      var target = link.getAttribute("data-scroll");
      var onHome = !location.hash || location.hash === "#/";
      if (!onHome) {
        ev.preventDefault();
        pendingScroll = target;
        go("#/");
      }
    });
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
      var input = document.getElementById("search-gene");
      if (input) { ev.preventDefault(); input.focus(); }
    }
  });

  document.addEventListener("click", function (ev) {
    if (ev.defaultPrevented) return;
    var t = ev.target;
    var a = t && t.closest ? t.closest('a[href^="#/"]') : null;
    if (!a || a.hasAttribute("data-scroll")) return;
    var href = a.getAttribute("href");
    if (!href) return;
    ev.preventDefault();
    go(href);
  });

  window.addEventListener("hashchange", route);
  route();
})();
