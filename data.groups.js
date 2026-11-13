const DATA_DISEASE_GROUPS = [
 {
  "id": "cmt",
  "name": "Maladie de Charcot-Marie-Tooth (CMT)",
  "omim": "",
  "inheritance": "",
  "description": "Groupe des neuropathies héréditaires motrices et sensitives (NHMS) : atteinte progressive des nerfs périphériques, d'abord distale (amyotrophie péronière, pieds creux), puis proximale. Formes démyélinisantes (CMT1), axonales (CMT2), récessives (CMT4), liées à l'X (CMTX) et intermédiaires (DI-CMT).",
  "mechanism": "Mutations de gènes de la myéline (PMP22, MPZ, GJB1...), des neurofilaments (NEFL), des aminoacyl-ARNt synthétases (GARS1, YARS1...) ou du cytosquelette axonal.",
  "genes": [
   "AIFM1",
   "DNM2",
   "EGR2",
   "FGD4",
   "FIG4",
   "GARS1",
   "GDAP1",
   "GJB1",
   "HK1",
   "HSPB1",
   "KIF1B",
   "LITAF",
   "LMNA",
   "MFN2",
   "MPZ",
   "MTMR2",
   "NDRG1",
   "NEFL",
   "PMP22",
   "PRPS1",
   "RAB7A",
   "SBF2",
   "SH3TC2",
   "TRPV4",
   "YARS1"
  ],
  "subs": [
   "cmt1a",
   "cmt1b",
   "cmt1c",
   "cmt1d",
   "cmt1e",
   "cmt1f",
   "cmt2a1",
   "cmt2a2",
   "cmt2b",
   "cmt2c",
   "cmt2d",
   "cmt2e",
   "cmt2f",
   "cmt2i",
   "cmt2j",
   "cmt2k",
   "cmt2b1",
   "cmt-di-b",
   "cmt-di-c",
   "cmt4a",
   "cmt4b1",
   "cmt4b2",
   "cmt4c",
   "cmt4d",
   "cmt4e",
   "cmt4g",
   "cmt4h",
   "cmt4j",
   "cmtx1",
   "cmtx4",
   "cmtx5"
  ],
  "aliases": [
   "cmt",
   "charcot-marie-tooth",
   "charcot marie tooth",
   "neuropathie hereditaire motrice et sensitive",
   "nhms"
  ]
 },
 {
  "id": "cardiomyopathies",
  "name": "Cardiomyopathies héréditaires",
  "omim": "",
  "inheritance": "",
  "description": "Groupe des maladies du muscle cardiaque d'origine génétique : hypertrophique (HCM), dilatée (DCM), arythmogène du ventricule droit (ARVC), non-compaction du ventricule gauche (LVNC), restrictive (RCM), et formes syndromiques (Danon, Fabry).",
  "mechanism": "Mutations de gènes du sarcomère (MYH7, MYBPC3, TNNT2...), du cytosquelette (TTN, LDB3, DMD...), des desmosomes (PKP2, DSP, DSG2...) ou du métabolisme lysosomal (LAMP2, GLA).",
  "genes": [
   "ABCC9",
   "ACTC1",
   "ALPK3",
   "BAG3",
   "CDH2",
   "CRYAB",
   "CSRP3",
   "CTNNA3",
   "DES",
   "DMD",
   "DSC2",
   "DSG2",
   "DSP",
   "DTNA",
   "EYA4",
   "FHOD3",
   "FKTN",
   "FLNC",
   "GLA",
   "JPH2",
   "JUP",
   "KIF20A",
   "LAMP2",
   "LDB3",
   "LMNA",
   "MIB1",
   "MYBPC3",
   "MYH6",
   "MYH7",
   "MYL2",
   "MYL3",
   "MYOZ2",
   "NEXN",
   "PKP2",
   "PLN",
   "PRDM16",
   "PRKAG2",
   "PSEN1",
   "PSEN2",
   "RBM20",
   "SCN5A",
   "SGCD",
   "TCAP",
   "TMEM43",
   "TNNC1",
   "TNNI3",
   "TNNT2",
   "TPM1",
   "TTN",
   "VCL"
  ],
  "subs": [
   "cardiomyopathie-hypertrophique-familiale",
   "hcm2",
   "hcm3",
   "hcm4",
   "hcm6",
   "hcm7",
   "hcm8",
   "hcm10",
   "hcm11",
   "hcm13",
   "hcm14",
   "hcm25",
   "hcm26",
   "hcm27",
   "hcm28",
   "cardiomyopathie-dilatee-1a",
   "dcm1c",
   "dcm1d",
   "dcm1e",
   "dcm1g",
   "dcm1i",
   "dcm1j",
   "dcm1l",
   "dcm1m",
   "dcm1o",
   "dcm1p",
   "dcm1s",
   "dcm1u",
   "dcm1v",
   "dcm1w",
   "dcm1x",
   "dcm2a",
   "dcm1bb",
   "dcm1cc",
   "dcm1dd",
   "dcm1hh",
   "dcm3b",
   "dcm1ee",
   "dcm1ii",
   "arvc5",
   "arvc8",
   "arvc9",
   "arvc10",
   "arvc11",
   "arvc12",
   "arvc13",
   "arvc14",
   "carvajal",
   "lvnc1",
   "lvnc7",
   "lvnc8",
   "lvnc10",
   "rcm1",
   "rcm3",
   "rcm6",
   "danon",
   "fabry"
  ],
  "aliases": [
   "cardiomyopathie",
   "cardiomyopathies",
   "cardiomyopathie genetique"
  ]
 },
 {
  "id": "cmt1a",
  "name": "type 1A (CMT1A)",
  "omim": "118220",
  "inheritance": "Autosomique dominante",
  "description": "Neuropathie périphérique démyélinisante : faiblesse et amyotrophie distales des membres, pieds creux, réflexes diminués, vitesses de conduction motrice très ralenties (< 38 m/s).",
  "mechanism": "Duplication 17p12 du gène PMP22 (forme CMT1A) ou mutation ponctuelle (CMT1E)",
  "genes": [
   "PMP22"
  ],
  "aliases": [
   "CMT1A",
   "cmt1a"
  ]
 },
 {
  "id": "cmt1b",
  "name": "type 1B (CMT1B)",
  "omim": "118200",
  "inheritance": "Autosomique dominante",
  "description": "Neuropathie périphérique démyélinisante : faiblesse et amyotrophie distales des membres, pieds creux, réflexes diminués, vitesses de conduction motrice très ralenties (< 38 m/s).",
  "mechanism": "Mutation de MPZ, protéine majeure de la myéline périphérique (P0)",
  "genes": [
   "MPZ"
  ],
  "aliases": [
   "CMT1B",
   "cmt1b"
  ]
 },
 {
  "id": "cmt1c",
  "name": "type 1C (CMT1C)",
  "omim": "601098",
  "inheritance": "Autosomique dominante",
  "description": "Neuropathie périphérique démyélinisante : faiblesse et amyotrophie distales des membres, pieds creux, réflexes diminués, vitesses de conduction motrice très ralenties (< 38 m/s).",
  "mechanism": "Mutation de LITAF, facteur de transcription impliqué dans la myéline",
  "genes": [
   "LITAF"
  ],
  "aliases": [
   "CMT1C",
   "cmt1c"
  ]
 },
 {
  "id": "cmt1d",
  "name": "type 1D (CMT1D)",
  "omim": "607678",
  "inheritance": "Autosomique dominante",
  "description": "Neuropathie périphérique démyélinisante : faiblesse et amyotrophie distales des membres, pieds creux, réflexes diminués, vitesses de conduction motrice très ralenties (< 38 m/s).",
  "mechanism": "Mutation d'EGR2, facteur de transcription de la myélinisation",
  "genes": [
   "EGR2"
  ],
  "aliases": [
   "CMT1D",
   "cmt1d"
  ]
 },
 {
  "id": "cmt1e",
  "name": "type 1E (CMT1E)",
  "omim": "118300",
  "inheritance": "Autosomique dominante",
  "description": "Neuropathie périphérique démyélinisante : faiblesse et amyotrophie distales des membres, pieds creux, réflexes diminués, vitesses de conduction motrice très ralenties (< 38 m/s).",
  "mechanism": "Duplication 17p12 du gène PMP22 (forme CMT1A) ou mutation ponctuelle (CMT1E)",
  "genes": [
   "PMP22"
  ],
  "aliases": [
   "CMT1E",
   "cmt1e"
  ]
 },
 {
  "id": "cmt1f",
  "name": "type 1F (CMT1F)",
  "omim": "607734",
  "inheritance": "Autosomique dominante",
  "description": "Neuropathie périphérique démyélinisante : faiblesse et amyotrophie distales des membres, pieds creux, réflexes diminués, vitesses de conduction motrice très ralenties (< 38 m/s).",
  "mechanism": "Mutation de NEFL, chaîne légère du neurofilament",
  "genes": [
   "NEFL"
  ],
  "aliases": [
   "CMT1F",
   "cmt1f"
  ]
 },
 {
  "id": "cmt2a1",
  "name": "type 2A1 (CMT2A1)",
  "omim": "118210",
  "inheritance": "Autosomique dominante",
  "description": "Neuropathie périphérique axonale : amyotrophie et faiblesse distales progressives des membres, vitesses de conduction normales ou modérément diminuées.",
  "mechanism": "Mutation de KIF1B, kinésine transportant les mitochondries",
  "genes": [
   "KIF1B"
  ],
  "aliases": [
   "CMT2A1",
   "cmt2a1"
  ]
 },
 {
  "id": "cmt2a2",
  "name": "type 2A2 (CMT2A2)",
  "omim": "609260",
  "inheritance": "Autosomique dominante",
  "description": "Neuropathie périphérique axonale : amyotrophie et faiblesse distales progressives des membres, vitesses de conduction normales ou modérément diminuées.",
  "mechanism": "Mutation de MFN2, mitofusine 2 (fusion mitochondriale)",
  "genes": [
   "MFN2"
  ],
  "aliases": [
   "CMT2A2",
   "cmt2a2"
  ]
 },
 {
  "id": "cmt2b",
  "name": "type 2B (CMT2B)",
  "omim": "600882",
  "inheritance": "Autosomique dominante",
  "description": "Neuropathie périphérique axonale : amyotrophie et faiblesse distales progressives des membres, vitesses de conduction normales ou modérément diminuées.",
  "mechanism": "Mutation de RAB7A, petite GTPase du trafic endosomal",
  "genes": [
   "RAB7A"
  ],
  "aliases": [
   "CMT2B",
   "cmt2b"
  ]
 },
 {
  "id": "cmt2c",
  "name": "type 2C (CMT2C)",
  "omim": "606071",
  "inheritance": "Autosomique dominante",
  "description": "Neuropathie périphérique axonale : amyotrophie et faiblesse distales progressives des membres, vitesses de conduction normales ou modérément diminuées.",
  "mechanism": "Mutation de TRPV4, canal cationique thermosensible",
  "genes": [
   "TRPV4"
  ],
  "aliases": [
   "CMT2C",
   "cmt2c"
  ]
 },
 {
  "id": "cmt2d",
  "name": "type 2D (CMT2D)",
  "omim": "601472",
  "inheritance": "Autosomique dominante",
  "description": "Neuropathie périphérique axonale : amyotrophie et faiblesse distales progressives des membres, vitesses de conduction normales ou modérément diminuées.",
  "mechanism": "Mutation de GARS1, glycyl-ARNt synthétase",
  "genes": [
   "GARS1"
  ],
  "aliases": [
   "CMT2D",
   "cmt2d"
  ]
 },
 {
  "id": "cmt2e",
  "name": "type 2E (CMT2E)",
  "omim": "607684",
  "inheritance": "Autosomique dominante",
  "description": "Neuropathie périphérique axonale : amyotrophie et faiblesse distales progressives des membres, vitesses de conduction normales ou modérément diminuées.",
  "mechanism": "Mutation de NEFL, chaîne légère du neurofilament",
  "genes": [
   "NEFL"
  ],
  "aliases": [
   "CMT2E",
   "cmt2e"
  ]
 },
 {
  "id": "cmt2f",
  "name": "type 2F (CMT2F)",
  "omim": "606595",
  "inheritance": "Autosomique dominante",
  "description": "Neuropathie périphérique axonale : amyotrophie et faiblesse distales progressives des membres, vitesses de conduction normales ou modérément diminuées.",
  "mechanism": "Mutation de HSPB1, petite protéine de choc thermique",
  "genes": [
   "HSPB1"
  ],
  "aliases": [
   "CMT2F",
   "cmt2f"
  ]
 },
 {
  "id": "cmt2i",
  "name": "type 2I (CMT2I)",
  "omim": "607677",
  "inheritance": "Autosomique dominante",
  "description": "Neuropathie périphérique axonale : amyotrophie et faiblesse distales progressives des membres, vitesses de conduction normales ou modérément diminuées.",
  "mechanism": "Mutation de MPZ, protéine majeure de la myéline périphérique (P0)",
  "genes": [
   "MPZ"
  ],
  "aliases": [
   "CMT2I",
   "cmt2i"
  ]
 },
 {
  "id": "cmt2j",
  "name": "type 2J (CMT2J)",
  "omim": "607736",
  "inheritance": "Autosomique dominante",
  "description": "Neuropathie périphérique axonale : amyotrophie et faiblesse distales progressives des membres, vitesses de conduction normales ou modérément diminuées.",
  "mechanism": "Mutation de MPZ, protéine majeure de la myéline périphérique (P0)",
  "genes": [
   "MPZ"
  ],
  "aliases": [
   "CMT2J",
   "cmt2j"
  ]
 },
 {
  "id": "cmt2k",
  "name": "type 2K (CMT2K)",
  "omim": "607831",
  "inheritance": "Autosomique récessive",
  "description": "Forme autosomique récessive de Charcot-Marie-Tooth : début souvent précoce, atteinte sensitivo-motrice sévère, démyélinisante ou axonale.",
  "mechanism": "Mutation de GDAP1, protéine mitochondriale de la fission",
  "genes": [
   "GDAP1"
  ],
  "aliases": [
   "CMT2K",
   "cmt2k"
  ]
 },
 {
  "id": "cmt2b1",
  "name": "type 2B1 (CMT2B1)",
  "omim": "605588",
  "inheritance": "Autosomique récessive",
  "description": "Forme autosomique récessive de Charcot-Marie-Tooth : début souvent précoce, atteinte sensitivo-motrice sévère, démyélinisante ou axonale.",
  "mechanism": "Mutation de LMNA, lamines A/C nucléaires",
  "genes": [
   "LMNA"
  ],
  "aliases": [
   "CMT2B1",
   "cmt2b1"
  ]
 },
 {
  "id": "cmt-di-b",
  "name": "intermédiaire dominante B (DI-CMTB)",
  "omim": "606482",
  "inheritance": "Autosomique dominante",
  "description": "Forme intermédiaire autosomique dominante : vitesses de conduction intermédiaires (25-45 m/s), entre les formes démyélinisantes et axonales.",
  "mechanism": "Mutation de DNM2, dynamine 2",
  "genes": [
   "DNM2"
  ],
  "aliases": [
   "DI-CMTB",
   "di-cmtb"
  ]
 },
 {
  "id": "cmt-di-c",
  "name": "intermédiaire dominante C (DI-CMTC)",
  "omim": "608323",
  "inheritance": "Autosomique dominante",
  "description": "Forme intermédiaire autosomique dominante : vitesses de conduction intermédiaires (25-45 m/s), entre les formes démyélinisantes et axonales.",
  "mechanism": "Mutation de YARS1, tyrosyl-ARNt synthétase",
  "genes": [
   "YARS1"
  ],
  "aliases": [
   "DI-CMTC",
   "di-cmtc"
  ]
 },
 {
  "id": "cmt4a",
  "name": "type 4A (CMT4A)",
  "omim": "214400",
  "inheritance": "Autosomique récessive",
  "description": "Forme autosomique récessive de Charcot-Marie-Tooth : début souvent précoce, atteinte sensitivo-motrice sévère, démyélinisante ou axonale.",
  "mechanism": "Mutation de GDAP1, protéine mitochondriale de la fission",
  "genes": [
   "GDAP1"
  ],
  "aliases": [
   "CMT4A",
   "cmt4a"
  ]
 },
 {
  "id": "cmt4b1",
  "name": "type 4B1 (CMT4B1)",
  "omim": "601382",
  "inheritance": "Autosomique récessive",
  "description": "Forme autosomique récessive de Charcot-Marie-Tooth : début souvent précoce, atteinte sensitivo-motrice sévère, démyélinisante ou axonale.",
  "mechanism": "Mutation de MTMR2, phosphatase des phosphoinositides",
  "genes": [
   "MTMR2"
  ],
  "aliases": [
   "CMT4B1",
   "cmt4b1"
  ]
 },
 {
  "id": "cmt4b2",
  "name": "type 4B2 (CMT4B2)",
  "omim": "604563",
  "inheritance": "Autosomique récessive",
  "description": "Forme autosomique récessive de Charcot-Marie-Tooth : début souvent précoce, atteinte sensitivo-motrice sévère, démyélinisante ou axonale.",
  "mechanism": "Mutation de SBF2 (MTMR13), phosphatase des phosphoinositides",
  "genes": [
   "SBF2"
  ],
  "aliases": [
   "CMT4B2",
   "cmt4b2"
  ]
 },
 {
  "id": "cmt4c",
  "name": "type 4C (CMT4C)",
  "omim": "601596",
  "inheritance": "Autosomique récessive",
  "description": "Forme autosomique récessive de Charcot-Marie-Tooth : début souvent précoce, atteinte sensitivo-motrice sévère, démyélinisante ou axonale.",
  "mechanism": "Mutation de SH3TC2, protéine du recyclage des récepteurs",
  "genes": [
   "SH3TC2"
  ],
  "aliases": [
   "CMT4C",
   "cmt4c"
  ]
 },
 {
  "id": "cmt4d",
  "name": "type 4D (CMT4D)",
  "omim": "601455",
  "inheritance": "Autosomique récessive",
  "description": "Forme autosomique récessive de Charcot-Marie-Tooth : début souvent précoce, atteinte sensitivo-motrice sévère, démyélinisante ou axonale.",
  "mechanism": "Mutation de NDRG1, protéine de différenciation",
  "genes": [
   "NDRG1"
  ],
  "aliases": [
   "CMT4D",
   "cmt4d"
  ]
 },
 {
  "id": "cmt4e",
  "name": "type 4E (CMT4E)",
  "omim": "605253",
  "inheritance": "Autosomique récessive",
  "description": "Forme autosomique récessive de Charcot-Marie-Tooth : début souvent précoce, atteinte sensitivo-motrice sévère, démyélinisante ou axonale.",
  "mechanism": "Mutation d'EGR2, facteur de transcription de la myélinisation",
  "genes": [
   "EGR2"
  ],
  "aliases": [
   "CMT4E",
   "cmt4e"
  ]
 },
 {
  "id": "cmt4g",
  "name": "type 4G (CMT4G)",
  "omim": "605285",
  "inheritance": "Autosomique récessive",
  "description": "Forme autosomique récessive de Charcot-Marie-Tooth : début souvent précoce, atteinte sensitivo-motrice sévère, démyélinisante ou axonale.",
  "mechanism": "Mutation de HK1, hexokinase 1",
  "genes": [
   "HK1"
  ],
  "aliases": [
   "CMT4G",
   "cmt4g"
  ]
 },
 {
  "id": "cmt4h",
  "name": "type 4H (CMT4H)",
  "omim": "609311",
  "inheritance": "Autosomique récessive",
  "description": "Forme autosomique récessive de Charcot-Marie-Tooth : début souvent précoce, atteinte sensitivo-motrice sévère, démyélinisante ou axonale.",
  "mechanism": "Mutation de FGD4 (frabitine), facteur d'échange de Rho",
  "genes": [
   "FGD4"
  ],
  "aliases": [
   "CMT4H",
   "cmt4h"
  ]
 },
 {
  "id": "cmt4j",
  "name": "type 4J (CMT4J)",
  "omim": "611228",
  "inheritance": "Autosomique récessive",
  "description": "Forme autosomique récessive de Charcot-Marie-Tooth : début souvent précoce, atteinte sensitivo-motrice sévère, démyélinisante ou axonale.",
  "mechanism": "Mutation de FIG4, phosphoinositide 5-phosphatase",
  "genes": [
   "FIG4"
  ],
  "aliases": [
   "CMT4J",
   "cmt4j"
  ]
 },
 {
  "id": "cmtx1",
  "name": "liée à l'X, type 1 (CMTX1)",
  "omim": "302800",
  "inheritance": "Liée à l'X",
  "description": "Forme liée à l'X : atteinte axonale volontiers plus sévère chez l'homme, avec parfois atteinte des nerfs crâniens.",
  "mechanism": "Mutation de GJB1, connexine 32 (jonctions gap des cellules de Schwann)",
  "genes": [
   "GJB1"
  ],
  "aliases": [
   "CMTX1",
   "cmtx1"
  ]
 },
 {
  "id": "cmtx4",
  "name": "liée à l'X, type 4 (CMTX4)",
  "omim": "310490",
  "inheritance": "Liée à l'X",
  "description": "Forme liée à l'X : atteinte axonale volontiers plus sévère chez l'homme, avec parfois atteinte des nerfs crâniens.",
  "mechanism": "Mutation d'AIFM1, facteur pro-apoptotique mitochondrial",
  "genes": [
   "AIFM1"
  ],
  "aliases": [
   "CMTX4",
   "cmtx4"
  ]
 },
 {
  "id": "cmtx5",
  "name": "liée à l'X, type 5 (CMTX5)",
  "omim": "311070",
  "inheritance": "Liée à l'X",
  "description": "Forme liée à l'X : atteinte axonale volontiers plus sévère chez l'homme, avec parfois atteinte des nerfs crâniens.",
  "mechanism": "Mutation de PRPS1, PRPP synthétase 1",
  "genes": [
   "PRPS1"
  ],
  "aliases": [
   "CMTX5",
   "cmtx5"
  ]
 },
 {
  "id": "cardiomyopathie-hypertrophique-familiale",
  "name": "Cardiomyopathie hypertrophique familiale (HCM)",
  "omim": "192600",
  "inheritance": "Autosomique dominante",
  "description": "Hypertrophie concentrique du ventricule gauche, le plus souvent septale asymétrique ; risque de mort subite, fibrillation auriculaire et insuffisance cardiaque.",
  "mechanism": "Mutation de MYH7, chaîne lourde β de la myosine cardiaque ; Mutation de MYBPC3, protéine C liant la myosine cardiaque ; Mutation de TNNT2, troponine T cardiaque ; Mutation de TNNI3, troponine I cardiaque ; Mutation de TPM1, α-tropomyosine ; Mutation d'ACTC1, α-actine cardiaque ; Mutation de MYL2, chaîne légère régulatrice de la myosine ; Mutation de MYL3, chaîne légère essentielle de la myosine ; Mutation de PRKAG2, sous-unité γ2 régulatrice de l'AMPK ; Mutation de TNNC1, troponine C cardiaque ; Mutation de MYH6, chaîne lourde α de la myosine cardiaque ; Mutation de TCAP, téléthonine (protéine du sarcomère) ; Mutation de JPH2, junctophiline 2 ; Mutation de FLNC, filamine C ; Mutation d'ALPK3, kinase cardiaque ; Mutation du gène MYOZ2 ; Mutation de PLN, phospholamban (régulateur de la pompe calcique) ; Mutation de NEXN, nexiline ; Mutation de CSRP3 (MLP), protéine du sarcomère ; Mutation de VCL, vinculine",
  "genes": [
   "MYH7",
   "MYBPC3",
   "TNNT2",
   "TNNI3",
   "TPM1",
   "ACTC1",
   "MYL2",
   "MYL3",
   "PRKAG2",
   "TNNC1",
   "MYH6",
   "TCAP",
   "JPH2",
   "FLNC",
   "ALPK3",
   "MYOZ2",
   "PLN",
   "NEXN",
   "CSRP3",
   "VCL"
  ],
  "aliases": [
   "HCM",
   "hcm"
  ]
 },
 {
  "id": "hcm2",
  "name": "Cardiomyopathie hypertrophique 2 (TNNT2)",
  "omim": "115195",
  "inheritance": "Autosomique dominante",
  "description": "Hypertrophie concentrique du ventricule gauche, le plus souvent septale asymétrique ; risque de mort subite, fibrillation auriculaire et insuffisance cardiaque.",
  "mechanism": "Mutation de TNNT2, troponine T cardiaque",
  "genes": [
   "TNNT2"
  ],
  "aliases": [
   "TNNT2",
   "tnnt2"
  ]
 },
 {
  "id": "hcm3",
  "name": "Cardiomyopathie hypertrophique 3 (TPM1)",
  "omim": "115196",
  "inheritance": "Autosomique dominante",
  "description": "Hypertrophie concentrique du ventricule gauche, le plus souvent septale asymétrique ; risque de mort subite, fibrillation auriculaire et insuffisance cardiaque.",
  "mechanism": "Mutation de TPM1, α-tropomyosine",
  "genes": [
   "TPM1"
  ],
  "aliases": [
   "TPM1",
   "tpm1"
  ]
 },
 {
  "id": "hcm4",
  "name": "Cardiomyopathie hypertrophique 4 (MYBPC3)",
  "omim": "115197",
  "inheritance": "Autosomique dominante",
  "description": "Hypertrophie concentrique du ventricule gauche, le plus souvent septale asymétrique ; risque de mort subite, fibrillation auriculaire et insuffisance cardiaque.",
  "mechanism": "Mutation de MYBPC3, protéine C liant la myosine cardiaque",
  "genes": [
   "MYBPC3"
  ],
  "aliases": [
   "MYBPC3",
   "mybpc3"
  ]
 },
 {
  "id": "hcm6",
  "name": "Cardiomyopathie hypertrophique 6 (PRKAG2)",
  "omim": "600858",
  "inheritance": "Autosomique dominante",
  "description": "Hypertrophie concentrique du ventricule gauche, le plus souvent septale asymétrique ; risque de mort subite, fibrillation auriculaire et insuffisance cardiaque.",
  "mechanism": "Mutation de PRKAG2, sous-unité γ2 régulatrice de l'AMPK",
  "genes": [
   "PRKAG2"
  ],
  "aliases": [
   "PRKAG2",
   "prkag2"
  ]
 },
 {
  "id": "hcm7",
  "name": "Cardiomyopathie hypertrophique 7 (TNNI3)",
  "omim": "613690",
  "inheritance": "Autosomique dominante",
  "description": "Hypertrophie concentrique du ventricule gauche, le plus souvent septale asymétrique ; risque de mort subite, fibrillation auriculaire et insuffisance cardiaque.",
  "mechanism": "Mutation de TNNI3, troponine I cardiaque",
  "genes": [
   "TNNI3"
  ],
  "aliases": [
   "TNNI3",
   "tnni3"
  ]
 },
 {
  "id": "hcm8",
  "name": "Cardiomyopathie hypertrophique 8 (MYL3)",
  "omim": "608751",
  "inheritance": "Autosomique dominante",
  "description": "Hypertrophie concentrique du ventricule gauche, le plus souvent septale asymétrique ; risque de mort subite, fibrillation auriculaire et insuffisance cardiaque.",
  "mechanism": "Mutation de MYL3, chaîne légère essentielle de la myosine",
  "genes": [
   "MYL3"
  ],
  "aliases": [
   "MYL3",
   "myl3"
  ]
 },
 {
  "id": "hcm10",
  "name": "Cardiomyopathie hypertrophique 10 (MYL2)",
  "omim": "608758",
  "inheritance": "Autosomique dominante",
  "description": "Hypertrophie concentrique du ventricule gauche, le plus souvent septale asymétrique ; risque de mort subite, fibrillation auriculaire et insuffisance cardiaque.",
  "mechanism": "Mutation de MYL2, chaîne légère régulatrice de la myosine",
  "genes": [
   "MYL2"
  ],
  "aliases": [
   "MYL2",
   "myl2"
  ]
 },
 {
  "id": "hcm11",
  "name": "Cardiomyopathie hypertrophique 11 (ACTC1)",
  "omim": "612098",
  "inheritance": "Autosomique dominante",
  "description": "Hypertrophie concentrique du ventricule gauche, le plus souvent septale asymétrique ; risque de mort subite, fibrillation auriculaire et insuffisance cardiaque.",
  "mechanism": "Mutation d'ACTC1, α-actine cardiaque",
  "genes": [
   "ACTC1"
  ],
  "aliases": [
   "ACTC1",
   "actc1"
  ]
 },
 {
  "id": "hcm13",
  "name": "Cardiomyopathie hypertrophique 13 (TNNC1)",
  "omim": "613243",
  "inheritance": "Autosomique dominante",
  "description": "Hypertrophie concentrique du ventricule gauche, le plus souvent septale asymétrique ; risque de mort subite, fibrillation auriculaire et insuffisance cardiaque.",
  "mechanism": "Mutation de TNNC1, troponine C cardiaque",
  "genes": [
   "TNNC1"
  ],
  "aliases": [
   "TNNC1",
   "tnnc1"
  ]
 },
 {
  "id": "hcm14",
  "name": "Cardiomyopathie hypertrophique 14 (MYH6)",
  "omim": "613251",
  "inheritance": "Autosomique dominante",
  "description": "Hypertrophie concentrique du ventricule gauche, le plus souvent septale asymétrique ; risque de mort subite, fibrillation auriculaire et insuffisance cardiaque.",
  "mechanism": "Mutation de MYH6, chaîne lourde α de la myosine cardiaque",
  "genes": [
   "MYH6"
  ],
  "aliases": [
   "MYH6",
   "myh6"
  ]
 },
 {
  "id": "hcm25",
  "name": "Cardiomyopathie hypertrophique 25 (TCAP)",
  "omim": "607487",
  "inheritance": "Autosomique dominante",
  "description": "Hypertrophie concentrique du ventricule gauche, le plus souvent septale asymétrique ; risque de mort subite, fibrillation auriculaire et insuffisance cardiaque.",
  "mechanism": "Mutation de TCAP, téléthonine (protéine du sarcomère)",
  "genes": [
   "TCAP"
  ],
  "aliases": [
   "TCAP",
   "tcap"
  ]
 },
 {
  "id": "hcm26",
  "name": "Cardiomyopathie hypertrophique 26 (FLNC)",
  "omim": "617047",
  "inheritance": "Autosomique dominante",
  "description": "Hypertrophie concentrique du ventricule gauche, le plus souvent septale asymétrique ; risque de mort subite, fibrillation auriculaire et insuffisance cardiaque.",
  "mechanism": "Mutation de FLNC, filamine C",
  "genes": [
   "FLNC"
  ],
  "aliases": [
   "FLNC",
   "flnc"
  ]
 },
 {
  "id": "hcm27",
  "name": "Cardiomyopathie hypertrophique 27 (ALPK3)",
  "omim": "618052",
  "inheritance": "Autosomique dominante",
  "description": "Hypertrophie concentrique du ventricule gauche, le plus souvent septale asymétrique ; risque de mort subite, fibrillation auriculaire et insuffisance cardiaque.",
  "mechanism": "Mutation d'ALPK3, kinase cardiaque",
  "genes": [
   "ALPK3"
  ],
  "aliases": [
   "ALPK3",
   "alpk3"
  ]
 },
 {
  "id": "hcm28",
  "name": "Cardiomyopathie hypertrophique 28 (FHOD3)",
  "omim": "619402",
  "inheritance": "Autosomique dominante",
  "description": "Hypertrophie concentrique du ventricule gauche, le plus souvent septale asymétrique ; risque de mort subite, fibrillation auriculaire et insuffisance cardiaque.",
  "mechanism": "Mutation de FHOD3, formin cardiaque",
  "genes": [
   "FHOD3"
  ],
  "aliases": [
   "FHOD3",
   "fhod3"
  ]
 },
 {
  "id": "cardiomyopathie-dilatee-1a",
  "name": "Cardiomyopathie dilatée 1A (LMNA)",
  "omim": "115200",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de LMNA, lamines A/C nucléaires",
  "genes": [
   "LMNA"
  ],
  "aliases": [
   "LMNA",
   "lmna"
  ]
 },
 {
  "id": "dcm1c",
  "name": "Cardiomyopathie dilatée 1C (LDB3)",
  "omim": "601493",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de LDB3 (ZASP), protéine du disque Z",
  "genes": [
   "LDB3"
  ],
  "aliases": [
   "LDB3",
   "ldb3"
  ]
 },
 {
  "id": "dcm1d",
  "name": "Cardiomyopathie dilatée 1D (TNNT2)",
  "omim": "601494",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de TNNT2, troponine T cardiaque",
  "genes": [
   "TNNT2"
  ],
  "aliases": [
   "TNNT2",
   "tnnt2"
  ]
 },
 {
  "id": "dcm1e",
  "name": "Cardiomyopathie dilatée 1E (SCN5A)",
  "omim": "601154",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de SCN5A, canal sodique cardiaque Nav1.5",
  "genes": [
   "SCN5A"
  ],
  "aliases": [
   "SCN5A",
   "scn5a"
  ]
 },
 {
  "id": "dcm1g",
  "name": "Cardiomyopathie dilatée 1G (TTN)",
  "omim": "604145",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de TTN, titine (formes tronquantes fréquentes)",
  "genes": [
   "TTN"
  ],
  "aliases": [
   "TTN",
   "ttn"
  ]
 },
 {
  "id": "dcm1i",
  "name": "Cardiomyopathie dilatée 1I (DES)",
  "omim": "604765",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de DES, desmine (filament intermédiaire)",
  "genes": [
   "DES"
  ],
  "aliases": [
   "DES",
   "des"
  ]
 },
 {
  "id": "dcm1j",
  "name": "Cardiomyopathie dilatée 1J (EYA4)",
  "omim": "605362",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation d'EYA4, cofacteur de transcription",
  "genes": [
   "EYA4"
  ],
  "aliases": [
   "EYA4",
   "eya4"
  ]
 },
 {
  "id": "dcm1l",
  "name": "Cardiomyopathie dilatée 1L (SGCD)",
  "omim": "606685",
  "inheritance": "Autosomique récessive",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de SGCD, δ-sarcoglycane",
  "genes": [
   "SGCD"
  ],
  "aliases": [
   "SGCD",
   "sgcd"
  ]
 },
 {
  "id": "dcm1m",
  "name": "Cardiomyopathie dilatée 1M (CSRP3)",
  "omim": "607482",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de CSRP3 (MLP), protéine du sarcomère",
  "genes": [
   "CSRP3"
  ],
  "aliases": [
   "CSRP3",
   "csrp3"
  ]
 },
 {
  "id": "dcm1o",
  "name": "Cardiomyopathie dilatée 1O (ABCC9)",
  "omim": "608569",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation d'ABCC9 (SUR2), sous-unité régulatrice du canal KATP",
  "genes": [
   "ABCC9"
  ],
  "aliases": [
   "ABCC9",
   "abcc9"
  ]
 },
 {
  "id": "dcm1p",
  "name": "Cardiomyopathie dilatée 1P (PLN)",
  "omim": "609909",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de PLN, phospholamban (régulateur de la pompe calcique)",
  "genes": [
   "PLN"
  ],
  "aliases": [
   "PLN",
   "pln"
  ]
 },
 {
  "id": "dcm1s",
  "name": "Cardiomyopathie dilatée 1S (MYH7)",
  "omim": "613426",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de MYH7, chaîne lourde β de la myosine cardiaque",
  "genes": [
   "MYH7"
  ],
  "aliases": [
   "MYH7",
   "myh7"
  ]
 },
 {
  "id": "dcm1u",
  "name": "Cardiomyopathie dilatée 1U (PSEN1)",
  "omim": "613694",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de PSEN1, préséniline 1",
  "genes": [
   "PSEN1"
  ],
  "aliases": [
   "PSEN1",
   "psen1"
  ]
 },
 {
  "id": "dcm1v",
  "name": "Cardiomyopathie dilatée 1V (PSEN2)",
  "omim": "613697",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de PSEN2, préséniline 2",
  "genes": [
   "PSEN2"
  ],
  "aliases": [
   "PSEN2",
   "psen2"
  ]
 },
 {
  "id": "dcm1w",
  "name": "Cardiomyopathie dilatée 1W (VCL)",
  "omim": "611407",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de VCL, vinculine",
  "genes": [
   "VCL"
  ],
  "aliases": [
   "VCL",
   "vcl"
  ]
 },
 {
  "id": "dcm1x",
  "name": "Cardiomyopathie dilatée 1X (FKTN)",
  "omim": "611615",
  "inheritance": "Autosomique récessive",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de FKTN, fukutine",
  "genes": [
   "FKTN"
  ],
  "aliases": [
   "FKTN",
   "fktn"
  ]
 },
 {
  "id": "dcm2a",
  "name": "Cardiomyopathie dilatée 2A (TNNI3)",
  "omim": "611880",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de TNNI3, troponine I cardiaque",
  "genes": [
   "TNNI3"
  ],
  "aliases": [
   "TNNI3",
   "tnni3"
  ]
 },
 {
  "id": "dcm1bb",
  "name": "Cardiomyopathie dilatée 1BB (DSG2)",
  "omim": "612877",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de DSG2, desmogleïne 2",
  "genes": [
   "DSG2"
  ],
  "aliases": [
   "DSG2",
   "dsg2"
  ]
 },
 {
  "id": "dcm1cc",
  "name": "Cardiomyopathie dilatée 1CC (NEXN)",
  "omim": "613122",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de NEXN, nexiline",
  "genes": [
   "NEXN"
  ],
  "aliases": [
   "NEXN",
   "nexn"
  ]
 },
 {
  "id": "dcm1dd",
  "name": "Cardiomyopathie dilatée 1DD (RBM20)",
  "omim": "613172",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de RBM20, régulateur de l'épissage de la titine",
  "genes": [
   "RBM20"
  ],
  "aliases": [
   "RBM20",
   "rbm20"
  ]
 },
 {
  "id": "dcm1hh",
  "name": "Cardiomyopathie dilatée 1HH (BAG3)",
  "omim": "613881",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de BAG3, co-chaperon du sarcomère",
  "genes": [
   "BAG3"
  ],
  "aliases": [
   "BAG3",
   "bag3"
  ]
 },
 {
  "id": "dcm3b",
  "name": "Cardiomyopathie dilatée 3B (DMD)",
  "omim": "302045",
  "inheritance": "Liée à l'X",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de DMD, dystrophine (liée à l'X)",
  "genes": [
   "DMD"
  ],
  "aliases": [
   "DMD",
   "dmd"
  ]
 },
 {
  "id": "dcm1ee",
  "name": "Cardiomyopathie dilatée 1EE (MYH6)",
  "omim": "613252",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de MYH6, chaîne lourde α de la myosine cardiaque",
  "genes": [
   "MYH6"
  ],
  "aliases": [
   "MYH6",
   "myh6"
  ]
 },
 {
  "id": "dcm1ii",
  "name": "Cardiomyopathie dilatée 1II (CRYAB)",
  "omim": "615184",
  "inheritance": "Autosomique dominante",
  "description": "Dilatation et dysfonction systolique du ventricule gauche ; insuffisance cardiaque progressive, troubles du rythme et de la conduction, risque de mort subite.",
  "mechanism": "Mutation de CRYAB, αB-crystalline",
  "genes": [
   "CRYAB"
  ],
  "aliases": [
   "CRYAB",
   "cryab"
  ]
 },
 {
  "id": "arvc5",
  "name": "Cardiomyopathie arythmogène du VD 5 (TMEM43)",
  "omim": "604400",
  "inheritance": "Autosomique dominante",
  "description": "Remplacement fibro-adipeux du myocarde ventriculaire (droit, parfois gauche) : arythmies ventriculaires et mort subite, souvent déclenchées par l'effort.",
  "mechanism": "Mutation de TMEM43, protéine de l'enveloppe nucléaire",
  "genes": [
   "TMEM43"
  ],
  "aliases": [
   "TMEM43",
   "tmem43"
  ]
 },
 {
  "id": "arvc8",
  "name": "Cardiomyopathie arythmogène du VD 8 (DSP)",
  "omim": "607450",
  "inheritance": "Autosomique dominante",
  "description": "Remplacement fibro-adipeux du myocarde ventriculaire (droit, parfois gauche) : arythmies ventriculaires et mort subite, souvent déclenchées par l'effort.",
  "mechanism": "Mutation de DSP, desmoplaquine (formes récessives avec atteinte cutanée)",
  "genes": [
   "DSP"
  ],
  "aliases": [
   "DSP",
   "dsp"
  ]
 },
 {
  "id": "arvc9",
  "name": "Cardiomyopathie arythmogène du VD 9 (PKP2)",
  "omim": "609040",
  "inheritance": "Autosomique dominante",
  "description": "Remplacement fibro-adipeux du myocarde ventriculaire (droit, parfois gauche) : arythmies ventriculaires et mort subite, souvent déclenchées par l'effort.",
  "mechanism": "Mutation de PKP2, plakophiline 2",
  "genes": [
   "PKP2"
  ],
  "aliases": [
   "PKP2",
   "pkp2"
  ]
 },
 {
  "id": "arvc10",
  "name": "Cardiomyopathie arythmogène du VD 10 (DSG2)",
  "omim": "610193",
  "inheritance": "Autosomique dominante",
  "description": "Remplacement fibro-adipeux du myocarde ventriculaire (droit, parfois gauche) : arythmies ventriculaires et mort subite, souvent déclenchées par l'effort.",
  "mechanism": "Mutation de DSG2, desmogleïne 2",
  "genes": [
   "DSG2"
  ],
  "aliases": [
   "DSG2",
   "dsg2"
  ]
 },
 {
  "id": "arvc11",
  "name": "Cardiomyopathie arythmogène du VD 11 (DSC2)",
  "omim": "610476",
  "inheritance": "Autosomique dominante",
  "description": "Remplacement fibro-adipeux du myocarde ventriculaire (droit, parfois gauche) : arythmies ventriculaires et mort subite, souvent déclenchées par l'effort.",
  "mechanism": "Mutation du gène DSC2",
  "genes": [
   "DSC2"
  ],
  "aliases": [
   "DSC2",
   "dsc2"
  ]
 },
 {
  "id": "arvc12",
  "name": "Cardiomyopathie arythmogène du VD 12 (JUP)",
  "omim": "611528",
  "inheritance": "Autosomique dominante",
  "description": "Remplacement fibro-adipeux du myocarde ventriculaire (droit, parfois gauche) : arythmies ventriculaires et mort subite, souvent déclenchées par l'effort.",
  "mechanism": "Mutation de JUP, plakoglobine (desmosome)",
  "genes": [
   "JUP"
  ],
  "aliases": [
   "JUP",
   "jup"
  ]
 },
 {
  "id": "arvc13",
  "name": "Cardiomyopathie arythmogène du VD 13 (CTNNA3)",
  "omim": "615616",
  "inheritance": "Autosomique dominante",
  "description": "Remplacement fibro-adipeux du myocarde ventriculaire (droit, parfois gauche) : arythmies ventriculaires et mort subite, souvent déclenchées par l'effort.",
  "mechanism": "Mutation de CTNNA3, αT-caténine (jonction adhérente)",
  "genes": [
   "CTNNA3"
  ],
  "aliases": [
   "CTNNA3",
   "ctnna3"
  ]
 },
 {
  "id": "arvc14",
  "name": "Cardiomyopathie arythmogène familiale 14 (CDH2)",
  "omim": "618920",
  "inheritance": "Autosomique dominante",
  "description": "Remplacement fibro-adipeux du myocarde ventriculaire (droit, parfois gauche) : arythmies ventriculaires et mort subite, souvent déclenchées par l'effort.",
  "mechanism": "Mutation de CDH2, cadhérine 2 (N-cadhérine)",
  "genes": [
   "CDH2"
  ],
  "aliases": [
   "CDH2",
   "cdh2"
  ]
 },
 {
  "id": "carvajal",
  "name": "Cardiomyopathie arythmogène avec laine et kératoderme (syndrome de Carvajal, DSP)",
  "omim": "605676",
  "inheritance": "Autosomique récessive",
  "description": "Remplacement fibro-adipeux du myocarde ventriculaire (droit, parfois gauche) : arythmies ventriculaires et mort subite, souvent déclenchées par l'effort.",
  "mechanism": "Mutation de DSP, desmoplaquine (formes récessives avec atteinte cutanée)",
  "genes": [
   "DSP"
  ],
  "aliases": [
   "CARVAJAL",
   "carvajal"
  ]
 },
 {
  "id": "lvnc1",
  "name": "Non-compaction du ventricule gauche 1 (DTNA)",
  "omim": "604169",
  "inheritance": "Autosomique dominante",
  "description": "Non-compaction du myocarde ventriculaire gauche (trabéculations profondes, couche spongieuse épaisse) : insuffisance cardiaque, arythmies, événements thromboemboliques.",
  "mechanism": "Mutation de DTNA, α-dystrobrévine",
  "genes": [
   "DTNA"
  ],
  "aliases": [
   "DTNA",
   "dtna"
  ]
 },
 {
  "id": "lvnc7",
  "name": "Non-compaction du ventricule gauche 7 (MIB1)",
  "omim": "615092",
  "inheritance": "Autosomique dominante",
  "description": "Non-compaction du myocarde ventriculaire gauche (trabéculations profondes, couche spongieuse épaisse) : insuffisance cardiaque, arythmies, événements thromboemboliques.",
  "mechanism": "Mutation de MIB1, ubiquitine ligase E3",
  "genes": [
   "MIB1"
  ],
  "aliases": [
   "MIB1",
   "mib1"
  ]
 },
 {
  "id": "lvnc8",
  "name": "Non-compaction du ventricule gauche 8 (PRDM16)",
  "omim": "615373",
  "inheritance": "Autosomique dominante",
  "description": "Non-compaction du myocarde ventriculaire gauche (trabéculations profondes, couche spongieuse épaisse) : insuffisance cardiaque, arythmies, événements thromboemboliques.",
  "mechanism": "Mutation de PRDM16, facteur de transcription",
  "genes": [
   "PRDM16"
  ],
  "aliases": [
   "PRDM16",
   "prdm16"
  ]
 },
 {
  "id": "lvnc10",
  "name": "Non-compaction du ventricule gauche 10 (MYBPC3)",
  "omim": "615396",
  "inheritance": "Autosomique dominante",
  "description": "Non-compaction du myocarde ventriculaire gauche (trabéculations profondes, couche spongieuse épaisse) : insuffisance cardiaque, arythmies, événements thromboemboliques.",
  "mechanism": "Mutation de MYBPC3, protéine C liant la myosine cardiaque",
  "genes": [
   "MYBPC3"
  ],
  "aliases": [
   "MYBPC3",
   "mybpc3"
  ]
 },
 {
  "id": "rcm1",
  "name": "Cardiomyopathie restrictive familiale 1 (TNNI3)",
  "omim": "115210",
  "inheritance": "Autosomique dominante",
  "description": "Rigidité du myocarde avec dilatation bi-atriale et fonction systolique préservée : insuffisance cardiaque restrictive, troubles du rythme et de la conduction.",
  "mechanism": "Mutation de TNNI3, troponine I cardiaque",
  "genes": [
   "TNNI3"
  ],
  "aliases": [
   "TNNI3",
   "tnni3"
  ]
 },
 {
  "id": "rcm3",
  "name": "Cardiomyopathie restrictive familiale 3 (TNNT2)",
  "omim": "612422",
  "inheritance": "Autosomique dominante",
  "description": "Rigidité du myocarde avec dilatation bi-atriale et fonction systolique préservée : insuffisance cardiaque restrictive, troubles du rythme et de la conduction.",
  "mechanism": "Mutation de TNNT2, troponine T cardiaque",
  "genes": [
   "TNNT2"
  ],
  "aliases": [
   "TNNT2",
   "tnnt2"
  ]
 },
 {
  "id": "rcm6",
  "name": "Cardiomyopathie restrictive familiale 6 (KIF20A)",
  "omim": "619433",
  "inheritance": "Autosomique dominante",
  "description": "Rigidité du myocarde avec dilatation bi-atriale et fonction systolique préservée : insuffisance cardiaque restrictive, troubles du rythme et de la conduction.",
  "mechanism": "Mutation de KIF20A, kinésine",
  "genes": [
   "KIF20A"
  ],
  "aliases": [
   "KIF20A",
   "kif20a"
  ]
 },
 {
  "id": "danon",
  "name": "Maladie de Danon (LAMP2)",
  "omim": "300257",
  "inheritance": "Liée à l'X",
  "description": "Maladie de surcharge lysosomale liée à LAMP2 : triade myopathie + cardiomyopathie hypertrophique + déficit intellectuel, liée à l'X.",
  "mechanism": "Mutation de LAMP2, protéine membranaire lysosomale (liée à l'X)",
  "genes": [
   "LAMP2"
  ],
  "aliases": [
   "LAMP2",
   "lamp2"
  ]
 },
 {
  "id": "fabry",
  "name": "Maladie de Fabry (GLA)",
  "omim": "301500",
  "inheritance": "Liée à l'X",
  "description": "Maladie de surcharge lysosomale liée à l'α-galactosidase A : acroparesthésies, angiokératomes, atteinte rénale, cardiaque (hypertrophie du VG) et cérébrovasculaire, liée à l'X.",
  "mechanism": "Mutation de GLA, α-galactosidase A lysosomale (liée à l'X)",
  "genes": [
   "GLA"
  ],
  "aliases": [
   "GLA",
   "gla"
  ]
 }
];
