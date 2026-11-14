const GENES_PART7 = [
  {
    symbol: "SCN5A",
    name: "Sodium voltage-gated channel alpha subunit 5",
    locus: "3p22.2",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["CMD1E", "CMPD1", "LQT3", "BrS1", "HB1"],
    protein: {
      name: "Sous-unité alpha du canal sodique cardiaque Nav1.5",
      uniprot: "Q14524",
      length: 2016,
      aliases: ["Nav1.5", "canal sodique cardiaque"],
      function: "Canal sodique voltage-dépendant responsable du courant sodique rapide INa qui initie la phase 0 du potentiel d'action cardiaque ; il détermine la vitesse de dépolarisation ventriculaire."
    },
    expression: [
      { cellType: "Cardiomyocytes ventriculaires", tissue: "Cœur (ventricule)", level: "Élevée", score: 94 },
      { cellType: "Cardiomyocytes auriculaires", tissue: "Cœur (oreillette)", level: "Élevée", score: 86 },
      { cellType: "Cellules du nœud sinusal", tissue: "Cœur (nœud sinusal)", level: "Moyenne", score: 55 },
      { cellType: "Myocytes squelettiques", tissue: "Muscle squelettique", level: "Faible", score: 22 }
    ],
    diseases: [
      {
        id: "syndrome-du-qt-long-3",
        name: "Syndrome du QT long de type 3",
        omim: "603830",
        inheritance: "Autosomique dominante",
        description: "Allongement de l'intervalle QT à l'ECG avec risque de torsades de pointes, syncopes et mort subite, souvent déclenchées par le repos ou le sommeil ; les symptômes cardiaques débutent volontiers dans l'enfance.",
        mechanism: "Mutations gain de fonction de SCN5A : courant sodique persistant en fin de plateau du potentiel d'action, responsable de l'allongement de la repolarisation ventriculaire."
      },
      {
        id: "syndrome-de-brugada-1",
        name: "Syndrome de Brugada, type 1",
        omim: "601144",
        inheritance: "Autosomique dominante",
        description: "Trouble du rythme ventriculaire caractérisé par un sus-décalage du segment ST en V1-V3 et un risque de fibrillation ventriculaire et de mort subite, volontiers chez l'homme jeune, souvent au repos ou fébrile.",
        mechanism: "Mutations perte de fonction de Nav1.5 : réduction du courant sodique, déséquilibre des courants de la phase 1 du potentiel d'action de l'épicarde droit."
      }
    ]
  },
  {
    symbol: "PRKN",
    name: "Parkin RBR E3 ubiquitin protein ligase",
    locus: "6q26",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["PARK2", "PDJ"],
    protein: {
      name: "Parkine (E3 ubiquitine ligase)",
      uniprot: "O60260",
      length: 465,
      aliases: ["parkine", "Parkin"],
      function: "E3 ubiquitine ligase cytosolique : elle ubiquitine les protéines endommagées des mitochondries pour signaler leur dégradation (mitophagie) et participe à la dégradation protéasomale de nombreux substrats."
    },
    expression: [
      { cellType: "Neurones dopaminergiques", tissue: "Substance noire", level: "Élevée", score: 87 },
      { cellType: "Neurones corticaux", tissue: "Cerveau (cortex)", level: "Élevée", score: 78 },
      { cellType: "Cardiomyocytes", tissue: "Cœur", level: "Moyenne", score: 57 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Moyenne", score: 49 },
      { cellType: "Lymphocytes", tissue: "Sang périphérique", level: "Faible", score: 25 }
    ],
    diseases: [
      {
        id: "maladie-de-parkinson-2",
        name: "Maladie de Parkinson juvénile, type 2",
        omim: "600116",
        inheritance: "Autosomique récessive",
        description: "Forme précoce de maladie de Parkinson (souvent avant 40 ans) : syndrome parkinsonien lentement progressif avec dystonie des membres inférieurs, bonne réponse à la L-dopa et absence fréquente de démence.",
        mechanism: "Mutations perte de fonction biallelliques de la parkin : défaut de mitophagie, accumulation de mitochondries endommagées et dégénérescence des neurones dopaminergiques."
      }
    ]
  },
  {
    symbol: "PINK1",
    name: "PTEN induced kinase 1",
    locus: "1p36.12",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["PARK6"],
    protein: {
      name: "Kinase PINK1 mitochondriale",
      uniprot: "Q9BXM7",
      length: 581,
      aliases: ["PINK1", "PTEN-induced putative kinase 1"],
      function: "Kinase mitochondriale qui s'accumule à la membrane externe des mitochondries endommagées et recrute la parkin pour déclencher leur élimination par mitophagie."
    },
    expression: [
      { cellType: "Neurones dopaminergiques", tissue: "Substance noire", level: "Élevée", score: 85 },
      { cellType: "Neurones corticaux", tissue: "Cerveau (cortex)", level: "Moyenne", score: 63 },
      { cellType: "Cardiomyocytes", tissue: "Cœur", level: "Moyenne", score: 60 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Moyenne", score: 48 },
      { cellType: "Myocytes squelettiques", tissue: "Muscle squelettique", level: "Moyenne", score: 45 }
    ],
    diseases: [
      {
        id: "maladie-de-parkinson-6",
        name: "Maladie de Parkinson, type 6",
        omim: "605909",
        inheritance: "Autosomique récessive",
        description: "Maladie de Parkinson à début précoce (adolescence ou jeune adulte), d'évolution lente, avec syndrome parkinsonien typique répondant bien à la L-dopa et troubles du sommeil fréquents.",
        mechanism: "Mutations perte de fonction de PINK1 : voie PINK1/parkin de contrôle qualité mitochondriale inactivée, stress oxydatif et mort des neurones dopaminergiques."
      }
    ]
  },
  {
    symbol: "PARK7",
    name: "Parkinsonism associated deglycase",
    locus: "1p36.23",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["DJ1", "DJ-1", "PARK7"],
    protein: {
      name: "Protéine DJ-1",
      uniprot: "Q99497",
      length: 189,
      aliases: ["DJ-1", "protéine associée au parkinsonisme"],
      function: "Protéine ubiquitaire à activité déglycase et chaperonne : elle détoxifie les protéines glyquées et protège les cellules, notamment les neurones dopaminergiques, du stress oxydatif."
    },
    expression: [
      { cellType: "Neurones dopaminergiques", tissue: "Substance noire", level: "Élevée", score: 84 },
      { cellType: "Neurones corticaux", tissue: "Cerveau (cortex)", level: "Élevée", score: 72 },
      { cellType: "Astroglies", tissue: "Cerveau", level: "Moyenne", score: 58 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Moyenne", score: 50 },
      { cellType: "Cellules rénales", tissue: "Rein", level: "Moyenne", score: 47 }
    ],
    diseases: [
      {
        id: "maladie-de-parkinson-7",
        name: "Maladie de Parkinson, type 7",
        omim: "606324",
        inheritance: "Autosomique récessive",
        description: "Maladie de Parkinson à début précoce (avant 40 ans) avec syndrome parkinsonien lentement progressif, dystonie et bonne réponse prolongée à la L-dopa ; les délétions homozygotes du gène DJ-1 sont responsables.",
        mechanism: "Mutations perte de fonction de DJ-1 : perte de protection contre le stress oxydatif et les protéines glyquées, vulnérabilité accrue des neurones dopaminergiques."
      }
    ]
  },
  {
    symbol: "ATP7B",
    name: "ATPase copper transporting beta",
    locus: "13q14.3",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["WD"],
    protein: {
      name: "ATPase de transport du cuivre ATP7B",
      uniprot: "P35670",
      length: 1465,
      aliases: ["ATPase 7B", "protéine de la maladie de Wilson"],
      function: "Pompe à cuivre de type P-type située dans l'appareil de Golgi des hépatocytes : elle incorpore le cuivre dans la céruléoplasmine et excrète l'excès de cuivre dans la bile."
    },
    expression: [
      { cellType: "Hépatocytes", tissue: "Foie", level: "Élevée", score: 95 },
      { cellType: "Cellules rénales tubulaires", tissue: "Rein", level: "Élevée", score: 74 },
      { cellType: "Cellules de l'intestin grêle", tissue: "Intestin grêle", level: "Moyenne", score: 56 },
      { cellType: "Neurones", tissue: "Cerveau", level: "Faible", score: 21 },
      { cellType: "Cellules placentaires", tissue: "Placenta", level: "Faible", score: 18 }
    ],
    diseases: [
      {
        id: "maladie-de-wilson",
        name: "Maladie de Wilson",
        omim: "277900",
        inheritance: "Autosomique récessive",
        description: "Accumulation toxique de cuivre dans le foie (hépatite chronique, cirrhose), le cerveau (syndrome neurologique avec tremblement et dystonie) et la cornée (anneau de Kayser-Fleischer) ; traitable par chélation du cuivre si le diagnostic est précoce.",
        mechanism: "Mutations perte de fonction d'ATP7B : défaut d'excrétion biliaire du cuivre et de son incorporation dans la céruléoplasmine, cuivre libre toxique s'accumulant dans les tissus."
      }
    ]
  },
  {
    symbol: "PAH",
    name: "Phenylalanine hydroxylase",
    locus: "12q23.2",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["PKU", "PKU1"],
    protein: {
      name: "Phénylalanine hydroxylase",
      uniprot: "P00439",
      length: 452,
      aliases: ["PAH", "phénylalanine-4-monooxygénase"],
      function: "Enzyme hépatique qui hydroxyle la phénylalanine en tyrosine (avec le cofacteur BH4) : c'est l'étape limitante du catabolisme de la phénylalanine."
    },
    expression: [
      { cellType: "Hépatocytes", tissue: "Foie", level: "Élevée", score: 96 },
      { cellType: "Cellules rénales tubulaires", tissue: "Rein", level: "Moyenne", score: 54 },
      { cellType: "Fibroblastes", tissue: "Peau", level: "Faible", score: 20 }
    ],
    diseases: [
      {
        id: "phenylcetonurie",
        name: "Phénylcétonurie",
        omim: "261600",
        inheritance: "Autosomique récessive",
        description: "Déficit enzymatique entraînant l'accumulation de phénylalanine sanguine ; sans traitement diététique pauvre en phénylalanine dès la naissance (dépistage néonatal systématique), retard mental sévère, microcéphalie, convulsions et hypopigmentation.",
        mechanism: "Mutations perte de fonction de la PAH : blocage de la conversion de la phénylalanine en tyrosine, accumulation de phénylalanine et de ses métabolites neurotoxiques."
      }
    ]
  },
  {
    symbol: "HFE",
    name: "Homeostatic iron regulator",
    locus: "6p22.2",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["HFE1", "HLA-H", "MR2"],
    protein: {
      name: "Régulateur homéostatique du fer (HFE)",
      uniprot: "Q30201",
      length: 348,
      aliases: ["HFE", "protéine HLA-H"],
      function: "Protéine de type MHC classe I-like exprimée par les hépatocytes et les cellules intestinales : elle interagit avec le récepteur de la transferrine et régule l'absorption intestinale du fer via l'hepcidine."
    },
    expression: [
      { cellType: "Hépatocytes", tissue: "Foie", level: "Élevée", score: 90 },
      { cellType: "Entérocytes", tissue: "Intestin grêle", level: "Élevée", score: 82 },
      { cellType: "Macrophages", tissue: "Rate / moelle", level: "Moyenne", score: 55 },
      { cellType: "Cellules placentaires", tissue: "Placenta", level: "Moyenne", score: 48 }
    ],
    diseases: [
      {
        id: "hemochromatose-hereditaire",
        name: "Hémochromatose héréditaire de type 1",
        omim: "235200",
        inheritance: "Autosomique récessive",
        description: "Surcharge progressive en fer dans le foie, le pancréas, le cœur et les articulations (diabète « bronzé », cirrhose, insuffisance cardiaque, arthropathie) ; la mutation C282Y homozygote est la forme la plus fréquente. Prévenue par saignées régulières.",
        mechanism: "Mutation C282Y d'HFE : détection défaillante de la saturation en transferrine, absorption intestinale du fer augmentée malgré les réserves, dépôt tissulaire du fer."
      }
    ]
  },
  {
    symbol: "F8",
    name: "Coagulation factor VIII",
    locus: "Xq28",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["F8B", "F8C", "HEMA", "AHF"],
    protein: {
      name: "Facteur VIII de coagulation",
      uniprot: "P00451",
      length: 2351,
      aliases: ["facteur VIII", "FVIII", "facteur antihémophilique A"],
      function: "Cofacteur essentiel de la coagulation : activé par la thrombine, il s'associe au facteur IXa pour former le complexe ténase qui active le facteur X dans la voie intrinsèque."
    },
    expression: [
      { cellType: "Cellules endothéliales sinusoïdes hépatiques", tissue: "Foie", level: "Élevée", score: 91 },
      { cellType: "Cellules endothéliales", tissue: "Vaisseaux sanguins", level: "Élevée", score: 80 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Moyenne", score: 52 },
      { cellType: "Mégacaryocytes", tissue: "Moelle osseuse", level: "Moyenne", score: 45 }
    ],
    diseases: [
      {
        id: "hemophilie-a",
        name: "Hémophilie A",
        omim: "306700",
        inheritance: "Liée à l'X, récessive",
        description: "Déficit en facteur VIII responsable d'un syndrome hémorragique : hémarthroses récidivantes (genoux, chevilles), hématomes profonds, hémorragies prolongées après chirurgie. La forme sévère (< 1 % d'activité) est la plus fréquente parmi les formes graves.",
        mechanism: "Mutations du gène F8 (inversions du intron 22 fréquentes dans les formes sévères) : synthèse absente ou défectueuse du facteur VIII, voie intrinsèque de la coagulation interrompue."
      }
    ]
  },
  {
    symbol: "IL2RG",
    name: "Interleukin 2 receptor subunit gamma",
    locus: "Xq13.1",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["CIDX", "SCIDX", "SCIDX1", "IMD4", "gammaC"],
    protein: {
      name: "Chaîne gamma commune des récepteurs d'interleukines (γc)",
      uniprot: "P31785",
      length: 347,
      aliases: ["chaîne γc", "CD132", "récepteur commun IL-2/4/7/9/15/21"],
      function: "Sous-unité commune des récepteurs de plusieurs cytokines (IL-2, IL-4, IL-7, IL-9, IL-15, IL-21) : elle transmet le signal de survie et de prolifération via les voies JAK3/STAT dans les lymphocytes."
    },
    expression: [
      { cellType: "Lymphocytes T", tissue: "Sang périphérique", level: "Élevée", score: 92 },
      { cellType: "Lymphocytes NK", tissue: "Sang périphérique", level: "Élevée", score: 90 },
      { cellType: "Lymphocytes B", tissue: "Sang périphérique", level: "Élevée", score: 84 },
      { cellType: "Thymocytes", tissue: "Thymus", level: "Élevée", score: 81 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Faible", score: 18 }
    ],
    diseases: [
      {
        id: "scid-lie-a-l-x",
        name: "Déficit immunitaire combiné sévère lié à l'X (SCID-X1)",
        omim: "300400",
        inheritance: "Liée à l'X, récessive",
        description: "Immunodéficience sévère du nourrisson (« maladie du garçon bulle ») : lymphopénie T et NK profonde, lymphocytes B présents mais non fonctionnels, infections opportunistes graves dès les premiers mois ; curable par greffe de moelle ou thérapie génique.",
        mechanism: "Mutations de la chaîne γc : blocage de la signalisation des cytokines IL-7 et IL-15, arrêt du développement des lymphocytes T et NK."
      }
    ]
  }
];
