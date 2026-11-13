const GENOME_DATA = {
  genes: [].concat(
    GENES_PART1, GENES_PART2, GENES_PART3, GENES_PART4, GENES_PART5,
    GENES_PART6, GENES_PART7, GENES_PART8
  )
};

if (typeof DATA_REFERENCES !== "undefined") {
  GENOME_DATA.genes.forEach(function (gene) {
    var refs = DATA_REFERENCES[gene.symbol];
    if (!refs) return;
    if (refs.gene) gene.references = refs.gene;
    if (refs.diseases) {
      gene.diseases.forEach(function (d) {
        if (refs.diseases[d.id]) d.references = refs.diseases[d.id];
      });
    }
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = GENOME_DATA;
}
