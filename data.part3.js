const GENES_PART3 = [
  {
    symbol: "MSH2",
    name: "MutS homolog 2",
    locus: "2p21",
    strand: "+",
    geneType: "Gène de réparation de l'ADN (mismatch repair)",
    aliases: ["HNPCC1", "COCA1", "FCC1"],
    protein: {
      name: "Protéine MSH2",
      uniprot: "P43246",
      length: 934,
      aliases: ["MSH2", "mutS homolog 2"],
      function: "Partenaire du complexe MMR reconnaissant les mésappariements et les petites boucles d'insertion-délétion de l'ADN, en partenariat avec MSH6 (MutSα) ou MSH3 (MutSβ)."
    },
    expression: [
      { cellType: "Cellules épithéliales coliques", tissue: "Côlon", level: "Élevée", score: 88 },
      { cellType: "Cellules épithéliales endométriales", tissue: "Utérus", level: "Élevée", score: 76 },
      { cellType: "Cellules épithéliales gastriques", tissue: "Estomac", level: "Moyenne", score: 59 },
      { cellType: "Lymphocytes", tissue: "Sang périphérique", level: "Moyenne", score: 51 }
    ],
    diseases: [
      {
        id: "syndrome-de-lynch",
        name: "Syndrome de Lynch (HNPCC)",
        omim: "120435",
        inheritance: "Autosomique dominante",
        description: "Forme liée à MSH2 du syndrome de Lynch : cancers colorectaux précoces et extracoliques (endomètre, ovaire, estomac, voies urinaires), avec instabilité des microsatellites et perte d'expression de MSH2 en immunohistochimie.",
        mechanism: "Mutation germinale de MSH2 : défaut du système de réparation des mésappariements, instabilité des microsatellites."
      }
    ]
  },
  {
    symbol: "VHL",
    name: "Von Hippel-Lindau tumor suppressor",
    locus: "3p25.3",
    strand: "-",
    geneType: "Gène suppresseur de tumeur",
    aliases: ["HRCA1", "RCA1", "VHL1"],
    protein: {
      name: "Protéine pVHL",
      uniprot: "P40337",
      length: 213,
      aliases: ["pVHL", "VHL", "protéine de von Hippel-Lindau"],
      function: "Sous-unité de reconnaissance du complexe E3 ubiquitine-ligase ciblant le facteur HIFα pour sa dégradation en normoxie : elle contrôle ainsi la réponse cellulaire à l'hypoxie."
    },
    expression: [
      { cellType: "Cellules rénales tubulaires proximales", tissue: "Rein", level: "Élevée", score: 90 },
      { cellType: "Cellules de la corticosurrénale", tissue: "Surrénale", level: "Élevée", score: 82 },
      { cellType: "Cellules du système nerveux central (cervelet, rétine)", tissue: "SNC", level: "Moyenne", score: 55 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Moyenne", score: 50 },
      { cellType: "Cellules épithéliales mammaires", tissue: "Sein", level: "Faible", score: 27 }
    ],
    diseases: [
      {
        id: "maladie-de-von-hippel-lindau",
        name: "Maladie de von Hippel-Lindau",
        omim: "193300",
        inheritance: "Autosomique dominante",
        description: "Phacomatose systémique : hémangioblastomes du système nerveux central (cervelet, moelle, rétine), carcinomes rénaux à cellules claires souvent bilatéraux et multiples, phéochromocytomes, kystes et tumeurs neuroendocrines du pancréas et de l'épididyme.",
        mechanism: "Mutation germinale de VHL : accumulation de HIFα en normoxie, activation constitutive des gènes de l'hypoxie (VEGF, PDGF, érythropoïétine)."
      }
    ]
  },
  {
    symbol: "RET",
    name: "Ret proto-oncogene",
    locus: "10q11.21",
    strand: "-",
    geneType: "Proto-oncogène",
    aliases: ["PTC5", "RET-ELE1", "MEN2A", "MEN2B", "CDHR16"],
    protein: {
      name: "Récepteur tyrosine kinase RET",
      uniprot: "P07949",
      length: 1114,
      aliases: ["RET", "proto-oncogène RET", "récepteur RET"],
      function: "Récepteur à activité tyrosine kinase activé par les ligands de la famille GDNF : il régule le développement du système nerveux entérique, des reins et de la thyroïde (voies de signalisation MAPK, PI3K/AKT)."
    },
    expression: [
      { cellType: "Cellules C parafolliculaires de la thyroïde", tissue: "Thyroïde", level: "Élevée", score: 92 },
      { cellType: "Neurones des ganglions entériques", tissue: "Système nerveux entérique", level: "Élevée", score: 86 },
      { cellType: "Cellules de la médullosurrénale", tissue: "Surrénale", level: "Moyenne", score: 60 },
      { cellType: "Neurones dopaminergiques", tissue: "Cerveau (mésencéphale)", level: "Moyenne", score: 47 }
    ],
    diseases: [
      {
        id: "neoplasie-endocrinienne-multiple-de-type-2",
        name: "Néoplasie endocrinienne multiple de type 2 (NEM2)",
        omim: "171400",
        inheritance: "Autosomique dominante",
        description: "NEM2A : carcinome médullaire de la thyroïde (souvent le premier signe), phéochromocytome et hyperparathyroïdie. NEM2B (OMIM 162300) : forme plus précoce et agressive associée à un habitus marfanoïde et des névromes muqueux, sans hyperparathyroïdie. Thyroïdectomie prophylactique recommandée selon le codon muté.",
        mechanism: "Mutations germinales activatrices (gain de fonction) de RET, le plus souvent dans les cystéines du domaine extracellulaire (codons 609, 618, 620) ou la boucle tyrosine kinase (codon 918 pour NEM2B)."
      }
    ]
  },
  {
    symbol: "EGFR",
    name: "Epidermal growth factor receptor",
    locus: "7p11.2",
    strand: "+",
    geneType: "Proto-oncogène",
    aliases: ["ERBB", "HER1", "mENA", "ERBB1"],
    protein: {
      name: "Récepteur du facteur de croissance épidermique (EGFR)",
      uniprot: "P00533",
      length: 1210,
      aliases: ["EGFR", "HER1", "récepteur EGF", "ErbB1"],
      function: "Récepteur transmembranaire à tyrosine kinase liant l'EGF et d'autres ligands de la famille ErbB : il active les voies RAS-MAPK, PI3K/AKT et STAT, contrôlant prolifération, survie et migration cellulaires."
    },
    expression: [
      { cellType: "Kératinocytes", tissue: "Peau (épiderme)", level: "Élevée", score: 93 },
      { cellType: "Cellules épithéliales bronchiques", tissue: "Poumon", level: "Élevée", score: 85 },
      { cellType: "Cellules épithéliales coliques", tissue: "Côlon", level: "Moyenne", score: 58 },
      { cellType: "Cellules gliales", tissue: "Cerveau", level: "Moyenne", score: 50 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Moyenne", score: 46 }
    ],
    diseases: [
      {
        id: "cancer-bronchique-non-a-petites-cellules",
        name: "Cancer bronchique non à petites cellules (mutations somatiques d'EGFR)",
        omim: "211980",
        inheritance: "Somatique",
        description: "Mutations activatrices somatiques d'EGFR (délétions de l'exon 19, substitution L858R de l'exon 21) présentes dans 10-15 % des adénocarcinomes pulmonaires occidentaux (plus fréquentes chez les non-fumeurs, les femmes et les personnes d'origine asiatique) : elles prédisent la sensibilité aux inhibiteurs de tyrosine kinase (osimertinib, erlotinib, géfitinib).",
        mechanism: "Mutations somatiques du domaine kinase d'EGFR : activation constitutive indépendante du ligand, survie et prolifération tumorale."
      },
      {
        id: "glioblastome",
        name: "Glioblastome (amplification d'EGFR)",
        omim: "137800",
        inheritance: "Somatique",
        description: "L'amplification d'EGFR et la variante EGFRvIII (délétion des exons 2-7) sont fréquentes dans le glioblastome et associées à un pronostic défavorable ; cibles thérapeutiques en développement.",
        mechanism: "Amplification génique et mutation EGFRvIII : signalisation EGFR constitutive dans les cellules tumorales gliales."
      }
    ]
  },
  {
    symbol: "KRAS",
    name: "KRAS proto-oncogene, GTPase",
    locus: "12p12.1",
    strand: "+",
    geneType: "Proto-oncogène",
    aliases: ["C-K-RAS", "KRAS1", "KRAS2A", "NS3", "CFC2"],
    protein: {
      name: "Protéine KRAS",
      uniprot: "P01116",
      length: 189,
      aliases: ["KRAS", "GTPase KRAS", "c-Ki-ras", "K-Ras"],
      function: "Petite GTPase de la famille RAS agissant comme interrupteur moléculaire : active sous forme liée au GTP, elle transmet les signaux des récepteurs de facteurs de croissance (EGFR, etc.) aux voies MAPK et PI3K."
    },
    expression: [
      { cellType: "Cellules épithéliales coliques", tissue: "Côlon", level: "Élevée", score: 87 },
      { cellType: "Cellules épithéliales pancréatiques", tissue: "Pancréas", level: "Élevée", score: 84 },
      { cellType: "Cellules épithéliales bronchiques", tissue: "Poumon", level: "Élevée", score: 80 },
      { cellType: "Fibroblastes", tissue: "Peau", level: "Moyenne", score: 62 },
      { cellType: "Lymphocytes", tissue: "Sang périphérique", level: "Moyenne", score: 53 }
    ],
    diseases: [
      {
        id: "syndrome-de-noonan-lie-a-kras",
        name: "Syndrome de Noonan lié à KRAS",
        omim: "609942",
        inheritance: "Autosomique dominante",
        description: "Forme de syndrome de Noonan (dysmorphie faciale caractéristique, cardiopathie congénitale souvent sténose pulmonaire, retard de croissance, diathèse hémorragique, parfois déficience intellectuelle légère) due à des mutations germinales de KRAS ; un sous-groupe présente un syndrome cardio-facio-cutané.",
        mechanism: "Mutations germinales de KRAS augmentant l'activité de la voie RAS-MAPK pendant le développement embryonnaire."
      },
      {
        id: "cancers-somatiques-kras",
        name: "Cancers à mutations somatiques de KRAS",
        omim: "190070",
        inheritance: "Somatique",
        description: "Mutations activatrices des codons 12, 13 et 61 de KRAS présentes dans environ 25 % des adénocarcinomes pancréatiques, 30-40 % des cancers colorectaux et 15-25 % des adénocarcinomes pulmonaires : elles confèrent une résistance primaire aux anti-EGFR et un pronostic défavorable.",
        mechanism: "Mutations bloquant l'hydrolyse du GTP : KRAS constitutivement actif, signalisation permanente des voies MAPK et PI3K."
      }
    ]
  },
  {
    symbol: "APOE",
    name: "Apolipoprotein E",
    locus: "19q13.32",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["AD2", "APO-E", "LDLCQ5"],
    protein: {
      name: "Apolipoprotéine E",
      uniprot: "P02649",
      length: 317,
      aliases: ["ApoE", "apolipoprotéine E", "Apo-E"],
      function: "Apolipoprotéine sécrétée principalement par le foie et les astrocytes, composant des lipoprotéines VLDL et HDL : elle médie la clairance hépatique des remnants lipoprotéiques via les récepteurs LDLR et LRP et participe au métabolisme cérébral des lipides."
    },
    expression: [
      { cellType: "Hépatocytes", tissue: "Foie", level: "Élevée", score: 95 },
      { cellType: "Astrocytes", tissue: "Cerveau", level: "Élevée", score: 89 },
      { cellType: "Macrophages / microglie", tissue: "Système nerveux central", level: "Moyenne", score: 61 },
      { cellType: "Adipocytes", tissue: "Tissu adipeux", level: "Moyenne", score: 50 },
      { cellType: "Cellules alvéolaires de type II", tissue: "Poumon", level: "Faible", score: 29 }
    ],
    diseases: [
      {
        id: "maladie-d-alzheimer-susceptibilite-apoe",
        name: "Maladie d'Alzheimer (susceptibilité liée à APOE)",
        omim: "104310",
        inheritance: "Multifactorielle",
        description: "L'allèle ε4 (APOE-ε4) est le principal facteur de risque génétique de la maladie d'Alzheimer à début tardif : chaque copie multiplie le risque par environ 3 et avance l'âge de début ; l'allèle ε2 est protecteur. APOE participe au métabolisme et au transport du cholestérol cérébral et à la clairance du peptide bêta-amyloïde.",
        mechanism: "Polymorphismes d'APOE (ε2/ε3/ε4) modulant l'agrégation et la clairance du peptide Aβ et le métabolisme lipidique cérébral."
      },
      {
        id: "hyperlipoproteinemie-familiale-type-3",
        name: "Hyperlipoprotéinémie familiale de type III (dysbêtalipoprotéinémie)",
        omim: "107741",
        inheritance: "Autosomique récessive",
        description: "Hypercholestérolémie et hypertriglycéridémie associées à l'accumulation de remnants de lipoprotéines (β-VLDL), xanthomes palmés et risque cardiovasculaire précoce élevé.",
        mechanism: "Homozygotie APOE2/2 (forme E2 à liaison défectueuse aux récepteurs) : défaut de clairance des remnants lipoprotéiques."
      }
    ]
  },
  {
    symbol: "INS",
    name: "Insulin",
    locus: "11p15.5",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["IDDM2", "ILPR", "IRDN", "MODY10"],
    protein: {
      name: "Insuline",
      uniprot: "P01308",
      length: 110,
      aliases: ["insuline", "proinsuline"],
      function: "Hormone peptidique sécrétée par les cellules bêta des îlots de Langerhans du pancréas : elle stimule l'entrée du glucose dans les cellules musculaires et adipeuses et inhibe la production hépatique de glucose."
    },
    expression: [
      { cellType: "Cellules bêta pancréatiques (îlots de Langerhans)", tissue: "Pancréas endocrine", level: "Élevée", score: 98 },
      { cellType: "Neurones hypothalamiques", tissue: "Cerveau (hypothalamus)", level: "Faible", score: 12 },
      { cellType: "Cellules thymiques", tissue: "Thymus", level: "Faible", score: 9 }
    ],
    diseases: [
      {
        id: "diabete-de-type-1",
        name: "Diabète de type 1 (prédisposition, locus IDDM2)",
        omim: "222100",
        inheritance: "Multifactorielle",
        description: "Le locus INS (région VNTR en amont du gène) est le deuxième locus de susceptibilité au diabète de type 1 après HLA : il module l'expression thymique de l'insuline et la tolérance immunitaire aux cellules bêta.",
        mechanism: "Variation du nombre de répétitions du VNTR influençant la présentation de l'insuline au thymus et la délétion clonale des lymphocytes T auto-réactifs."
      },
      {
        id: "diabete-neonatal-permanent",
        name: "Diabète néonatal permanent lié à INS",
        omim: "618858",
        inheritance: "Autosomique dominante",
        description: "Diabète sucré diagnostiqué dans les 6 premiers mois de vie, associé à un retard de croissance intra-utérin, nécessitant un traitement par insuline ; dû à des mutations hétérozygotes d'INS entraînant un stress du réticulum endoplasmique des cellules bêta.",
        mechanism: "Mutations faux-sens de la proinsuline : mauvais repliement, stress du réticulum endoplasmique et apoptose des cellules bêta."
      }
    ]
  },
  {
    symbol: "SOD1",
    name: "Superoxide dismutase 1",
    locus: "21q22.11",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["ALS", "ALS1", "SOD"],
    protein: {
      name: "Superoxyde dismutase 1 (Cu/Zn)",
      uniprot: "P00441",
      length: 153,
      aliases: ["SOD1", "SOD cytosolique", "Cu/Zn superoxyde dismutase"],
      function: "Enzyme antioxydante cytosolique à cuivre et zinc : elle dismute l'anion superoxyde (O2−) en peroxyde d'hydrogène et oxygène, protégeant la cellule du stress oxydatif."
    },
    expression: [
      { cellType: "Motoneurones spinaux", tissue: "Moelle épinière", level: "Élevée", score: 91 },
      { cellType: "Neurones corticaux", tissue: "Cerveau (cortex moteur)", level: "Élevée", score: 86 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Élevée", score: 78 },
      { cellType: "Érythrocytes", tissue: "Sang périphérique", level: "Élevée", score: 74 },
      { cellType: "Cardiomyocytes", tissue: "Cœur", level: "Moyenne", score: 55 }
    ],
    diseases: [
      {
        id: "sclerose-laterale-amyotrophique-1",
        name: "Sclérose latérale amyotrophique de type 1 (SLA1)",
        omim: "105400",
        inheritance: "Autosomique dominante",
        description: "Forme familiale de SLA (environ 10 % des SLA, dont environ 20 % liées à SOD1) : dégénérescence progressive des motoneurones moteurs cérébraux et spinaux, responsable d'une paralysie progressive des membres, de la déglutition et de la respiration.",
        mechanism: "Mutations faux-sens de SOD1 (plus de 150 décrites) : gain de fonction toxique (agrégats protéiques, stress oxydatif, excitotoxicité) plutôt que perte de l'activité dismutase."
      }
    ]
  }
];
