// Catalogue de démonstration — fournitures et livres scolaires, prix en FCFA.
// Inspiré du fonctionnement d'une librairie scolaire en ligne : catégories de
// produits, et listes de fournitures complètes par classe.

export function formatCFA(amount) {
  return `${new Intl.NumberFormat("fr-FR").format(Math.round(amount))} CFA`;
}

// cycle "Primaire" → pages traitées avec un univers coloré et ludique.
// cycle "Secondaire" → pages traitées avec un univers plus sobre, pour ados.
export const classes = [
  { id: "sil", label: "SIL", cycle: "Primaire", emoji: "🖍️" },
  { id: "cp", label: "CP", cycle: "Primaire", emoji: "🎒" },
  { id: "ce1", label: "CE1", cycle: "Primaire", emoji: "✏️" },
  { id: "ce2", label: "CE2", cycle: "Primaire", emoji: "📏" },
  { id: "cm1", label: "CM1", cycle: "Primaire", emoji: "📘" },
  { id: "cm2", label: "CM2", cycle: "Primaire", emoji: "🚀" },
  { id: "6eme", label: "6ème", cycle: "Secondaire", emoji: "📚" },
  { id: "5eme", label: "5ème", cycle: "Secondaire", emoji: "📚" },
  { id: "4eme", label: "4ème", cycle: "Secondaire", emoji: "📚" },
  { id: "3eme", label: "3ème", cycle: "Secondaire", emoji: "📚" },
  { id: "2nd", label: "2nde", cycle: "Secondaire", emoji: "📚" },
  { id: "1ere", label: "1ère", cycle: "Secondaire", emoji: "📚" },
  { id: "tle", label: "Tle", cycle: "Secondaire", emoji: "📚" },
];

export const categories = [
  "Tous",
  "Cahiers",
  "Livres scolaires",
  "Écriture",
  "Coloriage",
  "Bureautique",
  "Sacs",
  "Options",
];

