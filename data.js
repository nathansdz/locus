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
    },
    {
      symbol: "BRCA1",
      name: "BRCA1 DNA repair associated",
      locus: "17q21.31",
      strand: "+",
      geneType: "Gène codant une protéine",
      aliases: ["BRCC1", "IRIS", "PSCP"],
      protein: {
        name: "Protéine BRCA1",
        uniprot: "P38398",
        length: 1863,
        aliases: ["BRCA1", "protéine de réparation de l'ADN BRCA1"],
        function: "Protéine de réparation de l'ADN par recombinaison homologue : elle interagit avec RAD51, PALB2 et le complexe BRCA1-A pour restaurer les cassures double-brin de l'ADN."
      },
      expression: [
        { cellType: "Cellules épithéliales mammaires", tissue: "Sein", level: "Élevée", score: 85 },
        { cellType: "Cellules épithéliales ovariennes", tissue: "Ovaire", level: "Élevée", score: 80 },
        { cellType: "Lymphocytes B", tissue: "Sang périphérique", level: "Moyenne", score: 55 },
        { cellType: "Cellules épithéliales prostatiques", tissue: "Prostate", level: "Moyenne", score: 49 },
        { cellType: "Hépatocytes", tissue: "Foie", level: "Faible", score: 30 }
      ],
      diseases: [
        {
          id: "cancer-du-sein-et-de-l-ovaire-hereditaire",
          name: "Cancer du sein et de l'ovaire héréditaire",
          omim: "604370",
          inheritance: "Autosomique dominante",
          description: "Prédisposition héréditaire au cancer du sein (souvent précoce et bilatéral) et au cancer de l'ovaire, ainsi qu'à des cancers du sein masculins, de la prostate et du pancréas.",
          mechanism: "Mutation germinale de BRCA1 : défaut de réparation par recombinaison homologue, instabilité génomique dans les tissus hormonosensibles."
        },
        {
          id: "anemie-de-fanconi-groupe-s",
          name: "Anémie de Fanconi, groupe de complémentation S",
          omim: "613951",
          inheritance: "Autosomique récessive",
          description: "Anémie médullaire progressive avec malformations congénitales et forte prédisposition aux leucémies et aux tumeurs solides.",
          mechanism: "Mutations bi-alléliques de BRCA1 : instabilité chromosomique caractéristique de l'anémie de Fanconi."
        }
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = GENOME_DATA;
}
