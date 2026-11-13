const GENES_PART6 = [
  {
    symbol: "ATM",
    name: "ATM serine/threonine kinase",
    locus: "11q22.3",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["AT1", "ATA", "ATC", "ATDC"],
    protein: {
      name: "Sérine/thréonine-protéine kinase ATM",
      uniprot: "Q13315",
      length: 3024,
      aliases: ["kinase ATM", "ataxia telangiectasia mutated"],
      function: "Kinase majeure de la réponse aux dommages de l'ADN : elle reconnaît les cassures double-brin, phosphoryle p53, BRCA1, CHEK2 et des centaines de substrats pour orchestrer l'arrêt du cycle, la réparation et l'apoptose."
    },
    expression: [
      { cellType: "Lymphocytes", tissue: "Sang périphérique", level: "Élevée", score: 90 },
      { cellType: "Cellules de Purkinje", tissue: "Cervelet", level: "Élevée", score: 82 },
      { cellType: "Fibroblastes", tissue: "Peau", level: "Moyenne", score: 60 },
      { cellType: "Hepatocytes", tissue: "Foie", level: "Moyenne", score: 55 },
      { cellType: "Cellules épithéliales testiculaires", tissue: "Testicule", level: "Moyenne", score: 52 }
    ],
    diseases: [
      {
        id: "ataxie-telangiectasie",
        name: "Ataxie-télangiectasie",
        omim: "208900",
        inheritance: "Autosomique récessive",
        description: "Maladie neurodégénérative de l'enfance associant ataxie cérébelleuse progressive, télangiectasies oculocutanées, immunodéficience (déficit en IgA/IgG), radiosensibilité extrême et forte prédisposition aux lymphomes et leucémies.",
        mechanism: "Mutations perte de fonction d'ATM : défaut de détection et de signalisation des cassures double-brin de l'ADN, instabilité génomique et accumulation de lésions."
      }
    ]
  },
  {
    symbol: "CHEK2",
    name: "Checkpoint kinase 2",
    locus: "22q12.1",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["CHK2", "CDS1", "LFS2", "RAD53"],
    protein: {
      name: "Checkpoint kinase 2 (Chk2)",
      uniprot: "O96764",
      length: 543,
      aliases: ["Chk2", "hCds1"],
      function: "Kinase effectrice de la voie ATM/ATR : activée par les dommages de l'ADN, elle phosphoryle p53, Cdc25 et BRCA1 pour induire l'arrêt du cycle cellulaire et favoriser la réparation."
    },
    expression: [
      { cellType: "Cellules épithéliales mammaires", tissue: "Sein", level: "Élevée", score: 78 },
      { cellType: "Lymphocytes", tissue: "Sang périphérique", level: "Moyenne", score: 62 },
      { cellType: "Cellules épithéliales coliques", tissue: "Côlon", level: "Moyenne", score: 58 },
      { cellType: "Fibroblastes", tissue: "Peau", level: "Moyenne", score: 55 },
      { cellType: "Hepatocytes", tissue: "Foie", level: "Faible", score: 28 }
    ],
    diseases: [
      {
        id: "cancer-du-sein-hereditaire-chek2",
        name: "Cancer du sein héréditaire lié à CHEK2",
        omim: "604373",
        inheritance: "Autosomique dominante",
        description: "Prédisposition au cancer du sein (souvent bilatéral), parfois associée à des cancers de la prostate, du rein ou de la thyroïde. La mutation fondatrice 1100delC est particulièrement fréquente en Europe du Nord.",
        mechanism: "Mutation tronquante perte de fonction de Chk2 : altération du point de contrôle G2/M, division de cellules endommagées et accumulation de mutations."
      }
    ]
  },
  {
    symbol: "PALB2",
    name: "Partner and localizer of BRCA2",
    locus: "16p12.2",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["FANCN", "PNCA3"],
    protein: {
      name: "Protéine PALB2",
      uniprot: "Q9YC52",
      length: 1186,
      aliases: ["partner and localizer of BRCA2", "protéine de localisation de BRCA2"],
      function: "Pont moléculaire entre BRCA1 et BRCA2 : elle recrute BRCA2 (et RAD51) sur les sites de cassures double-brin pour la réparation par recombinaison homologue."
    },
    expression: [
      { cellType: "Cellules épithéliales mammaires", tissue: "Sein", level: "Élevée", score: 76 },
      { cellType: "Cellules épithéliales ovariennes", tissue: "Ovaire", level: "Élevée", score: 72 },
      { cellType: "Lymphocytes", tissue: "Sang périphérique", level: "Moyenne", score: 57 },
      { cellType: "Cellules pancréatiques", tissue: "Pancréas", level: "Moyenne", score: 50 },
      { cellType: "Fibroblastes", tissue: "Peau", level: "Faible", score: 26 }
    ],
    diseases: [
      {
        id: "cancer-du-sein-hereditaire-palb2",
        name: "Cancer du sein héréditaire lié à PALB2",
        omim: "114480",
        inheritance: "Autosomique dominante",
        description: "Risque très élevé de cancer du sein (souvent triple négatif), accru de cancer du pancréas et, chez l'homme, de cancer du sein masculin et de la prostate.",
        mechanism: "Mutations perte de fonction : défaut du recrutement de BRCA2/RAD51, réparation par recombinaison homologue défaillante."
      },
      {
        id: "anemie-de-fanconi-groupe-n",
        name: "Anémie de Fanconi, groupe de complémentation N",
        omim: "613390",
        inheritance: "Autosomique récessive",
        description: "Forme d'anémie de Fanconi biallélique : insuffisance médullaire progressive, malformations congénitales (pouces, reins, cœur) et forte prédisposition aux cancers (leucémies, carcinomes).",
        mechanism: "Mutations biallelliques de PALB2 : voie Fanconi/BRCA de réparation de l'ADN inactivée."
      }
    ]
  },
  {
    symbol: "BRIP1",
    name: "BRCA1 interacting protein C-terminal helicase 1",
    locus: "17q23.2",
    strand: "-",
    geneType: "Gène codant une protéine",
    aliases: ["BACH1", "FANCJ"],
    protein: {
      name: "Hélicase BRIP1 (FANCJ)",
      uniprot: "Q9BX63",
      length: 1249,
      aliases: ["BACH1", "FANCJ", "hélicase BRCA1"],
      function: "Hélicase fer-soufre de la famille Fanconi : elle déroule l'ADN au niveau des lésions et interagit avec BRCA1 pour coordonner la réparation des ponts interbrins."
    },
    expression: [
      { cellType: "Cellules épithéliales mammaires", tissue: "Sein", level: "Élevée", score: 74 },
      { cellType: "Cellules épithéliales ovariennes", tissue: "Ovaire", level: "Moyenne", score: 66 },
      { cellType: "Lymphocytes", tissue: "Sang périphérique", level: "Moyenne", score: 59 },
      { cellType: "Cellules de la moelle osseuse", tissue: "Moelle osseuse", level: "Moyenne", score: 54 },
      { cellType: "Hepatocytes", tissue: "Foie", level: "Faible", score: 27 }
    ],
    diseases: [
      {
        id: "anemie-de-fanconi-groupe-j",
        name: "Anémie de Fanconi, groupe de complémentation J",
        omim: "609054",
        inheritance: "Autosomique récessive",
        description: "Anémie de Fanconi biallélique : insuffisance médullaire, malformations squelettiques et urogénitales, taches café-au-lait et risque élevé de leucémie aiguë myéloïde.",
        mechanism: "Mutations biallelliques perte de fonction de l'hélicase FANCJ : défaut de réparation des ponts interbrins de l'ADN."
      },
      {
        id: "cancer-du-sein-susceptibilite-brip1",
        name: "Susceptibilité au cancer du sein liée à BRIP1",
        omim: "609054",
        inheritance: "Autosomique dominante",
        description: "Mutations tronquantes hétérozygotes de BRIP1 confèrent un risque modéré de cancer du sein, en particulier à début précoce.",
        mechanism: "Haploinsuffisance de la voie de réparation Fanconi/BRCA1, favorisant l'instabilité génomique mammaire."
      }
    ]
  },
  {
    symbol: "RAD51C",
    name: "RAD51 paralog C",
    locus: "17q22",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["FANCO"],
    protein: {
      name: "Protéine RAD51C",
      uniprot: "Q8WXE5",
      length: 376,
      aliases: ["RAD51C", "paralogue de RAD51"],
      function: "Paralogue de RAD51 impliqué dans la recombinaison homologue : il forme les complexes RAD51B-C-D-XRCC2 et RAD51C-XRCC3 essentiels à la réparation des cassures double-brin."
    },
    expression: [
      { cellType: "Cellules épithéliales ovariennes", tissue: "Ovaire", level: "Élevée", score: 77 },
      { cellType: "Cellules épithéliales mammaires", tissue: "Sein", level: "Élevée", score: 73 },
      { cellType: "Lymphocytes", tissue: "Sang périphérique", level: "Moyenne", score: 56 },
      { cellType: "Cellules de la moelle osseuse", tissue: "Moelle osseuse", level: "Moyenne", score: 51 },
      { cellType: "Fibroblastes", tissue: "Peau", level: "Faible", score: 24 }
    ],
    diseases: [
      {
        id: "anemie-de-fanconi-groupe-o",
        name: "Anémie de Fanconi, groupe de complémentation O",
        omim: "613390",
        inheritance: "Autosomique récessive",
        description: "Anémie de Fanconi biallélique avec malformations (dont anomalies des pouces et du radius), insuffisance médullaire et hypersensibilité aux agents réticulants l'ADN.",
        mechanism: "Mutations biallelliques de RAD51C : défaut de recombinaison homologue, instabilité chromosomique caractéristique."
      },
      {
        id: "cancer-de-l-ovaire-hereditaire-rad51c",
        name: "Cancer de l'ovaire héréditaire lié à RAD51C",
        omim: "613390",
        inheritance: "Autosomique dominante",
        description: "Mutations hétérozygotes de RAD51C prédisposent au cancer épithélial de l'ovaire (souvent de haut grade séreux) et, dans certaines familles, au cancer du sein.",
        mechanism: "Haploinsuffisance de RAD51C : réparation homologue déficiente dans l'épithélium ovarien."
      }
    ]
  },
  {
    symbol: "FBN1",
    name: "Fibrillin 1",
    locus: "15q21.1",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["MFS", "WMS", "SSKS"],
    protein: {
      name: "Fibrilline-1",
      uniprot: "P35555",
      length: 2871,
      aliases: ["fibrilline-1", "protéine de microfibrille"],
      function: "Glycoprotéine structurale des microfibrilles de la matrice extracellulaire : elle sert d'échafaudage aux fibres élastiques et séquestre le TGF-β sous forme latente."
    },
    expression: [
      { cellType: "Fibroblastes dermiques", tissue: "Peau", level: "Élevée", score: 88 },
      { cellType: "Cellules musculaires lisses aortiques", tissue: "Aorte", level: "Élevée", score: 85 },
      { cellType: "Fibroblastes pulmonaires", tissue: "Poumon", level: "Élevée", score: 80 },
      { cellType: "Chondrocytes", tissue: "Cartilage", level: "Moyenne", score: 61 },
      { cellType: "Hepatocytes", tissue: "Foie", level: "Faible", score: 29 }
    ],
    diseases: [
      {
        id: "syndrome-de-marfan",
        name: "Syndrome de Marfan",
        omim: "154700",
        inheritance: "Autosomique dominante",
        description: "Atteinte du tissu conjonctif : grande taille, arachnodactylie, hyperlaxité articulaire, ectopie du cristallin, anévrisme et dissection de l'aorte ascendante (complication vitale), prolapsus de la valve mitrale.",
        mechanism: "Mutations dominantes de FBN1 : microfibrilles fragiles et libération anormale de TGF-β, responsables des lésions vasculaires et squelettiques."
      }
    ]
  },
  {
    symbol: "MYH7",
    name: "Myosin heavy chain 7",
    locus: "14q11.2",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["CMD1S", "CMH1", "MYH6"],
    protein: {
      name: "Chaîne lourde de myosine cardiaque bêta (MYH7)",
      uniprot: "P12883",
      length: 1935,
      aliases: ["myosine cardiaque bêta", "chaîne lourde bêta du myocarde"],
      function: "Chaîne lourde de la myosine cardiaque bêta, moteur moléculaire des sarcomères : elle hydrolyse l'ATP pour générer la contraction des cardiomyocytes ventriculaires."
    },
    expression: [
      { cellType: "Cardiomyocytes ventriculaires", tissue: "Cœur (ventricule)", level: "Élevée", score: 96 },
      { cellType: "Cardiomyocytes auriculaires", tissue: "Cœur (oreillette)", level: "Élevée", score: 84 },
      { cellType: "Myocytes squelettiques lents", tissue: "Muscle squelettique", level: "Moyenne", score: 48 },
      { cellType: "Hepatocytes", tissue: "Foie", level: "Faible", score: 8 }
    ],
    diseases: [
      {
        id: "cardiomyopathie-hypertrophique-familiale",
        name: "Cardiomyopathie hypertrophique familiale",
        omim: "192600",
        inheritance: "Autosomique dominante",
        description: "Épaississement anormal du myocarde (hypertrophie ventriculaire gauche souvent asymétrique), pouvant causer dyspnée, angor, syncopes, troubles du rythme et mort subite, première cause de mort subite du sportif jeune.",
        mechanism: "Mutations faux-sens de MYH7 (souvent dans le domaine moteur ou la tige) : incorporation d'une myosine défectueuse dans le sarcomère, altérant la contractilité et la dépense énergétique cellulaire."
      }
    ]
  },
  {
    symbol: "LDLR",
    name: "Low density lipoprotein receptor",
    locus: "19p13.2",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["FH", "LDLCQ2"],
    protein: {
      name: "Récepteur des LDL",
      uniprot: "P01130",
      length: 860,
      aliases: ["récepteur LDL", "LDL-R"],
      function: "Récepteur membranaire hépatique qui internalise les particules de LDL circulantes par endocytose médiée par la clathrine, régulant ainsi la cholestérolémie."
    },
    expression: [
      { cellType: "Hepatocytes", tissue: "Foie", level: "Élevée", score: 95 },
      { cellType: "Cellules de la corticosurrénale", tissue: "Surrénale", level: "Élevée", score: 80 },
      { cellType: "Entérocytes", tissue: "Intestin grêle", level: "Moyenne", score: 58 },
      { cellType: "Fibroblastes", tissue: "Peau", level: "Moyenne", score: 50 },
      { cellType: "Neurones corticaux", tissue: "Cerveau (cortex)", level: "Faible", score: 20 }
    ],
    diseases: [
      {
        id: "hypercholesterolemie-familiale",
        name: "Hypercholestérolémie familiale",
        omim: "143890",
        inheritance: "Autosomique dominante",
        description: "Hypercholestérolémie LDL sévère dès la naissance (LDL souvent > 190 mg/dL à l'état hétérozygote, > 500 mg/dL en homozygote), dépôts lipidiques (xanthomes tendineux, arc cornéen) et maladie cardiovasculaire athéromateuse très précoce.",
        mechanism: "Mutations perte de fonction du récepteur LDL : clairance hépatique des LDL diminuée, accumulation plasmatique du cholestérol LDL."
      }
    ]
  },
  {
    symbol: "PCSK9",
    name: "Proprotein convertase subtilisin/kexin type 9",
    locus: "1p32.3",
    strand: "+",
    geneType: "Gène codant une protéine",
    aliases: ["FH3", "HCHOLA3", "NARC1"],
    protein: {
      name: "Proprotéine convertase PCSK9",
      uniprot: "Q8NBP7",
      length: 692,
      aliases: ["PCSK9", "NARC-1"],
      function: "Protéine sécrétée par le foie qui se lie au récepteur des LDL à la surface des hépatocytes et dirige sa dégradation lysosomale, diminuant ainsi le nombre de récepteurs disponibles."
    },
    expression: [
      { cellType: "Hepatocytes", tissue: "Foie", level: "Élevée", score: 93 },
      { cellType: "Entérocytes", tissue: "Intestin grêle", level: "Moyenne", score: 64 },
      { cellType: "Cellules pancréatiques", tissue: "Pancréas", level: "Moyenne", score: 52 },
      { cellType: "Cellules rénales", tissue: "Rein", level: "Faible", score: 31 }
    ],
    diseases: [
      {
        id: "hypercholesterolemie-familiale-pcsk9",
        name: "Hypercholestérolémie familiale liée à PCSK9",
        omim: "607875",
        inheritance: "Autosomique dominante",
        description: "Forme d'hypercholestérolémie familiale due à des mutations gain de fonction de PCSK9 : dégradation accélérée du récepteur LDL, LDL-cholestérol élevé et risque cardiovasculaire précoce, phénotype proche de celui des mutations de LDLR.",
        mechanism: "Mutations gain de fonction : PCSK9 hyperactive dégrade davantage de récepteurs LDL, réduisant la clairance des LDL."
      }
    ]
  }
];