export const products = [
  // --- Cahiers ---
  { id: "cahier-192", name: "Cahier 192 pages, grand format", category: "Cahiers", brand: "Générique", price: 650, cover: { bg: "#2f5a52", fg: "#f2e9d8" } },
  { id: "cahier-100", name: "Cahier 100 pages, petit format", category: "Cahiers", brand: "Générique", price: 450, cover: { bg: "#3b5266", fg: "#f2e9d8" } },
  { id: "cahier-dessin", name: "Cahier de dessin", category: "Cahiers", brand: "Générique", price: 900, cover: { bg: "#7a2e3b", fg: "#c69a3e" } },
  { id: "cahier-travaux-pratiques", name: "Cahier de travaux pratiques", category: "Cahiers", brand: "Générique", price: 700, cover: { bg: "#233b4a", fg: "#f2e9d8" } },

  // --- Écriture : stylos, crayons, gommes, règles, colles ---
  { id: "stylo-bic-bleu", name: "Stylo bille Cristal, bleu", category: "Écriture", brand: "Bic", price: 150, cover: { bg: "#1e2e3b", fg: "#c69a3e" } },
  { id: "stylo-bic-rouge", name: "Stylo bille Cristal, rouge", category: "Écriture", brand: "Bic", price: 150, cover: { bg: "#7a2e3b", fg: "#f2e9d8" } },
  { id: "stylo-bic-vert", name: "Stylo bille Cristal, vert", category: "Écriture", brand: "Bic", price: 150, cover: { bg: "#2f5a52", fg: "#f2e9d8" } },
  { id: "stylo-bic-noir", name: "Stylo bille Cristal, noir", category: "Écriture", brand: "Bic", price: 150, cover: { bg: "#16212c", fg: "#c69a3e" } },
  { id: "stylo-plume-maped", name: "Stylo plume débutant", category: "Écriture", brand: "Maped", price: 1800, cover: { bg: "#233b4a", fg: "#c69a3e" } },
  { id: "crayon-conte", name: "Crayon à papier HB", category: "Écriture", brand: "Conté", price: 120, cover: { bg: "#8a6a2f", fg: "#f2e9d8" } },
  { id: "crayon-staedtler", name: "Crayon à papier 2B, boîte de 12", category: "Écriture", brand: "Staedtler", price: 1400, cover: { bg: "#16212c", fg: "#f2e9d8" } },
  { id: "gomme-maped", name: "Gomme blanche douce", category: "Écriture", brand: "Maped", price: 150, cover: { bg: "#c69a3e", fg: "#16212c" } },
  { id: "gomme-alpha", name: "Gomme blanche, lot de 2", category: "Écriture", brand: "Alpha Stationery CM", price: 150, cover: { bg: "#3b5266", fg: "#f2e9d8" } },
  { id: "taille-crayon", name: "Taille-crayon avec réservoir", category: "Écriture", brand: "Maped", price: 200, cover: { bg: "#233b4a", fg: "#8fbf9f" } },
  { id: "regle-30-maped", name: "Règle graduée 30 cm", category: "Écriture", brand: "Maped", price: 250, cover: { bg: "#16212c", fg: "#f2e9d8" } },
  { id: "regle-20-alpha", name: "Règle graduée 20 cm, souple", category: "Écriture", brand: "Alpha Stationery CM", price: 150, cover: { bg: "#5b2a3a", fg: "#c69a3e" } },
  { id: "colle-baton", name: "Bâton de colle, 21 g", category: "Écriture", brand: "Cléopâtre", price: 500, cover: { bg: "#2f5a52", fg: "#f2e9d8" } },
  { id: "colle-liquide", name: "Colle liquide, 60 ml", category: "Écriture", brand: "Cléopâtre", price: 650, cover: { bg: "#7a2e3b", fg: "#c69a3e" } },
  { id: "pate-a-modeler", name: "Pâte à modeler, lot de 6 couleurs", category: "Écriture", brand: "Jovi", price: 1200, cover: { bg: "#c69a3e", fg: "#5b2a3a" } },

  // --- Coloriage : feutres, crayons de couleur, surligneurs ---
  { id: "feutres-maped", name: "Feutres de coloriage, 12 pièces", category: "Coloriage", brand: "Maped Color'Peps", price: 1500, cover: { bg: "#7a2e3b", fg: "#f2e9d8" } },
  { id: "feutres-alpha", name: "Feutres de coloriage, 10 pièces", category: "Coloriage", brand: "Alpha Stationery CM", price: 1000, cover: { bg: "#2f5a52", fg: "#c69a3e" } },
  { id: "boite-couleurs-maped", name: "Crayons de couleur, 12 pièces", category: "Coloriage", brand: "Maped Color'Peps", price: 1300, cover: { bg: "#2f5a52", fg: "#f2e9d8" } },
  { id: "boite-couleurs-alpha", name: "Crayons de couleur, 12 pièces", category: "Coloriage", brand: "Alpha Stationery CM", price: 900, cover: { bg: "#8a6a2f", fg: "#f2e9d8" } },
  { id: "surligneur-bic", name: "Surligneurs fluo, lot de 4", category: "Coloriage", brand: "Bic", price: 1100, cover: { bg: "#c69a3e", fg: "#16212c" } },
  { id: "surligneur-stabilo", name: "Surligneur Boss Original", category: "Coloriage", brand: "Stabilo", price: 900, cover: { bg: "#233b4a", fg: "#c69a3e" } },

  // --- Bureautique ---
  { id: "equerre-rapporteur", name: "Équerre et rapporteur", category: "Bureautique", brand: "Maped", price: 600, cover: { bg: "#233b4a", fg: "#c69a3e" } },
  { id: "compas", name: "Compas de précision", category: "Bureautique", brand: "Maped", price: 1500, cover: { bg: "#16212c", fg: "#8fbf9f" } },
  { id: "boite-academique", name: "Boîte académique, 8 pièces", category: "Bureautique", brand: "Maped", price: 2800, cover: { bg: "#5b2a3a", fg: "#f2e9d8" } },
  { id: "calculatrice", name: "Calculatrice scientifique", category: "Bureautique", brand: "Casio", price: 8500, cover: { bg: "#1e2e3b", fg: "#f2e9d8" } },
  { id: "ardoise", name: "Ardoise blanche + feutre effaçable", category: "Bureautique", brand: "Alpha Stationery CM", price: 1800, cover: { bg: "#3b5266", fg: "#c69a3e" } },
  { id: "trousse", name: "Trousse garnie", category: "Bureautique", brand: "Alpha Stationery CM", price: 2500, cover: { bg: "#5b2a3a", fg: "#c69a3e" } },
  { id: "agenda-scolaire", name: "Agenda scolaire", category: "Bureautique", brand: "Alpha Stationery CM", price: 1900, cover: { bg: "#7a2e3b", fg: "#f2e9d8" } },

  // --- Sacs ---
  { id: "sac-a-dos", name: "Sac à dos scolaire renforcé", category: "Sacs", brand: "Générique", price: 9500, cover: { bg: "#7a2e3b", fg: "#f2e9d8" } },
  { id: "sac-roulettes", name: "Sac à roulettes", category: "Sacs", brand: "Générique", price: 15500, cover: { bg: "#1e2e3b", fg: "#c69a3e" } },
  { id: "sac-a-dos-ado", name: "Sac à dos format collège/lycée", category: "Sacs", brand: "Générique", price: 12500, cover: { bg: "#16212c", fg: "#8fbf9f" } },

  // --- Livres scolaires (par classe) ---
  { id: "livre-images-sil", name: "Mon premier livre d'images — SIL", category: "Livres scolaires", brand: "Éditions Hachette", price: 2400, cover: { bg: "#c69a3e", fg: "#16212c" } },
  { id: "livre-lecture-cp", name: "Mon livre de lecture — CP", category: "Livres scolaires", brand: "Éditions Hachette", price: 3200, cover: { bg: "#233b4a", fg: "#f2e9d8" } },
  { id: "livre-calcul-cp", name: "Cahier de calcul — CP", category: "Livres scolaires", brand: "Éditions Hachette", price: 2600, cover: { bg: "#8a6a2f", fg: "#f2e9d8" } },
  { id: "livre-lecture-ce1", name: "Livre de lecture — CE1", category: "Livres scolaires", brand: "Éditions Hachette", price: 3400, cover: { bg: "#2f5a52", fg: "#f2e9d8" } },
  { id: "livre-maths-ce1", name: "Manuel de mathématiques — CE1", category: "Livres scolaires", brand: "Éditions Hachette", price: 3900, cover: { bg: "#16212c", fg: "#c69a3e" } },
  { id: "livre-francais-ce2", name: "Manuel de français — CE2", category: "Livres scolaires", brand: "Éditions CEPER", price: 3600, cover: { bg: "#3b5266", fg: "#f2e9d8" } },
  { id: "livre-maths-ce2", name: "Manuel de mathématiques — CE2", category: "Livres scolaires", brand: "Éditions CEPER", price: 3900, cover: { bg: "#5b2a3a", fg: "#c69a3e" } },
  { id: "livre-francais-cm1", name: "Manuel de français — CM1", category: "Livres scolaires", brand: "Éditions CEPER", price: 4100, cover: { bg: "#233b4a", fg: "#8fbf9f" } },
  { id: "livre-maths-cm1", name: "Manuel de mathématiques — CM1", category: "Livres scolaires", brand: "Éditions CEPER", price: 4100, cover: { bg: "#7a2e3b", fg: "#f2e9d8" } },
  { id: "livre-francais-cm2", name: "Manuel de français — CM2", category: "Livres scolaires", brand: "Éditions CEPER", price: 4300, cover: { bg: "#2f5a52", fg: "#c69a3e" } },
  { id: "livre-maths-cm2", name: "Manuel de mathématiques — CM2", category: "Livres scolaires", brand: "Éditions CEPER", price: 4300, cover: { bg: "#16212c", fg: "#f2e9d8" } },
  { id: "livre-histoire-6eme", name: "Histoire-Géographie — 6ème", category: "Livres scolaires", brand: "Éditions EDICEF", price: 5200, cover: { bg: "#8a6a2f", fg: "#f2e9d8" } },
  { id: "livre-maths-6eme", name: "Mathématiques — 6ème", category: "Livres scolaires", brand: "Éditions EDICEF", price: 5400, cover: { bg: "#1e2e3b", fg: "#c69a3e" } },
  { id: "livre-francais-5eme", name: "Français — 5ème", category: "Livres scolaires", brand: "Éditions EDICEF", price: 5300, cover: { bg: "#233b4a", fg: "#f2e9d8" } },
  { id: "livre-maths-5eme", name: "Mathématiques — 5ème", category: "Livres scolaires", brand: "Éditions EDICEF", price: 5500, cover: { bg: "#5b2a3a", fg: "#c69a3e" } },
  { id: "livre-francais-4eme", name: "Français — 4ème", category: "Livres scolaires", brand: "Éditions EDICEF", price: 5400, cover: { bg: "#16212c", fg: "#f2e9d8" } },
  { id: "livre-maths-4eme", name: "Mathématiques — 4ème", category: "Livres scolaires", brand: "Éditions EDICEF", price: 5600, cover: { bg: "#2f5a52", fg: "#c69a3e" } },
  { id: "livre-francais-3eme", name: "Français — 3ème (Brevet)", category: "Livres scolaires", brand: "Éditions EDICEF", price: 5700, cover: { bg: "#7a2e3b", fg: "#f2e9d8" } },
  { id: "livre-maths-3eme", name: "Mathématiques — 3ème (Brevet)", category: "Livres scolaires", brand: "Éditions EDICEF", price: 5900, cover: { bg: "#233b4a", fg: "#8fbf9f" } },
  { id: "livre-litterature-2nd", name: "Littérature — 2nde", category: "Livres scolaires", brand: "Éditions Belin", price: 6100, cover: { bg: "#16212c", fg: "#c69a3e" } },
  { id: "livre-maths-2nd", name: "Mathématiques — 2nde", category: "Livres scolaires", brand: "Éditions Belin", price: 6300, cover: { bg: "#3b5266", fg: "#f2e9d8" } },
  { id: "livre-histoire-1ere", name: "Histoire-Géographie — 1ère", category: "Livres scolaires", brand: "Éditions Belin", price: 6400, cover: { bg: "#5b2a3a", fg: "#c69a3e" } },
  { id: "livre-maths-1ere", name: "Mathématiques — 1ère", category: "Livres scolaires", brand: "Éditions Belin", price: 6600, cover: { bg: "#8a6a2f", fg: "#f2e9d8" } },
  { id: "livre-philo-tle", name: "Philosophie — Terminale", category: "Livres scolaires", brand: "Éditions Belin", price: 6700, cover: { bg: "#16212c", fg: "#f2e9d8" } },
  { id: "livre-maths-tle", name: "Mathématiques — Terminale", category: "Livres scolaires", brand: "Éditions Belin", price: 6900, cover: { bg: "#1e2e3b", fg: "#c69a3e" } },

  // --- Options (services complémentaires) ---
  { id: "protege-cahier", name: "Protège-cahier / protège-livre — Pembo Sarl", category: "Options", brand: "Pembo Sarl", price: 150, unit: "par unité", cover: { bg: "#c69a3e", fg: "#16212c" } },
  { id: "sticker-prenom", name: "Planche de stickers prénom personnalisés", category: "Options", brand: "OnlineBookshop", price: 1500, unit: "par planche", cover: { bg: "#7a2e3b", fg: "#c69a3e" } },

  // --- Services (lignes de la commande, non filtrables dans le catalogue) ---
  { id: "service-main-oeuvre", name: "Préparation de la liste (main d'œuvre)", category: "Service", brand: "OnlineBookshop", price: 1500, hidden: true, cover: { bg: "#16212c", fg: "#c69a3e" } },
  { id: "service-livraison", name: "Livraison à domicile", category: "Service", brand: "OnlineBookshop", price: 3000, hidden: true, cover: { bg: "#1e2e3b", fg: "#f2e9d8" } },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

// Liste de fournitures requises par classe : identifiant produit + quantité.
export const supplyLists = {
  sil: [
    { productId: "livre-images-sil", quantity: 1 },
    { productId: "cahier-dessin", quantity: 2 },
    { productId: "pate-a-modeler", quantity: 1 },
    { productId: "feutres-alpha", quantity: 1 },
    { productId: "boite-couleurs-alpha", quantity: 1 },
    { productId: "colle-baton", quantity: 1 },
    { productId: "ardoise", quantity: 1 },
    { productId: "trousse", quantity: 1 },
  ],
  cp: [
    { productId: "livre-lecture-cp", quantity: 1 },
    { productId: "livre-calcul-cp", quantity: 1 },
    { productId: "cahier-100", quantity: 4 },
    { productId: "cahier-dessin", quantity: 1 },
    { productId: "ardoise", quantity: 1 },
    { productId: "crayon-conte", quantity: 3 },
    { productId: "gomme-maped", quantity: 1 },
    { productId: "colle-baton", quantity: 1 },
    { productId: "boite-couleurs-maped", quantity: 1 },
    { productId: "trousse", quantity: 1 },
  ],
  ce1: [
    { productId: "livre-lecture-ce1", quantity: 1 },
    { productId: "livre-maths-ce1", quantity: 1 },
    { productId: "cahier-192", quantity: 6 },
    { productId: "cahier-dessin", quantity: 1 },
    { productId: "stylo-bic-bleu", quantity: 2 },
    { productId: "stylo-bic-rouge", quantity: 1 },
    { productId: "crayon-conte", quantity: 2 },
    { productId: "gomme-maped", quantity: 1 },
    { productId: "regle-30-maped", quantity: 1 },
    { productId: "colle-baton", quantity: 1 },
    { productId: "trousse", quantity: 1 },
  ],
  ce2: [
    { productId: "livre-francais-ce2", quantity: 1 },
    { productId: "livre-maths-ce2", quantity: 1 },
    { productId: "cahier-192", quantity: 7 },
    { productId: "stylo-bic-bleu", quantity: 2 },
    { productId: "stylo-bic-rouge", quantity: 1 },
    { productId: "crayon-conte", quantity: 2 },
    { productId: "regle-30-maped", quantity: 1 },
    { productId: "taille-crayon", quantity: 1 },
    { productId: "colle-liquide", quantity: 1 },
    { productId: "trousse", quantity: 1 },
  ],
  cm1: [
    { productId: "livre-francais-cm1", quantity: 1 },
    { productId: "livre-maths-cm1", quantity: 1 },
    { productId: "cahier-192", quantity: 8 },
    { productId: "stylo-bic-bleu", quantity: 2 },
    { productId: "stylo-bic-rouge", quantity: 1 },
    { productId: "regle-30-maped", quantity: 1 },
    { productId: "boite-couleurs-maped", quantity: 1 },
    { productId: "feutres-alpha", quantity: 1 },
    { productId: "trousse", quantity: 1 },
  ],
  cm2: [
    { productId: "livre-francais-cm2", quantity: 1 },
    { productId: "livre-maths-cm2", quantity: 1 },
    { productId: "cahier-192", quantity: 8 },
    { productId: "stylo-bic-bleu", quantity: 2 },
    { productId: "stylo-bic-rouge", quantity: 1 },
    { productId: "regle-30-maped", quantity: 1 },
    { productId: "equerre-rapporteur", quantity: 1 },
    { productId: "colle-liquide", quantity: 1 },
    { productId: "trousse", quantity: 1 },
    { productId: "sac-a-dos", quantity: 1 },
  ],
  "6eme": [
    { productId: "livre-histoire-6eme", quantity: 1 },
    { productId: "livre-maths-6eme", quantity: 1 },
    { productId: "cahier-192", quantity: 10 },
    { productId: "stylo-bic-bleu", quantity: 3 },
    { productId: "stylo-bic-rouge", quantity: 1 },
    { productId: "boite-academique", quantity: 1 },
    { productId: "surligneur-bic", quantity: 1 },
    { productId: "colle-baton", quantity: 1 },
    { productId: "trousse", quantity: 1 },
    { productId: "sac-a-dos-ado", quantity: 1 },
  ],
  "5eme": [
    { productId: "livre-francais-5eme", quantity: 1 },
    { productId: "livre-maths-5eme", quantity: 1 },
    { productId: "cahier-192", quantity: 10 },
    { productId: "stylo-bic-bleu", quantity: 3 },
    { productId: "stylo-bic-rouge", quantity: 1 },
    { productId: "compas", quantity: 1 },
    { productId: "equerre-rapporteur", quantity: 1 },
    { productId: "surligneur-stabilo", quantity: 1 },
    { productId: "trousse", quantity: 1 },
    { productId: "sac-a-dos-ado", quantity: 1 },
  ],
  "4eme": [
    { productId: "livre-francais-4eme", quantity: 1 },
    { productId: "livre-maths-4eme", quantity: 1 },
    { productId: "cahier-192", quantity: 11 },
    { productId: "stylo-bic-bleu", quantity: 3 },
    { productId: "stylo-bic-vert", quantity: 1 },
    { productId: "boite-academique", quantity: 1 },
    { productId: "calculatrice", quantity: 1 },
    { productId: "surligneur-stabilo", quantity: 1 },
    { productId: "agenda-scolaire", quantity: 1 },
    { productId: "sac-a-dos-ado", quantity: 1 },
  ],
  "3eme": [
    { productId: "livre-francais-3eme", quantity: 1 },
    { productId: "livre-maths-3eme", quantity: 1 },
    { productId: "cahier-192", quantity: 12 },
    { productId: "stylo-bic-bleu", quantity: 3 },
    { productId: "stylo-bic-vert", quantity: 1 },
    { productId: "calculatrice", quantity: 1 },
    { productId: "surligneur-bic", quantity: 1 },
    { productId: "agenda-scolaire", quantity: 1 },
    { productId: "cahier-travaux-pratiques", quantity: 2 },
    { productId: "sac-a-dos-ado", quantity: 1 },
  ],
  "2nd": [
    { productId: "livre-litterature-2nd", quantity: 1 },
    { productId: "livre-maths-2nd", quantity: 1 },
    { productId: "cahier-192", quantity: 12 },
    { productId: "stylo-bic-bleu", quantity: 4 },
    { productId: "stylo-bic-noir", quantity: 1 },
    { productId: "calculatrice", quantity: 1 },
    { productId: "surligneur-stabilo", quantity: 1 },
    { productId: "agenda-scolaire", quantity: 1 },
    { productId: "cahier-travaux-pratiques", quantity: 2 },
    { productId: "sac-a-dos-ado", quantity: 1 },
  ],
  "1ere": [
    { productId: "livre-histoire-1ere", quantity: 1 },
    { productId: "livre-maths-1ere", quantity: 1 },
    { productId: "cahier-192", quantity: 12 },
    { productId: "stylo-bic-bleu", quantity: 4 },
    { productId: "stylo-bic-noir", quantity: 1 },
    { productId: "calculatrice", quantity: 1 },
    { productId: "surligneur-bic", quantity: 1 },
    { productId: "agenda-scolaire", quantity: 1 },
    { productId: "cahier-travaux-pratiques", quantity: 2 },
    { productId: "sac-a-dos-ado", quantity: 1 },
  ],
  tle: [
    { productId: "livre-philo-tle", quantity: 1 },
    { productId: "livre-maths-tle", quantity: 1 },
    { productId: "cahier-192", quantity: 13 },
    { productId: "stylo-bic-bleu", quantity: 4 },
    { productId: "stylo-bic-noir", quantity: 1 },
    { productId: "calculatrice", quantity: 1 },
    { productId: "surligneur-stabilo", quantity: 1 },
    { productId: "agenda-scolaire", quantity: 1 },
    { productId: "cahier-travaux-pratiques", quantity: 2 },
    { productId: "sac-a-dos-ado", quantity: 1 },
  ],
};

export function getClassById(id) {
  return classes.find((c) => c.id === id);
}
