import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById, products, formatCFA } from "../data/supplies";
import ProductCover from "../components/ProductCover";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!product || product.hidden) {
    return (
      <section className="empty-state">
        <p>Cet article n'existe pas ou n'est plus au catalogue.</p>
        <Link to="/catalogue" className="btn btn--primary">Retour au catalogue</Link>
      </section>
    );
  }

  const suggestions = products
    .filter((p) => p.category === product.category && p.id !== product.id && !p.hidden)
    .slice(0, 3);

  function handleAdd() {
    addToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  }

  return (
    <>
      <section className="book-detail">
        <div className="book-detail__cover">
          <ProductCover product={product} size="xl" />
        </div>
        <div className="book-detail__info">
          <p className="book-card__category">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="book-detail__author">{product.brand}</p>

          <p className="book-detail__description">
            {product.category === "Livres scolaires"
              ? "Manuel conforme au programme officiel, demandé par les établissements partenaires pour cette classe."
              : "Article disponible à l'unité, inclus dans les listes de fournitures par classe ou commandable séparément."}
            {product.unit ? ` Vendu ${product.unit}.` : ""}
          </p>

          <div className="book-detail__purchase">
            <span className="book-detail__price">{formatCFA(product.price)}</span>

            <div className="quantity-stepper">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Diminuer la quantité"
              >
                −
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Augmenter la quantité"
              >
                +
              </button>
            </div>

            <button type="button" className="btn btn--primary" onClick={handleAdd}>
              {justAdded ? "Ajouté ✓" : "Ajouter au panier"}
            </button>
          </div>
        </div>
      </section>

      {suggestions.length > 0 && (
        <section className="featured">
          <div className="section-heading">
            <h2>Dans la même catégorie</h2>
          </div>
          <div className="book-grid">
            {suggestions.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
