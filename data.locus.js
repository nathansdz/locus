const CHROM_ORDER = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","X","Y","M"];

const CYTOBANDS = {};
const CHROM_LEN = {};
(function () {
  var STAIN_NAME = { n: "gneg", "0": "gpos10", "2": "gpos25", "5": "gpos50", "7": "gpos75", "1": "gpos100", a: "acen", v: "gvar", s: "stalk" };
  var raw = (typeof CYTOBAND_DATA_P1 !== "undefined" ? CYTOBAND_DATA_P1 : "") + (typeof CYTOBAND_DATA_P2 !== "undefined" ? CYTOBAND_DATA_P2 : "");
  raw.split(";").forEach(function (seg) {
    if (!seg) return;
    var p = seg.split(",");
    var c = p[0], s = +p[1], e = +p[2];
    if (!c || !p[3]) return;
    if (!CYTOBANDS[c]) CYTOBANDS[c] = [];
    CYTOBANDS[c].push({ s: s, e: e, name: p[3], stain: STAIN_NAME[p[4]] || "gneg" });
    if (e > (CHROM_LEN[c] || 0)) CHROM_LEN[c] = e;
  });
})();

const GENOME_LOCUS = {};
const SYMBOL_LOCUS = {};
(function () {
  var parts = [
    GENOME_LOCUS_P1,
    GENOME_LOCUS_P2,
    GENOME_LOCUS_P3,
    GENOME_LOCUS_P4,
    GENOME_LOCUS_P5,
    GENOME_LOCUS_P6,
    GENOME_LOCUS_P7,
    GENOME_LOCUS_P8,
    GENOME_LOCUS_P9,
    GENOME_LOCUS_P10,
    GENOME_LOCUS_P11,
    GENOME_LOCUS_P12,
    GENOME_LOCUS_P13,
    GENOME_LOCUS_P14,
    GENOME_LOCUS_P15,
    GENOME_LOCUS_P16,
    GENOME_LOCUS_P17,
    GENOME_LOCUS_P18,
    GENOME_LOCUS_P19,
    GENOME_LOCUS_P20,
    GENOME_LOCUS_P21,
    GENOME_LOCUS_P22,
    GENOME_LOCUS_P23,
    GENOME_LOCUS_P24,
    GENOME_LOCUS_P25,
    GENOME_LOCUS_P26,
    GENOME_LOCUS_P27,
    GENOME_LOCUS_P28
  ];
  parts.join("").split(";").forEach(function (seg) {
    if (!seg) return;
    var bar = seg.indexOf("|");
    var eq = seg.indexOf("=");
    if (bar <= 0 || eq <= bar) return;
    var chr = seg.slice(0, bar);
    var band = seg.slice(bar + 1, eq);
    var syms = seg.slice(eq + 1).split(",");
    if (!GENOME_LOCUS[chr]) GENOME_LOCUS[chr] = {};
    GENOME_LOCUS[chr][band] = syms;
    for (var i = 0; i < syms.length; i++) {
      SYMBOL_LOCUS[syms[i]] = { chr: chr, band: band };
    }
  });
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = { CHROM_ORDER: CHROM_ORDER, CYTOBANDS: CYTOBANDS, CHROM_LEN: CHROM_LEN, GENOME_LOCUS: GENOME_LOCUS, SYMBOL_LOCUS: SYMBOL_LOCUS };
}
