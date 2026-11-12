const GENES_PART4 = [
  {
    symbol: "FMR1",
    name: "Fragile X messenger ribonucleoprotein 1",
    locus: "Xq27.3",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["FMRP", "FRAXA", "POF", "POF1"],
    protein: {
      name: "Protéine FMRP",
      uniprot: "Q06787",
      length: 632,
      aliases: ["FMRP", "fragile X mental retardation protein"],
      function: "Protéine de liaison à l'ARN régulant la traduction des ARNm synaptiques : elle freine la synthèse protéique dendritique en réponse à l'activation des récepteurs du glutamate, essentielle à la plasticité synaptique."
    },
    expression: [
      { cellType: "Neurones corticaux et hippocampiques", tissue: "Cerveau", level: "Élevée", score: 93 },
      { cellType: "Cellules de Purkinje", tissue: "Cervelet", level: "Élevée", score: 85 },
      { cellType: "Spermatogonies", tissue: "Testicule", level: "Élevée", score: 80 },
      { cellType: "Ovocytes", tissue: "Ovaire", level: "Moyenne", score: 55 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Faible", score: 23 }
    ],
    diseases: [
      {
        id: "syndrome-de-l-x-fragile",
        name: "Syndrome de l'X fragile",
        omim: "300624",
        inheritance: "Dominante liée à l'X",
        description: "Cause génétique la plus fréquente de déficience intellectuelle héréditaire et de troubles du spectre autistique : déficience intellectuelle, traits dysmorphiques (visage allongé, grandes oreilles, macro-orchidie post-pubertaire) et troubles du comportement. Le site fragile FRAXA sur le chromosome X est visible en cytogénétique.",
        mechanism: "Expansion d'un triplet CGG dans la région 5' non traduite de FMR1 (> 200 répétitions = mutation complète) : méthylation du promoteur, absence de FMRP et dérégulation de la traduction synaptique."
      },
      {
        id: "syndrome-tremblement-ataxie-x-fragile",
        name: "Syndrome tremblement/ataxie lié à l'X fragile (FXTAS)",
        omim: "300623",
        inheritance: "Liée à l'X",
        description: "Affection neurodégénérative du sujet âgé porteur d'une prémutation (55-200 répétitions CGG) : tremblement d'intention, ataxie cérébelleuse, parkinsonisme, déclin cognitif et inclusions intranucléaires dans les neurones et astrocytes.",
        mechanism: "Prémutation FMR1 : taux élevé d'ARNm FMR1 toxique, agrégation des protéines et dysfonction mitochondriale."
      },
      {
        id: "insuffisance-ovarienne-prematuree-1",
        name: "Insuffisance ovarienne prématurée liée à FMR1 (POI1)",
        omim: "311360",
        inheritance: "Liée à l'X",
        description: "Ménopause avant 40 ans chez les porteuses d'une prémutation de FMR1 (risque environ 20 %), avec élévation de la FSH.",
        mechanism: "Prémutation FMR1 : toxicité de l'ARNm sur la fonction ovarienne."
      }
    ]
  },
  {
    symbol: "MECP2",
    name: "Methyl-CpG binding protein 2",
    locus: "Xq28",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["RTT", "RS", "RTS", "PPMX", "MRX16"],
    protein: {
      name: "Protéine MeCP2",
      uniprot: "P51608",
      length: 486,
      aliases: ["MeCP2", "methyl-CpG-binding protein 2"],
      function: "Protéine de liaison aux dinucléotides méthylés CpG : elle recrute des corépresseurs (complexe NCoR/SMRT) pour réprimer la transcription et joue un rôle clé dans la maturation neuronale et la plasticité synaptique."
    },
    expression: [
      { cellType: "Neurones corticaux", tissue: "Cerveau (cortex)", level: "Élevée", score: 94 },
      { cellType: "Neurones hippocampiques", tissue: "Cerveau (hippocampe)", level: "Élevée", score: 90 },
      { cellType: "Neurones du tronc cérébral", tissue: "Tronc cérébral", level: "Élevée", score: 84 },
      { cellType: "Astrocytes", tissue: "Cerveau", level: "Moyenne", score: 57 },
      { cellType: "Cellules pulmonaires", tissue: "Poumon", level: "Moyenne", score: 48 }
    ],
    diseases: [
      {
        id: "syndrome-de-rett",
        name: "Syndrome de Rett",
        omim: "312750",
        inheritance: "Dominante liée à l'X",
        description: "Trouble neurodéveloppemental touchant presque exclusivement les filles : développement normal les 6-18 premiers mois, puis régression (perte du langage et de l'usage des mains), stéréotypies manuelles caractéristiques (lavage des mains), microcéphalie acquise, crises d'épilepsie et scoliose. Formes atypiques plus bénignes décrites.",
        mechanism: "Mutations perte de fonction de MECP2 (principalement de novo) : dérégulation de l'expression génique dans les neurones matures, défaut de maturation synaptique."
      }
    ]
  },
  {
    symbol: "LMNA",
    name: "Lamin A/C",
    locus: "1q22",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["LMN1", "CMD1A", "EMD2", "FPLD", "LMNC", "LDP1", "HGPS"],
    protein: {
      name: "Lamines A/C",
      uniprot: "P02545",
      length: 664,
      aliases: ["lamine A", "lamine C", "lamin A/C", "LMNA"],
      function: "Filaments intermédiaires de la lamina nucléaire : les lamines A et C (épissages alternatifs du même gène) forment un réseau sous l'enveloppe nucléaire assurant la structure du noyau, l'ancrage de la chromatine et la transmission des signaux mécaniques."
    },
    expression: [
      { cellType: "Cardiomyocytes", tissue: "Cœur", level: "Élevée", score: 90 },
      { cellType: "Cellules musculaires squelettiques", tissue: "Muscle squelettique", level: "Élevée", score: 88 },
      { cellType: "Fibroblastes", tissue: "Peau", level: "Élevée", score: 85 },
      { cellType: "Adipocytes", tissue: "Tissu adipeux", level: "Moyenne", score: 62 },
      { cellType: "Neurones", tissue: "Cerveau", level: "Moyenne", score: 55 }
    ],
    diseases: [
      {
        id: "dystrophie-musculaire-d-emery-dreifuss",
        name: "Dystrophie musculaire d'Emery-Dreifuss",
        omim: "181350",
        inheritance: "Autosomique dominante",
        description: "Triade caractéristique : rétractions précoces des coudes, de la nuque et des tendons d'Achille, faiblesse musculaire huméro-péronière, et cardiomyopathie de conduction (bloc auriculo-ventriculaire, troubles du rythme) pouvant nécessiter un pacemaker.",
        mechanism: "Mutations de LMNA : fragilité de l'enveloppe nucléaire des cardiomyocytes et des cellules musculaires squelettiques."
      },
      {
        id: "cardiomyopathie-dilatee-1a",
        name: "Cardiomyopathie dilatée 1A avec troubles de conduction",
        omim: "115200",
        inheritance: "Autosomique dominante",
        description: "Dilatation et dysfonction ventriculaire gauche avec troubles de conduction et du rythme sévères, responsables d'insuffisance cardiaque et de mort subite ; parfois associée à une atteinte musculaire squelettique.",
        mechanism: "Mutations de LMNA : atteinte de la lamina nucléaire des cardiomyocytes, altération de la mécanotransduction."
      },
      {
        id: "lipodystrophie-familiale-partielle",
        name: "Lipodystrophie familiale partielle (type Dunnigan)",
        omim: "151660",
        inheritance: "Autosomique dominante",
        description: "Redistribution anormale des graisses à la puberté : perte du tissu adipeux sous-cutané des membres et du tronc avec accumulation cervicale, faciale et viscérale, associée à une insulinorésistance, un diabète et une dyslipidémie.",
        mechanism: "Mutations de LMNA (souvent p.Arg482) : altération de l'interaction lamina-chromatine dans les adipocytes."
      },
      {
        id: "progeria-de-hutchinson-gilford",
        name: "Progéria de Hutchinson-Gilford",
        omim: "176670",
        inheritance: "Autosomique dominante (de novo)",
        description: "Vieillissement prématuré sévère dès la petite enfance : retard de croissance, alopécie, peau atrophique, perte du tissu adipeux, arthroses et athérosclérose précoce conduisant à un décès par infarctus ou AVC vers 13-15 ans.",
        mechanism: "Mutation de novo c.1824C>T de LMNA activant un site cryptique d'épissage : production de « progérine », lamine A tronquée s'accumulant dans la lamina nucléaire."
      }
    ]
  },
  {
    symbol: "GBA",
    name: "Glucosylceramidase beta",
    locus: "1q22",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["GBA1", "GCB", "GLBA", "ASM", "GCase"],
    protein: {
      name: "Glucocérébrosidase acide (β-glucocérébrosidase)",
      uniprot: "P04062",
      length: 497,
      aliases: ["glucocérébrosidase", "GCase", "β-glucocérébrosidase", "GBA"],
      function: "Enzyme lysosomale hydrolysant le glucocérébroside (glucosylcéramide) en glucose et céramide ; essentielle au recyclage des membranes cellulaires, notamment dans les macrophages."
    },
    expression: [
      { cellType: "Macrophages / microglie", tissue: "Système réticulo-endothélial, cerveau", level: "Élevée", score: 92 },
      { cellType: "Hépatocytes", tissue: "Foie", level: "Élevée", score: 79 },
      { cellType: "Cellules spléniques", tissue: "Rate", level: "Élevée", score: 76 },
      { cellType: "Neurones", tissue: "Cerveau", level: "Moyenne", score: 54 },
      { cellType: "Ostéoclastes", tissue: "Os", level: "Moyenne", score: 48 }
    ],
    diseases: [
      {
        id: "maladie-de-gaucher",
        name: "Maladie de Gaucher",
        omim: "230800",
        inheritance: "Autosomique récessive",
        description: "Maladie de surcharge lysosomale la plus fréquente : accumulation de glucocérébroside dans les macrophages (« cellules de Gaucher ») entraînant hépatosplénomégalie, atteinte osseuse (douleurs, fractures, nécrose de la tête fémorale), cytopénies et, dans les formes neuropathiques aiguës (type 2) ou chroniques (type 3), atteinte neurologique sévère. La mutation p.Asn370Ser (N370S) est la plus fréquente.",
        mechanism: "Mutations bi-alléliques de GBA : déficit enzymatique lysosomal et accumulation de substrat dans les macrophages."
      },
      {
        id: "maladie-de-parkinson-liee-a-gba",
        name: "Maladie de Parkinson associée à GBA",
        omim: "168600",
        inheritance: "Autosomique dominante (susceptibilité)",
        description: "Les mutations hétérozygotes de GBA sont le facteur de risque génétique le plus fréquent de la maladie de Parkinson (5-10 % des patients) : maladie de Parkinson typique, parfois plus précoce et associée à des troubles cognitifs.",
        mechanism: "Mutations hétérozygotes de GBA : dysfonction lysosomale favorisant l'accumulation d'α-synucléine dans les neurones dopaminergiques."
      }
    ]
  }
];
