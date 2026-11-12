# LOCUS — Atlas du génome humain

Application web statique, sans dépendance, destinée aux généticiens : elle met en relation les gènes du génome humain avec leurs protéines, les types cellulaires dans lesquels ils sont exprimés et les pathologies associées aux mutations.

## Fonctionnalités

- Page d'accueil avec recherche unifiée : nom de gène, nom de protéine ou nom de maladie (alias FR/EN, codes UniProt/OMIM), suggestions en direct, navigation clavier.
- 32 gènes et 44 pathologies OMIM en données embarquées (`data.js`).
- Fiches gène : protéine (UniProt, taille, fonction), expression par type cellulaire, pathologies associées (OMIM, hérédité, mécanisme).
- Fiches maladie : présentation clinique, OMIM, gènes associés cliquables.
- Routage par hash (`#/gene/TP53`, `#/disease/mucoviscidose`), aucun serveur requis.

## Utilisation

Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```bash
python3 -m http.server 8000
```

## Structure

- `index.html` — structure
- `styles.css` — design system épuré
- `data.js` — données gènes / protéines / expression / pathologies
- `app.js` — recherche, routage, rendu

Sources de référence : HGNC, NCBI Gene, UniProt, GTEx, OMIM. Contenu pédagogique de démonstration.
