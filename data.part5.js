const GENES_PART5 = [
  {
    symbol: "LRRK2",
    name: "Leucine rich repeat kinase 2",
    locus: "12q12",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["PARK8", "ROCO2", "dardarin"],
    protein: {
      name: "Leucine-rich repeat kinase 2 (LRRK2)",
      uniprot: "Q5S007",
      length: 2527,
      aliases: ["LRRK2", "dardarine"],
      function: "Grande kinase cytoplasmique à activité GTPase et kinase (domaines ROC-COR et WD40) : elle régule le trafic vésiculaire, la voie autophagie-lysosome et l'inflammation dans les neurones et les cellules immunitaires."
    },
    expression: [
      { cellType: "Neurones dopaminergiques (substance noire)", tissue: "Cerveau (mésencéphale)", level: "Élevée", score: 88 },
      { cellType: "Macrophages et monocytes", tissue: "Sang périphérique", level: "Élevée", score: 84 },
      { cellType: "Neurones corticaux", tissue: "Cerveau (cortex)", level: "Moyenne", score: 60 },
      { cellType: "Cellules rénales tubulaires", tissue: "Rein", level: "Moyenne", score: 52 },
      { cellType: "Lymphocytes T", tissue: "Sang périphérique", level: "Moyenne", score: 45 }
    ],
    diseases: [
      {
        id: "maladie-de-parkinson-8",
        name: "Maladie de Parkinson de type 8 (PARK8)",
        omim: "607060",
        inheritance: "Autosomique dominante",
        description: "Forme familiale de maladie de Parkinson liée à LRRK2, la plus fréquente des formes monogéniques dominantes (mutation p.Gly2019Ser fréquente, notamment en Afrique du Nord et chez les Ashkénazes) : tableau clinique proche de la maladie de Parkinson sporadique, début vers 50-60 ans, bonne réponse à la L-dopa.",
        mechanism: "Mutations activatrices de LRRK2 (p.Gly2019Ser augmentant l'activité kinase) : dysfonction du trafic vésiculaire et de l'autophagie dans les neurones dopaminergiques."
      }
    ]
  },
  {
    symbol: "SNCA",
    name: "Synuclein alpha",
    locus: "4q22.1",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["PARK1", "NACP", "SYN"],
    protein: {
      name: "Alpha-synucléine",
      uniprot: "P37840",
      length: 140,
      aliases: ["alpha-synucléine", "α-synucléine", "SNCA"],
      function: "Protéine présynaptique abondante dans les neurones, associée aux vésicules synaptiques : elle régule la libération des neurotransmetteurs et constitue le composant principal des corps de Lewy de la maladie de Parkinson."
    },
    expression: [
      { cellType: "Neurones dopaminergiques (substance noire)", tissue: "Cerveau (mésencéphale)", level: "Élevée", score: 90 },
      { cellType: "Neurones corticaux", tissue: "Cerveau (cortex)", level: "Élevée", score: 85 },
      { cellType: "Neurones du système nerveux autonome", tissue: "SNP", level: "Élevée", score: 78 },
      { cellType: "Érythrocytes", tissue: "Sang périphérique", level: "Moyenne", score: 44 }
    ],
    diseases: [
      {
        id: "maladie-de-parkinson-1",
        name: "Maladie de Parkinson de type 1 (PARK1)",
        omim: "163890",
        inheritance: "Autosomique dominante",
        description: "Première forme monogénique de maladie de Parkinson décrite : début précoce (40-50 ans), évolution parfois rapide, démence fréquente ; due à des mutations faux-sens (p.Ala53Thr) ou à des duplications/triplications du gène SNCA.",
        mechanism: "Mutations ponctuelles ou multiplication du gène SNCA : agrégation toxique d'α-synucléine formant les corps de Lewy, mort des neurones dopaminergiques."
      }
    ]
  },
  {
    symbol: "APP",
    name: "Amyloid beta precursor protein",
    locus: "21q21.3",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["ABPP", "AD1", "APP1", "CVAP", "PN-II"],
    protein: {
      name: "Précurseur de la protéine bêta-amyloïde (APP)",
      uniprot: "P05067",
      length: 770,
      aliases: ["APP", "précurseur amyloïde"],
      function: "Protéine transmembranaire ubiquitaire impliquée dans la synaptogenèse, la plasticité et le métabolisme cellulaire : son clivage par les sécrétases β et γ libère le peptide bêta-amyloïde (Aβ), dont l'agrégation forme les plaques séniles."
    },
    expression: [
      { cellType: "Neurones corticaux et hippocampiques", tissue: "Cerveau", level: "Élevée", score: 92 },
      { cellType: "Neurones du système nerveux entérique", tissue: "Tube digestif", level: "Moyenne", score: 60 },
      { cellType: "Cellules musculaires squelettiques", tissue: "Muscle squelettique", level: "Moyenne", score: 55 },
      { cellType: "Cellules épithéliales rénales", tissue: "Rein", level: "Moyenne", score: 49 },
      { cellType: "Fibroblastes", tissue: "Peau", level: "Faible", score: 30 }
    ],
    diseases: [
      {
        id: "maladie-d-alzheimer-1",
        name: "Maladie d'Alzheimer familiale précoce (AD1)",
        omim: "104300",
        inheritance: "Autosomique dominante",
        description: "Formes familiales précoces (< 65 ans, souvent < 55 ans) de maladie d'Alzheimer, associées à des mutations d'APP proches des sites de clivage des sécrétases : elles modifient le ratio Aβ42/Aβ40 et accélèrent la formation des plaques amyloïdes. Le risque accru de la trisomie 21 s'explique par la triplication du gène APP.",
        mechanism: "Mutations d'APP (ex. « suédoise » KM670/671NL, « londonienne » V717I) : augmentation de la production ou de l'agrégabilité du peptide Aβ42."
      }
    ]
  },
  {
    symbol: "PSEN1",
    name: "Presenilin 1",
    locus: "14q24.2",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["AD3", "FAD", "PS1", "S182"],
    protein: {
      name: "Préséniline 1",
      uniprot: "P49768",
      length: 467,
      aliases: ["PSEN1", "préséniline 1", "PS1"],
      function: "Sous-unité catalytique du complexe γ-sécrétase, protéase intramembranaire clivant notamment l'APP pour libérer le peptide Aβ ; elle joue aussi un rôle dans la voie Notch et le métabolisme calcique."
    },
    expression: [
      { cellType: "Neurones corticaux et hippocampiques", tissue: "Cerveau", level: "Élevée", score: 91 },
      { cellType: "Neurones du cervelet", tissue: "Cervelet", level: "Élevée", score: 83 },
      { cellType: "Cardiomyocytes", tissue: "Cœur", level: "Moyenne", score: 58 },
      { cellType: "Cellules musculaires squelettiques", tissue: "Muscle squelettique", level: "Moyenne", score: 52 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Faible", score: 27 }
    ],
    diseases: [
      {
        id: "maladie-d-alzheimer-3",
        name: "Maladie d'Alzheimer familiale précoce (AD3)",
        omim: "607822",
        inheritance: "Autosomique dominante",
        description: "Forme familiale la plus fréquente et la plus précoce de maladie d'Alzheimer (début souvent entre 30 et 50 ans, parfois avant 30 ans) : plus de 200 mutations de PSEN1 décrites, associées à une augmentation du ratio Aβ42/Aβ40 et à des formes parfois atypiques (troubles du langage, myoclonies, spasticité).",
        mechanism: "Mutations de PSEN1 modifiant l'activité γ-sécrétase : production accrue de peptide Aβ42, plus agrégogène, et dépôt amyloïde précoce."
      }
    ]
  },
  {
    symbol: "PSEN2",
    name: "Presenilin 2",
    locus: "1q42.13",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["AD4", "PS2", "STM2", "E5-1"],
    protein: {
      name: "Préséniline 2",
      uniprot: "P49810",
      length: 448,
      aliases: ["PSEN2", "préséniline 2", "PS2"],
      function: "Homologue de la préséniline 1 et seconde sous-unité catalytique du complexe γ-sécrétase : clivage de l'APP (libération d'Aβ) et de Notch, avec un rôle dans l'homéostasie calcique du réticulum endoplasmique."
    },
    expression: [
      { cellType: "Neurones corticaux et hippocampiques", tissue: "Cerveau", level: "Élevée", score: 89 },
      { cellType: "Cardiomyocytes", tissue: "Cœur", level: "Élevée", score: 76 },
      { cellType: "Cellules musculaires squelettiques", tissue: "Muscle squelettique", level: "Moyenne", score: 54 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Faible", score: 26 }
    ],
    diseases: [
      {
        id: "maladie-d-alzheimer-4",
        name: "Maladie d'Alzheimer familiale (AD4)",
        omim: "606889",
        inheritance: "Autosomique dominante",
        description: "Forme familiale de maladie d'Alzheimer à début variable (30-70 ans), parfois associée à des crises d'épilepsie ou à une forme « à corps de Lewy » ; les mutations de PSEN2 sont plus rares que celles de PSEN1 et de pénétrance parfois incomplète.",
        mechanism: "Mutations de PSEN2 : altération du clivage γ-sécrétase de l'APP, augmentation du ratio Aβ42/Aβ40."
      }
    ]
  },
  {
    symbol: "SMN1",
    name: "Survival motor neuron 1",
    locus: "5q13.2",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["BCD541", "GEMIN1", "SMA", "SMNT"],
    protein: {
      name: "Protéine SMN (survival motor neuron)",
      uniprot: "Q16637",
      length: 294,
      aliases: ["SMN", "protéine SMN"],
      function: "Protéine du complexe SMN essentiel à l'assemblage des snRNP (petites ribonucléoprotéines nucléaires) et à l'épissage des pré-ARNm ; elle est indispensable à la survie des motoneurones alpha."
    },
    expression: [
      { cellType: "Motoneurones alpha de la moelle épinière", tissue: "Moelle épinière", level: "Élevée", score: 93 },
      { cellType: "Neurones corticaux", tissue: "Cerveau", level: "Élevée", score: 82 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Moyenne", score: 60 },
      { cellType: "Cellules rénales", tissue: "Rein", level: "Moyenne", score: 50 },
      { cellType: "Fibroblastes", tissue: "Peau", level: "Moyenne", score: 47 }
    ],
    diseases: [
      {
        id: "amyotrophie-spinale-infantile",
        name: "Amyotrophie spinale infantile (SMA)",
        omim: "253300",
        inheritance: "Autosomique récessive",
        description: "Maladie du motoneurone la plus fréquente : dégénérescence des motoneurones alpha de la corne antérieure de la moelle, responsable d'une paralysie flasque progressive des membres et du tronc. Formes cliniques selon l'âge de début : SMA de type I (Werdnig-Hoffmann, < 6 mois, sévère), type II (6-18 mois), type III (Kugelberg-Welander, > 18 mois) et type IV adulte. La délétion homozygote de l'exon 7 de SMN1 est retrouvée dans environ 95 % des cas ; le nombre de copies de SMN2 module la sévérité. Traitements modificateurs de la maladie disponibles (nusinersen, risdiplam, onasemnogene abeparvovec).",
        mechanism: "Délétion ou mutation homozygote de SMN1 : déficit en protéine SMN, défaut d'assemblage des snRNP et mort sélective des motoneurones."
      }
    ]
  },
  {
    symbol: "RB1",
    name: "RB transcriptional corepressor 1",
    locus: "13q14.2",
    strand: "-",
    geneType: "Gène suppresseur de tumeur",
    aliases: ["RB", "PPP1R130", "OSRC"],
    protein: {
      name: "Protéine du rétinoblastome (pRb)",
      uniprot: "P06400",
      length: 928,
      aliases: ["pRb", "Rb", "protéine du rétinoblastome", "p105-Rb"],
      function: "Régulateur négatif du cycle cellulaire : sous forme hypophosphorylée, pRb séquestre les facteurs E2F et bloque la transition G1/S ; la phosphorylation par les CDK libère E2F et permet la prolifération. Premier gène suppresseur de tumeur identifié (modèle du « two-hit » de Knudson)."
    },
    expression: [
      { cellType: "Cellules de la rétine", tissue: "Œil (rétine)", level: "Élevée", score: 88 },
      { cellType: "Fibroblastes", tissue: "Peau", level: "Élevée", score: 84 },
      { cellType: "Neurones", tissue: "Cerveau", level: "Moyenne", score: 58 },
      { cellType: "Cellules épithéliales bronchiques", tissue: "Poumon", level: "Moyenne", score: 52 },
      { cellType: "Ostéoblastes", tissue: "Os", level: "Moyenne", score: 47 }
    ],
    diseases: [
      {
        id: "retinoblastome",
        name: "Rétinoblastome",
        omim: "180200",
        inheritance: "Autosomique dominante (formes héréditaires)",
        description: "Tumeur maligne primitive de la rétine du jeune enfant (< 5 ans) : leucocorie (reflet blanc pupillaire) ou strabisme. Forme héréditaire (40 %, bilatérale, multifocale, transmission dominante avec pénétrance d'environ 90 %) due à une mutation germinale de RB1 suivie d'une inactivation somatique du second allèle dans la rétine ; formes sporadiques (60 %, unilatérales, par double mutation somatique). Risque secondaire d'ostéosarcomes et de mélanomes. Le rétinoblastome a servi de modèle au concept de gène suppresseur de tumeur « two-hit » de Knudson.",
        mechanism: "Inactivation bi-allélique de RB1 dans les cellules rétiniennes : levée du frein E2F, prolifération incontrôlée."
      }
    ]
  },
  {
    symbol: "MYC",
    name: "MYC proto-oncogene, bHLH transcription factor",
    locus: "8q24.21",
    strand: "-",
    geneType: "Proto-oncogène",
    aliases: ["MRTL", "MYCC", "c-Myc", "BHLHE39"],
    protein: {
      name: "Facteur de transcription c-Myc",
      uniprot: "P01106",
      length: 454,
      aliases: ["c-Myc", "Myc", "facteur de transcription Myc"],
      function: "Facteur de transcription de la famille bHLH-Zip, hétérodimère avec MAX : il active des centaines de gènes impliqués dans la croissance, la prolifération, le métabolisme et la différenciation cellulaires ; l'un des oncogènes les plus fréquemment dérégulés dans les cancers humains."
    },
    expression: [
      { cellType: "Lymphocytes B activés (centroblastes)", tissue: "Ganglions lymphatiques", level: "Élevée", score: 92 },
      { cellType: "Cellules épithéliales intestinales (cryptes)", tissue: "Intestin", level: "Élevée", score: 85 },
      { cellType: "Cellules souches hématopoïétiques", tissue: "Moelle osseuse", level: "Moyenne", score: 63 },
      { cellType: "Kératinocytes de la couche basale", tissue: "Peau", level: "Moyenne", score: 58 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Faible", score: 31 }
    ],
    diseases: [
      {
        id: "lymphome-de-burkitt",
        name: "Lymphome de Burkitt (translocation t(8;14) impliquant MYC)",
        omim: "113970",
        inheritance: "Somatique",
        description: "Lymphome B agressif à croissance très rapide (temps de doublement environ 24-48 h), fréquent chez l'enfant en zone d'endémie palustre (forme endémique, atteinte de la mâchoire) et associé au VIH (forme sporadique). La translocation t(8;14)(q24;q32) place MYC sous le contrôle du locus des chaînes lourdes d'immunoglobulines, entraînant sa surexpression constitutive.",
        mechanism: "Translocation somatique t(8;14) : dérégulation de MYC par l'enhancer des IgH, prolifération lymphocytaire incontrôlée."
      }
    ]
  }
];
