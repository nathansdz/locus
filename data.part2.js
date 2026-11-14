const GENES_PART2 = [
  {
    symbol: "HTT",
    name: "Huntingtin",
    locus: "4p16.3",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["HD", "IT15"],
    protein: {
      name: "Huntingtine",
      uniprot: "P42858",
      length: 3144,
      aliases: ["huntingtine", "HD protein", "IT15"],
      function: "Grande protéine ubiquitaire impliquée dans le transport vésiculaire, la survie neuronale et la transcription ; son extrémité N-terminale contient un segment polyglutamine."
    },
    expression: [
      { cellType: "Neurones striataux (putamen, noyau caudé)", tissue: "Cerveau (striatum)", level: "Élevée", score: 95 },
      { cellType: "Neurones corticaux", tissue: "Cerveau (cortex)", level: "Élevée", score: 88 },
      { cellType: "Cellules de Purkinje", tissue: "Cervelet", level: "Moyenne", score: 57 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Moyenne", score: 62 },
      { cellType: "Cellules musculaires squelettiques", tissue: "Muscle squelettique", level: "Moyenne", score: 48 },
      { cellType: "Cardiomyocytes", tissue: "Cœur", level: "Faible", score: 25 }
    ],
    diseases: [
      {
        id: "maladie-de-huntington",
        name: "Maladie de Huntington",
        omim: "143100",
        inheritance: "Autosomique dominante",
        description: "Maladie neurodégénérative à début adulte : mouvements choréiques involontaires, troubles psychiatriques et déclin cognitif progressif, avec dégénérescence sélective des neurones moyens épineux du striatum.",
        mechanism: "Expansion d'un triplet CAG dans l'exon 1 (≥ 36 répétitions, pénétrance complète au-delà de 40) : huntingtine mutée toxique, agrégats intranucléaires et mort neuronale."
      }
    ]
  },
  {
    symbol: "HBB",
    name: "Hemoglobin subunit beta",
    locus: "11p15.4",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["CD31", "HBD", "beta-globin"],
    protein: {
      name: "Chaîne bêta de l'hémoglobine",
      uniprot: "P68871",
      length: 147,
      aliases: ["bêta-globine", "beta-globine", "hémoglobine bêta", "Hb bêta"],
      function: "Sous-unité bêta de l'hémoglobine A adulte (HbA, α2β2) : fixation et transport de l'oxygène dans les érythrocytes."
    },
    expression: [
      { cellType: "Précurseurs érythroïdes (érythroblastes)", tissue: "Moelle osseuse", level: "Élevée", score: 97 },
      { cellType: "Érythrocytes matures", tissue: "Sang périphérique", level: "Élevée", score: 96 },
      { cellType: "Hépatocytes fœtaux", tissue: "Foie fœtal", level: "Élevée", score: 82 },
      { cellType: "Neurones", tissue: "Cerveau", level: "Faible", score: 8 }
    ],
    diseases: [
      {
        id: "drepanocytose",
        name: "Drépanocytose (anémie falciforme)",
        omim: "603903",
        inheritance: "Autosomique récessive",
        description: "Hémoglobinopathie la plus répandue dans le monde : polymérisation de l'HbS déformant les érythrocytes en faucille, responsable d'une anémie hémolytique chronique et de crises vaso-occlusives douloureuses touchant os, rate, poumons et cerveau. La mutation Glu6Val (HbS) est la plus fréquente.",
        mechanism: "Substitution p.Glu6Val dans la chaîne bêta : polymérisation de l'hémoglobine S en désoxyhémoglobine, falciformation des hématies."
      },
      {
        id: "thalassemie-beta",
        name: "Bêta-thalassémie",
        omim: "613985",
        inheritance: "Autosomique récessive",
        description: "Défaut de synthèse des chaînes bêta de l'hémoglobine : anémie hypochrome microcytaire, de formes mineure (asymptomatique), intermédiaire ou majeure (dépendance transfusionnelle, hépatosplénomégalie, surcharge en fer).",
        mechanism: "Mutations du promoteur ou des régions codantes de HBB réduisant ou abolissant la production de chaîne bêta."
      }
    ]
  },
  {
    symbol: "DMD",
    name: "Dystrophin",
    locus: "Xp21.1",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["BMD", "CMD3B", "DXS164", "MRX85"],
    protein: {
      name: "Dystrophine",
      uniprot: "P11532",
      length: 3685,
      aliases: ["dystrophine"],
      function: "Protéine sous-membranaire géante reliant le cytosquelette d'actine des myocytes à la matrice extracellulaire via le complexe glycoprotéique associé à la dystrophine (DAGC) : elle stabilise la membrane musculaire lors des contractions."
    },
    expression: [
      { cellType: "Cellules musculaires squelettiques (fibres musculaires)", tissue: "Muscle squelettique", level: "Élevée", score: 94 },
      { cellType: "Cardiomyocytes", tissue: "Cœur", level: "Élevée", score: 80 },
      { cellType: "Neurones corticaux", tissue: "Cerveau (cortex)", level: "Moyenne", score: 55 },
      { cellType: "Cellules de Purkinje", tissue: "Cervelet", level: "Moyenne", score: 45 },
      { cellType: "Astrocytes", tissue: "Cerveau", level: "Faible", score: 20 }
    ],
    diseases: [
      {
        id: "myopathie-de-duchenne",
        name: "Myopathie de Duchenne",
        omim: "310200",
        inheritance: "Récessive liée à l'X",
        description: "Dystrophie musculaire la plus fréquente chez l'enfant : faiblesse musculaire proximale progressive dès 3-5 ans, signe de Gowers, perte de la marche vers 10-12 ans, puis atteinte cardiaque et respiratoire. Atteint presque exclusivement les garçons.",
        mechanism: "Mutations (délétions, duplications, non-sens) abolissant la dystrophine : rupture de la membrane des fibres musculaires, nécrose et remplacement fibreux."
      },
      {
        id: "myopathie-de-becker",
        name: "Myopathie de Becker",
        omim: "300376",
        inheritance: "Récessive liée à l'X",
        description: "Forme plus bénigne et plus tardive de dystrophinopathie liée à l'X : atteinte musculaire proximale progressive avec cardiomyopathie, préservant souvent la marche au-delà de 16 ans.",
        mechanism: "Mutations conservant partiellement le cadre de lecture : dystrophine tronquée mais partiellement fonctionnelle."
      }
    ]
  },
  {
    symbol: "F9",
    name: "Coagulation factor IX",
    locus: "Xq27.1",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["FIX", "HEMB"],
    protein: {
      name: "Facteur IX de la coagulation",
      uniprot: "P00742",
      length: 461,
      aliases: ["facteur IX", "facteur Christmas", "FIX"],
      function: "Zymogène de la voie intrinsèque de la coagulation, synthétisé par le foie et dépendant de la vitamine K : activé en facteur IXa, il clive le facteur X en présence du facteur VIIIa."
    },
    expression: [
      { cellType: "Hépatocytes", tissue: "Foie", level: "Élevée", score: 93 },
      { cellType: "Cellules endothéliales hépatiques", tissue: "Foie", level: "Moyenne", score: 50 },
      { cellType: "Chondrocytes", tissue: "Cartilage", level: "Faible", score: 15 }
    ],
    diseases: [
      {
        id: "hemophilie-b",
        name: "Hémophilie B (maladie de Christmas)",
        omim: "306900",
        inheritance: "Récessive liée à l'X",
        description: "Déficit congénital en facteur IX : hémorragies spontanées ou post-traumatiques des articulations (hémarthroses) et des tissus profonds, d'autant plus sévères que l'activité résiduelle du facteur IX est faible (< 1 % : forme sévère).",
        mechanism: "Mutations de F9 réduisant la synthèse ou l'activité du facteur IX : déficit de la voie intrinsèque de la coagulation."
      }
    ]
  },
  {
    symbol: "NF1",
    name: "Neurofibromin 1",
    locus: "17q11.2",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["NFN", "VRNF", "WSS"],
    protein: {
      name: "Neurofibromine 1",
      uniprot: "Q01344",
      length: 2839,
      aliases: ["neurofibromine", "neurofibromine 1"],
      function: "Régulateur négatif de la protéine RAS (domaine GAP) : il accélère l'hydrolyse du GTP en GDP et freine ainsi les voies de signalisation RAS-MAPK contrôlant la prolifération et la différenciation cellulaire."
    },
    expression: [
      { cellType: "Neurones et cellules de Schwann", tissue: "Système nerveux périphérique", level: "Élevée", score: 90 },
      { cellType: "Oligodendrocytes", tissue: "Système nerveux central", level: "Moyenne", score: 55 },
      { cellType: "Kératinocytes", tissue: "Peau", level: "Moyenne", score: 52 },
      { cellType: "Cellules de la médullosurrénale", tissue: "Surrénale", level: "Moyenne", score: 47 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Faible", score: 26 }
    ],
    diseases: [
      {
        id: "neurofibromatose-de-type-1",
        name: "Neurofibromatose de type 1 (maladie de von Recklinghausen)",
        omim: "162200",
        inheritance: "Autosomique dominante",
        description: "Phacomatose fréquente (1/3 000) : taches café-au-lait, neurofibromes cutanés et plexiformes, nodules de Lisch de l'iris, gliomes des voies optiques, scoliose et risque de tumeurs malignes des gaines nerveuses périphériques (MPNST).",
        mechanism: "Mutation germinale perte de fonction de NF1 : levée de l'inhibition de RAS, hyperactivation des voies MAPK et PI3K dans les cellules de Schwann et les mélanocytes."
      }
    ]
  },
  {
    symbol: "PTEN",
    name: "Phosphatase and tensin homolog",
    locus: "10q23.31",
    strand: "-",
    geneType: "Gène suppresseur de tumeur",
    aliases: ["MMAC1", "CWS1", "DEC"],
    protein: {
      name: "Phosphatase PTEN",
      uniprot: "P60484",
      length: 403,
      aliases: ["PTEN", "phosphatase and tensin homolog"],
      function: "Phosphatase lipidique antagoniste de la voie PI3K/AKT : elle déphosphoryle le PIP3 en PIP2, freinant la croissance, la survie et la prolifération cellulaire."
    },
    expression: [
      { cellType: "Cellules épithéliales mammaires", tissue: "Sein", level: "Élevée", score: 84 },
      { cellType: "Cellules épithéliales thyroïdiennes", tissue: "Thyroïde", level: "Élevée", score: 81 },
      { cellType: "Neurones", tissue: "Cerveau", level: "Moyenne", score: 56 },
      { cellType: "Cellules épithéliales intestinales", tissue: "Côlon", level: "Moyenne", score: 54 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Moyenne", score: 48 }
    ],
    diseases: [
      {
        id: "syndrome-de-cowden",
        name: "Syndrome de Cowden",
        omim: "158350",
        inheritance: "Autosomique dominante",
        description: "Syndrome d'hamartomes multiples (PTEN hamartoma tumor syndrome) : trichilemmomes faciaux, lésions muqueuses, macrocéphalie, et prédisposition aux cancers du sein, de la thyroïde (folliculaire) et de l'endomètre.",
        mechanism: "Mutation germinale de PTEN : perte de frein de la voie PI3K/AKT, prolifération cellulaire incontrôlée et hamartomes."
      }
    ]
  },
  {
    symbol: "APC",
    name: "APC regulator of WNT signaling pathway",
    locus: "5q22.2",
    strand: "-",
    geneType: "Gène suppresseur de tumeur",
    aliases: ["DP2", "PPP1R46"],
    protein: {
      name: "Protéine APC",
      uniprot: "P25054",
      length: 2843,
      aliases: ["APC", "adenomatous polyposis coli"],
      function: "Protéine d'échafaudage du complexe de destruction de la bêta-caténine : elle dirige la bêta-caténine vers la dégradation protéasomale et régule ainsi la voie WNT, la polarité cellulaire et le fuseau mitotique."
    },
    expression: [
      { cellType: "Cellules épithéliales coliques", tissue: "Côlon", level: "Élevée", score: 91 },
      { cellType: "Entérocytes", tissue: "Intestin grêle", level: "Élevée", score: 86 },
      { cellType: "Neurones", tissue: "Cerveau", level: "Moyenne", score: 58 },
      { cellType: "Cellules musculaires squelettiques", tissue: "Muscle squelettique", level: "Moyenne", score: 44 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Faible", score: 24 }
    ],
    diseases: [
      {
        id: "polypose-adenomateuse-familiale",
        name: "Polypose adénomateuse familiale (FAP)",
        omim: "175100",
        inheritance: "Autosomique dominante",
        description: "Prédisposition au cancer colorectal : développement de centaines à milliers de polypes adénomateux du côlon et du rectum dès l'adolescence, évoluant quasi inévitablement vers un cancer colorectal avant 40 ans en l'absence de colectomie prophylactique. Formes atténuées (AFAP) et manifestations extra-coliques (tumeurs desmoïdes, adénomes duodénaux, hypertrophie congénitale de l'épithélium pigmentaire de la rétine).",
        mechanism: "Mutation germinale d'APC : accumulation de bêta-caténine et activation constitutive de la voie WNT dans l'épithélium colique."
      }
    ]
  },
  {
    symbol: "MLH1",
    name: "MutL homolog 1",
    locus: "3p22.2",
    strand: "+",
    geneType: "Gène de réparation de l'ADN (mismatch repair)",
    aliases: ["COCA2", "HNPCC2"],
    protein: {
      name: "Protéine MLH1",
      uniprot: "P40692",
      length: 756,
      aliases: ["MLH1", "mutL homolog 1"],
      function: "Partenaire du complexe de réparation des mésappariements de l'ADN (MMR) avec PMS2 : il reconnaît les mésappariements et coordonne l'excision et la resynthèse du brin néoformé."
    },
    expression: [
      { cellType: "Cellules épithéliales coliques", tissue: "Côlon", level: "Élevée", score: 89 },
      { cellType: "Cellules épithéliales endométriales", tissue: "Utérus", level: "Élevée", score: 78 },
      { cellType: "Cellules épithéliales gastriques", tissue: "Estomac", level: "Moyenne", score: 60 },
      { cellType: "Lymphocytes", tissue: "Sang périphérique", level: "Moyenne", score: 52 },
      { cellType: "Neurones", tissue: "Cerveau", level: "Faible", score: 21 }
    ],
    diseases: [
      {
        id: "syndrome-de-lynch",
        name: "Syndrome de Lynch (HNPCC)",
        omim: "609309",
        inheritance: "Autosomique dominante",
        description: "Prédisposition héréditaire la plus fréquente au cancer colorectal : cancer colorectal précoce (âge moyen ~ 44 ans, souvent au côlon droit) et cancers de l'endomètre, de l'ovaire, de l'estomac, des voies biliaires, de l'intestin grêle et des voies urinaires. Tumeurs caractérisées par une instabilité des microsatellites (MSI).",
        mechanism: "Mutation germinale d'un gène MMR (MLH1, MSH2, MSH6, PMS2) + inactivation somatique de l'autre allèle : accumulation de mutations dans les microsatellites."
      }
    ]
  }
];
