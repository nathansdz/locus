const GENES_PART8 = [
  {
    symbol: "BTK",
    name: "Bruton tyrosine kinase",
    locus: "Xq22.1",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["ATK", "BPK", "XLA", "AGMX1", "IMD1"],
    protein: {
      name: "Tyrosine kinase de Bruton (BTK)",
      uniprot: "Q06187",
      length: 659,
      aliases: ["BTK", "kinase de Bruton"],
      function: "Kinase cytoplasmique de la famille Tec, essentielle à la signalisation du pré-récepteur B puis du récepteur B (BCR) : elle active les voies PLCγ2, PI3K et NF-κB nécessaires à la survie, la prolifération et la différenciation des lymphocytes B."
    },
    expression: [
      { cellType: "Lymphocytes B", tissue: "Sang périphérique", level: "Élevée", score: 93 },
      { cellType: "Cellules de la moelle osseuse (pré-B)", tissue: "Moelle osseuse", level: "Élevée", score: 85 },
      { cellType: "Lymphocytes T", tissue: "Sang périphérique", level: "Moyenne", score: 48 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Faible", score: 22 }
    ],
    diseases: [
      {
        id: "agammaglobulinemie-liee-a-l-x",
        name: "Ammaglobulinémie liée à l'X (maladie de Bruton)",
        omim: "300755",
        inheritance: "Liée à l'X, récessive",
        description: "Blocage précoce de la maturation des lymphocytes B : absence quasi totale d'immunoglobulines (IgG, IgA, IgM) et de lymphocytes B circulants, infections bactériennes récurrentes ORL et pulmonaires dès 6-12 mois ; traitement par immunoglobulines substitutives.",
        mechanism: "Mutations perte de fonction de BTK : signalisation du pré-BCR interrompue, arrêt de la différenciation des pré-B en lymphocytes B immatures."
      }
    ]
  },
  {
    symbol: "RAG1",
    name: "Recombination activating 1",
    locus: "11p12",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["RNF74"],
    protein: {
      name: "Protéine activatrice de la recombinaison RAG-1",
      uniprot: "P15918",
      length: 1043,
      aliases: ["RAG-1", "V(D)J recombinase"],
      function: "Avec RAG2, elle forme la recombinase V(D)J qui reconnaît les séquences RSS et clive l'ADN pour initier la recombinaison des segments V, D et J des gènes d'immunoglobulines et de récepteurs T."
    },
    expression: [
      { cellType: "Thymocytes", tissue: "Thymus", level: "Élevée", score: 89 },
      { cellType: "Pré-lymphocytes B de la moelle osseuse", tissue: "Moelle osseuse", level: "Élevée", score: 84 },
      { cellType: "Lymphocytes matures", tissue: "Sang périphérique", level: "Faible", score: 15 }
    ],
    diseases: [
      {
        id: "scid-par-deficit-en-rag1",
        name: "Déficit immunitaire combiné sévère par déficit en RAG1",
        omim: "601457",
        inheritance: "Autosomique récessive",
        description: "Forme T-B-NK+ de SCID : absence de lymphocytes T et B avec lymphocytes NK conservés, infections sévères et récurrentes dès la naissance, parfois associée à un syndrome d'Omenn (érythrodermie, hépatosplénomégalie, éosinophilie).",
        mechanism: "Mutations perte de fonction de RAG1 : recombinaison V(D)J impossible, aucun lymphocyte T ni B ne se développe à partir des progéniteurs."
      }
    ]
  },
  {
    symbol: "RHO",
    name: "Rhodopsin",
    locus: "3q22.1",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["OPN2", "RP4"],
    protein: {
      name: "Rhodopsine",
      uniprot: "P08100",
      length: 348,
      aliases: ["rhodopsine", "pigment des bâtonnets"],
      function: "Récepteur couplé aux protéines G des bâtonnets rétiniens : liée au 11-cis-rétinal, elle s'active à la lumière (transducine → phosphodiestérase) et initie la cascade de phototransduction."
    },
    expression: [
      { cellType: "Bâtonnets rétiniens", tissue: "Rétine", level: "Élevée", score: 98 },
      { cellType: "Côneaux rétiniens", tissue: "Rétine", level: "Faible", score: 12 },
      { cellType: "Épithélium pigmentaire rétinien", tissue: "Rétine", level: "Faible", score: 10 }
    ],
    diseases: [
      {
        id: "retinite-pigmentaire-autosomique-dominante",
        name: "Rétinite pigmentaire autosomique dominante (RHO)",
        omim: "180380",
        inheritance: "Autosomique dominante",
        description: "Dégénérescence progressive des photorécepteurs : héméralopie précoce, rétrécissement du champ visuel en « tunnel », dépôts pigmentaires en « spicules osseux » au fond d'œil, conduisant à la cécité. La mutation P23H est la plus fréquente en Amérique du Nord.",
        mechanism: "Mutations faux-sens de la rhodopsine (souvent P23H) : protéine mal repliée, accumulation dans le réticulum des bâtonnets, toxicité et mort cellulaire des photorécepteurs."
      }
    ]
  },
  {
    symbol: "PKD1",
    name: "Polycystin 1, PC1/Transient receptor potential channel interacting",
    locus: "16p13.3",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["PC1", "APKD1", "PBP"],
    protein: {
      name: "Polycystine-1",
      uniprot: "P98402",
      length: 4302,
      aliases: ["polycystine-1", "PC1"],
      function: "Grande glycoprotéine membranaire des cils primaires des cellules tubulaires rénales, en complexe avec la polycystine-2 : elle participe à la mécanotransduction ciliaire et à la régulation de la prolifération cellulaire."
    },
    expression: [
      { cellType: "Cellules épithéliales tubulaires rénales", tissue: "Rein", level: "Élevée", score: 90 },
      { cellType: "Cellules épithéliales des canaux biliaires", tissue: "Foie", level: "Élevée", score: 78 },
      { cellType: "Cellules endothéliales vasculaires", tissue: "Vaisseaux", level: "Moyenne", score: 55 },
      { cellType: "Cellules musculaires lisses", tissue: "Vaisseaux", level: "Moyenne", score: 50 }
    ],
    diseases: [
      {
        id: "polykystose-renale-autosomique-dominante",
        name: "Polykystose rénale autosomique dominante, type 1",
        omim: "173900",
        inheritance: "Autosomique dominante",
        description: "Maladie kystique rénale la plus fréquente : kystes bilatéraux multiples des reins (et du foie), hypertension précoce, hématurie, douleurs lombaires, insuffisance rénale chronique à l'âge adulte, parfois anévrismes intracrâniens.",
        mechanism: "Mutation germinale de PKD1 (souvent tronquante) + second hit somatique dans une cellule tubulaire : perte de polycystine-1, prolifération anarchique et formation de kystes."
      }
    ]
  },
  {
    symbol: "MEN1",
    name: "Menin",
    locus: "11q13.1",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["MEN1 tumor suppressor"],
    protein: {
      name: "Ménine",
      uniprot: "O00255",
      length: 610,
      aliases: ["ménine", "suppresseur de tumeur MEN1"],
      function: "Protéine d'échafaudage nucléaire, suppresseur de tumeur : elle fait partie du complexe de remodelage de la chromatine et régule la transcription de gènes impliqués dans la prolifération cellulaire (via JunD, NF-κB)."
    },
    expression: [
      { cellType: "Cellules endocrines parathyroïdiennes", tissue: "Parathyroïdes", level: "Élevée", score: 85 },
      { cellType: "Cellules β pancréatiques", tissue: "Pancréas", level: "Élevée", score: 82 },
      { cellType: "Cellules de l'adénohypophyse", tissue: "Hypophyse", level: "Élevée", score: 80 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Moyenne", score: 50 },
      { cellType: "Fibroblastes", tissue: "Peau", level: "Moyenne", score: 45 }
    ],
    diseases: [
      {
        id: "neoplasie-endocrinienne-multiple-de-type-1",
        name: "Néoplasie endocrinienne multiple de type 1 (NEM1)",
        omim: "131100",
        inheritance: "Autosomique dominante",
        description: "Tumeurs bénignes ou malignes des parathyroïdes (hyperparathyroïdie précoce, quasi constante), de l'hypophyse (prolactinome) et du pancréas endocrine (gastrinome, insulinome) ; le gène MEN1 code la ménine, suppresseur de tumeur.",
        mechanism: "Mutation germinale perte de fonction de MEN1 + inactivation somatique du second allèle dans les cellules tumorales : perte de la régulation négative de la prolifération cellulaire."
      }
    ]
  },
  {
    symbol: "NF2",
    name: "NF2, moesin-ezrin-radixin like (ERM) actin binding protein",
    locus: "22q12.2",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["SCH", "merlin"],
    protein: {
      name: "Merline (schwannomine)",
      uniprot: "P35240",
      length: 595,
      aliases: ["merline", "schwannomine", "neurofibromine 2"],
      function: "Protéine de la famille ERM qui relie le cytosquelette d'actine à la membrane plasmique : elle régule la forme cellulaire, la jonction cellulaire et inhibe la prolifération via les voies Hippo et NF-κB."
    },
    expression: [
      { cellType: "Cellules de Schwann", tissue: "Nerfs périphériques", level: "Élevée", score: 92 },
      { cellType: "Méninges", tissue: "Méninges", level: "Élevée", score: 85 },
      { cellType: "Cellules du cristallin", tissue: "Œil (cristallin)", level: "Moyenne", score: 60 },
      { cellType: "Neurones", tissue: "Cerveau", level: "Moyenne", score: 52 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Faible", score: 19 }
    ],
    diseases: [
      {
        id: "neurofibromatose-de-type-2",
        name: "Neurofibromatose de type 2",
        omim: "101000",
        inheritance: "Autosomique dominante",
        description: "Tumeurs bénignes du système nerveux : schwannomes vestibulaires bilatéraux (surdité progressive, acouphènes, troubles de l'équilibre) quasi pathognomoniques, méningiomes et schwannomes spinaux ; formes mosaïques plus bénignes fréquentes.",
        mechanism: "Mutation germinale perte de fonction de NF2 + second hit somatique dans les cellules de Schwann : perte de la merline, prolifération cellulaire incontrôlée."
      }
    ]
  },
  {
    symbol: "ATXN3",
    name: "Ataxin 3",
    locus: "14q32.12",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["MJD", "SCA3", "JOS"],
    protein: {
      name: "Ataxine-3",
      uniprot: "P54252",
      length: 361,
      aliases: ["ataxine-3", "déubiquitinase"],
      function: "Déubiquitinase nucléaire impliquée dans la dégradation protéasomale des protéines ubiquitinées et dans la régulation de la transcription ; elle contient un domaine polyglutamine dont l'expansion est pathogène."
    },
    expression: [
      { cellType: "Neurones du cervelet", tissue: "Cervelet", level: "Élevée", score: 88 },
      { cellType: "Neurones de la substance noire", tissue: "Substance noire", level: "Élevée", score: 82 },
      { cellType: "Neurones corticaux", tissue: "Cerveau (cortex)", level: "Moyenne", score: 64 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Moyenne", score: 46 },
      { cellType: "Myocytes squelettiques", tissue: "Muscle squelettique", level: "Moyenne", score: 44 }
    ],
    diseases: [
      {
        id: "maladie-de-machado-joseph",
        name: "Maladie de Machado-Joseph (ataxie spinocérébelleuse de type 3)",
        omim: "109150",
        inheritance: "Autosomique dominante",
        description: "Ataxie spinocérébelleuse la plus fréquente au monde : ataxie progressive de la marche, dysarthrie, atteinte des nerfs crâniens (ptosis, fasciculations de la langue), neuropathie périphérique et parfois syndrome parkinsonien, liée à l'expansion CAG de l'allèle ATXN3.",
        mechanism: "Expansion anormale des répétitions CAG (> 60) dans ATXN3 : protéine ataxine-3 avec polyglutamine longue, agrégats nucléaires toxiques et dégénérescence neuronale."
      }
    ]
  },
  {
    symbol: "GJB2",
    name: "Gap junction protein beta 2",
    locus: "13q12.11",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["CX26", "DFNB1", "DFNA3", "NSRD1"],
    protein: {
      name: "Connexine 26",
      uniprot: "P29033",
      length: 226,
      aliases: ["connexine 26", "Cx26", "protéine de jonction communicante bêta 2"],
      function: "Protéine des jonctions communicantes (gap junctions) formant des canaux entre cellules adjacentes : dans la cochlée, elle assure le recyclage du potassium et le maintien de l'endolymphe, essentiels à la transduction sonore."
    },
    expression: [
      { cellType: "Cellules de soutien de l'organe de Corti", tissue: "Cochlée", level: "Élevée", score: 94 },
      { cellType: "Cellules épithéliales cochléaires", tissue: "Cochlée", level: "Élevée", score: 88 },
      { cellType: "Kératinocytes épidermiques", tissue: "Peau", level: "Élevée", score: 76 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Moyenne", score: 44 },
      { cellType: "Cellules mammaires", tissue: "Sein", level: "Faible", score: 24 }
    ],
    diseases: [
      {
        id: "surdite-non-syndromique-dfnb1",
        name: "Surdité non syndromique DFNB1",
        omim: "220290",
        inheritance: "Autosomique récessive",
        description: "Surdité neurosensorielle congénitale, le plus souvent profonde et bilatérale, stable, sans atteinte associée (forme DFNB1) ; la délétion 35delG de GJB2 est la mutation la plus fréquente en Europe. Bénéficiant précocement d'un implant cochléaire.",
        mechanism: "Mutations perte de fonction biallelliques de GJB2 (souvent 35delG) : jonctions communicantes défectueuses dans la cochlée, perturbation du recyclage potassique et mort des cellules ciliées."
      }
    ]
  }
];
