import { Link } from "react-router-dom";
import ProductCover from "./ProductCover";
import { useCart } from "../context/CartContext";
import { formatCFA } from "../data/supplies";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="book-card">
      <Link to={`/produit/${product.id}`} className="book-card__cover">
        <ProductCover product={product} />
      </Link>
      <div className="book-card__body">
        <p className="book-card__category">{product.category}</p>
        <h3 className="book-card__title">
          <Link to={`/produit/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="book-card__author">{product.brand}</p>
        <div className="book-card__footer">
          <span className="book-card__price">{formatCFA(product.price)}</span>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => addToCart(product, 1)}
          >
            Ajouter
          </button>
        </div>
      </div>
    </article>
  );
}
