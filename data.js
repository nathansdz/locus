const GENOME_DATA = {
  genes: [
    {
      symbol: "TP53",
      name: "Tumor protein p53",
      locus: "17p13.1",
      strand: "-",
      geneType: "Gène codant une protéine",
      aliases: ["P53", "LFS1", "TRP53"],
      protein: {
        name: "Protéine p53",
        uniprot: "P04637",
        length: 393,
        aliases: ["p53", "antigène NY-CO-13", "phosphoprotéine p53"],
        function: "Facteur de transcription « gardien du génome » : en réponse à un stress cellulaire (dommages à l'ADN, hypoxie), p53 active l'arrêt du cycle cellulaire, la réparation de l'ADN ou l'apoptose."
      },
      expression: [
        { cellType: "Fibroblastes", tissue: "Peau", level: "Élevée", score: 92 },
        { cellType: "Lymphocytes T", tissue: "Sang périphérique", level: "Élevée", score: 88 },
        { cellType: "Cellules épithéliales bronchiques", tissue: "Poumon", level: "Moyenne", score: 61 },
        { cellType: "Hépatocytes", tissue: "Foie", level: "Moyenne", score: 64 },
        { cellType: "Neurones corticaux", tissue: "Cerveau (cortex)", level: "Moyenne", score: 58 },
        { cellType: "Ovocytes", tissue: "Ovaire", level: "Faible", score: 22 }
      ],
      diseases: [
        {
          id: "syndrome-de-li-fraumeni",
          name: "Syndrome de Li-Fraumeni",
          omim: "151623",
          inheritance: "Autosomique dominante",
          description: "Prédisposition héréditaire rare à de multiples cancers survenant à un âge précoce : sarcomes des tissus mous, cancer du sein, tumeurs cérébrales, corticosurrénalomes et leucémies aiguës.",
          mechanism: "Mutation germinale perte de fonction de TP53 : perte de la surveillance du génome, accumulation de mutations somatiques."
        }
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = GENOME_DATA;
}
