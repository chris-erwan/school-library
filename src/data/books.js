// Données de démonstration — à remplacer plus tard par un appel API / backend.
export const categories = [
  "Tous",
  "Romans",
  "Policier",
  "Science-fiction",
  "Développement personnel",
  "Jeunesse",
  "Essais",
];

export const books = [
  {
    id: "b1",
    title: "La Traversée des Silences",
    author: "Amélie Rocher",
    category: "Romans",
    price: 12.9,
    rating: 4.6,
    cover: { bg: "#7A2E3B", fg: "#F2E9D8" },
    description:
      "Une saga familiale sur trois générations, entre le littoral breton et les rues animées de Dakar. Un roman sur la mémoire et les silences qui se transmettent.",
  },
  {
    id: "b2",
    title: "L'Heure Bleue",
    author: "Thomas Lindqvist",
    category: "Policier",
    price: 14.5,
    rating: 4.8,
    cover: { bg: "#1E2E3B", fg: "#C69A3E" },
    description:
      "Un inspecteur à la retraite est rappelé pour une dernière affaire, quand un meurtre vieux de vingt ans refait surface dans une petite ville portuaire.",
  },
  {
    id: "b3",
    title: "Les Cartographes du Vide",
    author: "Nadia El Amrani",
    category: "Science-fiction",
    price: 15.9,
    rating: 4.4,
    cover: { bg: "#2F5A52", fg: "#F2E9D8" },
    description:
      "Dans une station spatiale à la dérive, une équipe de cartographes tente de redessiner une carte du ciel qui ne cesse de changer.",
  },
  {
    id: "b4",
    title: "Recommencer à Zéro",
    author: "Julien Fabre",
    category: "Développement personnel",
    price: 11.9,
    rating: 4.3,
    cover: { bg: "#C69A3E", fg: "#16212C" },
    description:
      "Un guide concret pour repartir après un échec professionnel : méthode, exercices et témoignages pour rebâtir sans tout casser.",
  },
  {
    id: "b5",
    title: "Le Royaume sous la Colline",
    author: "Maya Delacroix",
    category: "Jeunesse",
    price: 9.9,
    rating: 4.9,
    cover: { bg: "#3B5266", fg: "#F2E9D8" },
    description:
      "Léo découvre un passage secret sous la colline de son village et se retrouve embarqué dans un royaume oublié depuis cent ans.",
  },
  {
    id: "b6",
    title: "Ce que Nous Devons à la Nuit",
    author: "Amélie Rocher",
    category: "Romans",
    price: 13.5,
    rating: 4.5,
    cover: { bg: "#5B2A3A", fg: "#C69A3E" },
    description:
      "Deux sœurs séparées par la guerre se retrouvent trente ans plus tard, chacune porteuse d'une version différente de leur histoire commune.",
  },
  {
    id: "b7",
    title: "Le Dernier Témoin",
    author: "Thomas Lindqvist",
    category: "Policier",
    price: 14.9,
    rating: 4.2,
    cover: { bg: "#16212C", fg: "#F2E9D8" },
    description:
      "Le seul témoin d'un braquage qui a mal tourné refuse de parler. Une avocate va devoir comprendre pourquoi avant qu'il ne soit trop tard.",
  },
  {
    id: "b8",
    title: "Horizons Synthétiques",
    author: "Nadia El Amrani",
    category: "Science-fiction",
    price: 16.5,
    rating: 4.7,
    cover: { bg: "#233B4A", fg: "#8FBF9F" },
    description:
      "Quand les intelligences artificielles commencent à rêver, une chercheuse doit décider si elle doit les réveiller ou les laisser dormir.",
  },
  {
    id: "b9",
    title: "Petits Pas, Grands Changements",
    author: "Julien Fabre",
    category: "Essais",
    price: 10.9,
    rating: 4.1,
    cover: { bg: "#8A6A2F", fg: "#F2E9D8" },
    description:
      "Un essai accessible sur la manière dont de minuscules habitudes quotidiennes façonnent, sur le long terme, des vies très différentes.",
  },
];

export function getBookById(id) {
  return books.find((b) => b.id === id);
}
