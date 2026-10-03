# OnlineBookshop

Premier front-end de la librairie en ligne **OnlineBookshop**, développé avec React + Vite.

## Démarrer le projet

```bash
npm install
npm run dev
```

L'application est alors disponible sur `http://localhost:5173`.

Pour générer une version de production :

```bash
npm run build
```

## Structure

```
src/
  components/   → Header, Footer, SearchBar, ProductCard, ProductCover
  context/      → CartContext (état du panier, partagé via Context API)
  data/         → supplies.js (classes, catégories, catalogue et listes par classe)
  pages/        → Home, Classes, ClassList, Catalogue, ProductDetail, Cart, Login, Register
  index.css     → identité visuelle complète (couleurs, typographies, mise en page)
```

## Fonctionnement des listes par classe

`src/data/supplies.js` contient :
- `classes` — les 13 niveaux disponibles, de la SIL à la Terminale, chacun marqué `cycle: "Primaire"` ou `"Secondaire"`
- `products` — le catalogue (cahiers, écriture, bureautique, sacs, livres scolaires, options)
- `supplyLists` — la liste d'articles requis pour chaque classe (identifiant produit + quantité)

La page `/fournitures/:classId` calcule le total (fournitures + main d'œuvre + livraison + options
protège-livres/stickers) et ajoute toute la liste au panier en un clic.

## Deux ambiances visuelles selon l'âge

Le CSS définit un système de thème par variables (`.theme-primaire` dans `src/index.css`) qui
recolore automatiquement tous les composants enfants : typographie arrondie (Baloo 2), couleurs vives
(turquoise/corail) et coins très arrondis pour le primaire ; identité sobre d'origine (Fraunces,
navy/laiton/bordeaux) conservée pour le secondaire. Le thème s'applique :
- sur chaque carte de `/fournitures` (grille "Primaire" / "Secondaire" séparée),
- sur la page `/fournitures/:classId` entière (fond, titres, bouton, ton du texte),
- sur les pastilles de classe de la page d'accueil.

Pour ajuster les couleurs ou la police du thème enfant, modifier le bloc `.theme-primaire` dans
`src/index.css` — tout le reste se met à jour automatiquement.

## Marques du catalogue

Le catalogue mélange volontairement plusieurs marques pour refléter un vrai rayon de fournitures :
- **Marques françaises réelles** : Bic (stylos, surligneurs), Maped (règles, compas, boîte académique,
  feutres Color'Peps), Conté (crayons à papier), Cléopâtre (colle), Casio (calculatrices).
- **Marque camerounaise réelle** : Pembo Sarl (protège-cahiers/protège-livres).
- **« Alpha Stationery CM »** est un nom d'illustration (placeholder) utilisé pour représenter un
  fournisseur local générique sur les articles de base (gommes, règles souples, trousses, ardoises...).
  À remplacer par le nom de votre vrai fournisseur camerounais dans `src/data/supplies.js`.

## Points à faire évoluer ensuite

- Remplacer `src/data/supplies.js` par un vrai appel à une API / base de données.
- Brancher une authentification réelle sur les pages Connexion / Inscription.
- Relier le bouton « Passer la commande » à un vrai module de paiement (Mobile Money, carte).
- Remplacer les visuels générés en SVG par de vraies photos produit une fois disponibles.
