const DATA_REFERENCES = {
  "TP53": {
    gene: [
      { title: "T antigen is bound to a host protein in SV40 transformed cells (Lane & Crawford)", journal: "Nature", year: 1979, doi: "10.1038/278261a0" }
    ]
  },
  "BRCA1": {
    gene: [
      { title: "A strong candidate for the breast and ovarian cancer susceptibility gene BRCA1 (Miki et al.)", journal: "Science", year: 1994, doi: "10.1126/science.7545954" }
    ]
  },
  "BRCA2": {
    gene: [
      { title: "Identification of the breast cancer susceptibility gene BRCA2 (Wooster et al.)", journal: "Nature", year: 1995, doi: "10.1038/378789a0" }
    ]
  },
  "CFTR": {
    gene: [
      { title: "Identification of the cystic fibrosis gene: cloning and characterization of complementary DNA (Riordan et al.)", journal: "Science", year: 1989, doi: "10.1126/science.2475911" },
      { title: "Identification of the cystic fibrosis gene: chromosome walking and jumping (Rommens et al.)", journal: "Science", year: 1989, doi: "10.1126/science.2772657" }
    ],
    diseases: {
      "mucoviscidose": [
        { title: "Identification of the cystic fibrosis gene: cloning and characterization of complementary DNA (Riordan et al.)", journal: "Science", year: 1989, doi: "10.1126/science.2475911" }
      ]
    }
  },
  "HTT": {
    gene: [
      { title: "A polymorphic DNA marker genetically linked to Huntington's disease (Gusella et al.)", journal: "Nature", year: 1983, doi: "10.1038/306234a0" }
    ],
    diseases: {
      "maladie-de-huntington": [
        { title: "A novel gene containing a trinucleotide repeat that is expanded and unstable on Huntington's disease chromosomes (Huntington's Disease Collaborative Research Group)", journal: "Cell", year: 1993, doi: "10.1016/0092-8674(93)90585-E" }
      ]
    }
  },
  "HBB": {
    gene: [
      { title: "Gene mutations in human haemoglobin: the chemical difference between normal human haemoglobin and haemoglobin S (Ingram)", journal: "Nature", year: 1957, doi: "10.1038/180326a0" }
    ],
    diseases: {
      "drepanocytose": [
        { title: "Gene mutations in human haemoglobin: the chemical difference between normal human haemoglobin and haemoglobin S (Ingram)", journal: "Nature", year: 1957, doi: "10.1038/180326a0" }
      ]
    }
  },
  "DMD": {
    gene: [
      { title: "Complete dystrophin cDNA sequence: insights into the molecular basis of Duchenne/Becker muscular dystrophy (Koenig et al.)", journal: "Cell", year: 1987, doi: "10.1016/0092-8674(87)90504-6" }
    ]
  },
  "F9": {
    gene: [
      { title: "Structure and nucleotide sequence of the gene encoding human factor IX (Kurachi et al.)", journal: "Biochemistry", year: 1985, doi: "10.1021/bi00335a049" }
    ]
  },
  "F8": {
    gene: [
      { title: "The gene for human factor VIII (antihaemophilic factor A) (Wood et al.)", journal: "Nature", year: 1984, doi: "10.1038/312330a0" }
    ]
  },
  "NF1": {
    gene: [
      { title: "cDNA cloning provides evidence that the neurofibromatosis type 1 gene product is a GTPase-activating protein (Cawthon et al.)", journal: "Cell", year: 1990, doi: "10.1016/0092-8674(90)90024-9" }
    ]
  },
  "PTEN": {
    gene: [
      { title: "PTEN, a putative protein tyrosine phosphatase gene mutated in human brain, breast, and prostate cancer (Li et al.)", journal: "Science", year: 1997, doi: "10.1126/science.275.5308.1943" }
    ]
  },
  "APC": {
    gene: [
      { title: "Mutations of chromosome 5q21 genes in FAP patients (Nishisho et al.)", journal: "Science", year: 1991, doi: "10.1126/science.1651563" }
    ]
  },
  "MLH1": {
    gene: [
      { title: "Mutation in the DNA mismatch repair gene homologue hMLH1 is associated with hereditary non-polyposis colon cancer (Bronner et al.)", journal: "Nature", year: 1994, doi: "10.1038/368258a0" }
    ]
  },
  "MSH2": {
    gene: [
      { title: "The human mutS homologue hMSH2 is responsible for hereditary non-polyposis colorectal cancer (Fishel et al.)", journal: "Cell", year: 1993, doi: "10.1016/0092-8674(93)90546-3" }
    ]
  },
  "VHL": {
    gene: [
      { title: "Identification of the von Hippel-Lindau tumour-suppressor gene (Latif et al.)", journal: "Science", year: 1993, doi: "10.1126/science.8493574" }
    ]
  },
  "RET": {
    gene: [
      { title: "Germ-line mutations of the RET proto-oncogene in multiple endocrine neoplasia type 2A (Mulligan et al.)", journal: "Nature", year: 1993, doi: "10.1038/363458a0" }
    ]
  },
  "EGFR": {
    gene: [
      { title: "Human epidermal growth factor receptor cDNA sequence and aberrant activation of the amplified gene in A431 epidermoid carcinoma cells (Ullrich et al.)", journal: "Nature", year: 1984, doi: "10.1038/309418a0" }
    ]
  },
  "KRAS": {
    gene: [
      { title: "Mechanism of activation of a human oncogene (Tabin et al., gène ras)", journal: "Nature", year: 1982, doi: "10.1038/300143a0" }
    ]
  },
  "APOE": {
    gene: [
      { title: "Gene dose of apolipoprotein E type 4 allele and the risk of Alzheimer's disease in late-onset families (Corder et al.)", journal: "Science", year: 1993, doi: "10.1126/science.8346443" }
    ]
  },
  "INS": {
    gene: [
      { title: "Sequence of the human insulin gene (Bell et al.)", journal: "Nature", year: 1980, doi: "10.1038/282525a0" }
    ]
  },
  "SOD1": {
    gene: [
      { title: "Mutations in Cu/Zn superoxide dismutase gene are associated with familial amyotrophic lateral sclerosis (Rosen et al.)", journal: "Nature", year: 1993, doi: "10.1038/362059a0" }
    ]
  },
  "FMR1": {
    gene: [
      { title: "Identification of a gene (FMR-1) containing a CGG repeat coincident with a breakpoint cluster region exhibiting length variation in Fragile X syndrome (Verkerk et al.)", journal: "Cell", year: 1991, doi: "10.1016/0092-8674(91)90397-h" }
    ]
  },
  "MECP2": {
    gene: [
      { title: "Rett syndrome is caused by mutations in X-linked MECP2, encoding methyl-CpG-binding protein 2 (Amir et al.)", journal: "Nature Genetics", year: 1999, doi: "10.1038/13810" }
    ]
  },
  "LMNA": {
    gene: [
      { title: "Recurrent de novo point mutations in lamin A cause Hutchinson-Gilford progeria syndrome (Eriksson et al.)", journal: "Nature", year: 2003, doi: "10.1038/nature01629" }
    ]
  },
  "GBA": {
    gene: [
      { title: "Analysis and classification of 304 mutant alleles in patients with type 1 and type 3 Gaucher disease (Koprivica et al.)", journal: "Am J Hum Genet", year: 2000, doi: "10.1086/302925" }
    ]
  },
  "LRRK2": {
    gene: [
      { title: "Mutations in LRRK2 cause autosomal-dominant parkinsonism with pleomorphic pathology (Zimprich et al.)", journal: "Neuron", year: 2004, doi: "10.1016/j.neuron.2004.11.005" }
    ]
  },
  "SNCA": {
    gene: [
      { title: "Mutation in the alpha-synuclein gene identified in families with Parkinson's disease (Polymeropoulos et al.)", journal: "Science", year: 1997, doi: "10.1126/science.276.5321.2045" }
    ]
  },
  "APP": {
    gene: [
      { title: "The precursor protein for Alzheimer's disease A4 amyloid is encoded by a gene on chromosome 21 (Kang et al.)", journal: "Nature", year: 1987, doi: "10.1038/325733a0" }
    ]
  },
  "PSEN1": {
    gene: [
      { title: "A dominant gene for Alzheimer's disease on chromosome 14 (Sherrington et al.)", journal: "Nature", year: 1995, doi: "10.1038/375754a0" }
    ]
  },
  "PSEN2": {
    gene: [
      { title: "A second gene for autosomal dominant Alzheimer's disease on chromosome 1 (Levy-Lahad et al.)", journal: "Science", year: 1995, doi: "10.1126/science.7638622" }
    ]
  },
  "SMN1": {
    gene: [
      { title: "Identification and characterization of a spinal muscular atrophy-determining gene (Lefebvre et al.)", journal: "Cell", year: 1995, doi: "10.1016/0092-8674(95)90460-3" }
    ]
  },
  "RB1": {
    gene: [
      { title: "A human DNA segment with properties of the gene that predisposes to retinoblastoma and osteosarcoma (Friend et al.)", journal: "Nature", year: 1986, doi: "10.1038/323643a0" }
    ]
  },
  "MYC": {
    gene: [
      { title: "Human c-myc onc gene is located on the region of chromosome 8 that is translocated in Burkitt lymphoma (Dalla-Favera et al.)", journal: "Nature", year: 1983, doi: "10.1038/306799a0" }
    ]
  },
  "ATM": {
    gene: [
      { title: "A single ataxia telangiectasia gene with a product similar to PI-3 kinase (Savitsky et al.)", journal: "Science", year: 1995, doi: "10.1126/science.7792600" }
    ]
  },
  "CHEK2": {
    gene: [
      { title: "Low-penetrance susceptibility to breast cancer due to CHEK2(*)1100delC in noncarriers of BRCA1 or BRCA2 mutations (Meijers-Heijboer et al.)", journal: "Nat Genet", year: 2002, doi: "10.1038/ng879" }
    ]
  },
  "PALB2": {
    gene: [
      { title: "PALB2, which encodes a BRCA2-interacting protein, is a breast cancer susceptibility gene (Rahman et al.)", journal: "Nat Genet", year: 2007, doi: "10.1038/ng1959" }
    ]
  },
  "BRIP1": {
    gene: [
      { title: "Truncating mutations in the Fanconi anemia J gene BRIP1 are low-penetrance breast cancer susceptibility alleles (Seal et al.)", journal: "Nat Genet", year: 2006, doi: "10.1038/ng1902" }
    ]
  },
  "RAD51C": {
    gene: [
      { title: "Germline mutations in breast and ovarian cancer pedigrees establish RAD51C as a human cancer susceptibility gene (Meindl et al.)", journal: "Nat Genet", year: 2010, doi: "10.1038/ng.569" }
    ]
  },
  "FBN1": {
    gene: [
      { title: "Marfan syndrome caused by a recurrent de novo missense mutation in the fibrillin gene (Dietz et al.)", journal: "Nature", year: 1991, doi: "10.1038/352337a0" }
    ]
  },
  "LDLR": {
    gene: [
      { title: "The LDL receptor gene: a mosaic of exons shared with different proteins (Südhof, Goldstein & Brown)", journal: "Science", year: 1985, doi: "10.1126/science.2988123" }
    ]
  },
  "PCSK9": {
    gene: [
      { title: "Mutations in PCSK9 cause autosomal dominant hypercholesterolemia (Abifadel et al.)", journal: "Nat Genet", year: 2003, doi: "10.1038/ng1161" }
    ]
  },
  "SCN5A": {
    gene: [
      { title: "Cardiac sodium channel mutations in patients with long QT syndrome, an inherited cardiac arrhythmia (Wang et al.)", journal: "Hum Mol Genet", year: 1995, doi: "10.1093/hmg/4.9.1603" }
    ]
  },
  "PRKN": {
    gene: [
      { title: "Mutations in the parkin gene cause autosomal recessive juvenile parkinsonism (Kitada et al.)", journal: "Nature", year: 1998, doi: "10.1038/33416" }
    ]
  },
  "PINK1": {
    gene: [
      { title: "Hereditary early-onset Parkinson's disease caused by mutations in PINK1 (Valente et al.)", journal: "Science", year: 2004, doi: "10.1126/science.1096284" }
    ]
  },
  "PARK7": {
    gene: [
      { title: "Mutations in the DJ-1 gene associated with autosomal recessive early-onset parkinsonism (Bonifati et al.)", journal: "Science", year: 2003, doi: "10.1126/science.1077209" }
    ]
  },
  "ATP7B": {
    gene: [
      { title: "The Wilson disease gene is a putative copper transporting P-type ATPase similar to the Menkes gene (Bull et al.)", journal: "Nat Genet", year: 1993, doi: "10.1038/ng1293-327" }
    ]
  },
  "PAH": {
    gene: [
      { title: "Cloned human phenylalanine hydroxylase gene allows prenatal diagnosis and carrier detection of classical phenylketonuria (Woo et al.)", journal: "Nature", year: 1983, doi: "10.1038/306151a0" }
    ]
  },
  "HFE": {
    gene: [
      { title: "A novel MHC class I-like gene is mutated in patients with hereditary haemochromatosis (Feder et al.)", journal: "Nat Genet", year: 1996, doi: "10.1038/ng0896-399" }
    ]
  },
  "IL2RG": {
    gene: [
      { title: "The interleukin-2 receptor gamma chain maps to Xq13.1 and is mutated in X-linked severe combined immunodeficiency, SCIDX1 (Puck et al.)", journal: "Hum Mol Genet", year: 1993, doi: "10.1093/hmg/2.8.1099" }
    ]
  },
  "BTK": {
    gene: [
      { title: "Deficient expression of a B cell cytoplasmic tyrosine kinase in human X-linked agammaglobulinemia (Tsukada et al.)", journal: "Cell", year: 1993, doi: "10.1016/0092-8674(93)90667-f" }
    ]
  },
  "RAG1": {
    gene: [
      { title: "The V(D)J recombination activating gene, RAG-1 (Schatz, Oettinger & Baltimore)", journal: "Cell", year: 1989, doi: "10.1016/0092-8674(89)90760-5" }
    ]
  },
  "RHO": {
    gene: [
      { title: "A point mutation of the rhodopsin gene in one form of retinitis pigmentosa (Dryja et al.)", journal: "Nature", year: 1990, doi: "10.1038/343364a0" }
    ]
  },
  "PKD1": {
    gene: [
      { title: "The polycystic kidney disease 1 gene encodes a 14 kb transcript and lies within a duplicated region on chromosome 16 (European Polycystic Kidney Disease Consortium)", journal: "Cell", year: 1994, doi: "10.1016/0092-8674(94)90137-6" }
    ]
  },
  "MEN1": {
    gene: [
      { title: "Positional cloning of the gene for multiple endocrine neoplasia-type 1 (Chandrasekharappa et al.)", journal: "Science", year: 1997, doi: "10.1126/science.276.5311.404" }
    ]
  },
  "NF2": {
    gene: [
      { title: "A novel moesin-, ezrin-, radixin-like gene is a candidate for the neurofibromatosis 2 tumor suppressor (Trofatter et al.)", journal: "Cell", year: 1993, doi: "10.1016/0092-8674(93)90406-g" }
    ]
  },
  "ATXN3": {
    gene: [
      { title: "CAG expansions in a novel gene for Machado-Joseph disease at chromosome 14q32.1 (Kawaguchi et al.)", journal: "Nat Genet", year: 1994, doi: "10.1038/ng1194-221" }
    ]
  },
  "GJB2": {
    gene: [
      { title: "Connexin 26 mutations in hereditary non-syndromic sensorineural deafness (Kelsell et al.)", journal: "Nature", year: 1997, doi: "10.1038/387080a0" }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = DATA_REFERENCES;
}
