import { useMemo, useState } from "react";
import { products, categories } from "../data/supplies";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const sellable = products.filter((p) => !p.hidden);

export default function Catalogue() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered = useMemo(() => {
    return sellable.filter((product) => {
      const matchesCategory = activeCategory === "Tous" || product.category === activeCategory;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q.length === 0 ||
        product.name.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <section className="catalogue">
      <div className="catalogue__header">
        <div>
          <h1>Catalogue</h1>
          <p>{filtered.length} article{filtered.length > 1 ? "s" : ""} disponible{filtered.length > 1 ? "s" : ""}</p>
        </div>
        <SearchBar value={query} onChange={setQuery} placeholder="Rechercher un article ou une marque" />
      </div>

      <div className="catalogue__filters">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-chip ${activeCategory === cat ? "is-active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="book-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>Aucun article ne correspond à cette recherche.</p>
          <button
            type="button"
            className="btn btn--outline"
            onClick={() => {
              setQuery("");
              setActiveCategory("Tous");
            }}
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </section>
  );
}
