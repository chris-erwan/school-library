import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductCover from "../components/ProductCover";
import { formatCFA } from "../data/supplies";

const FREE_SHIPPING_THRESHOLD = 20000;
const SHIPPING_COST = 3000;

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <section className="empty-state">
        <p>Votre panier est vide pour le moment.</p>
        <Link to="/fournitures" className="btn btn--primary">Choisir une classe</Link>
      </section>
    );
  }

  const shipping = totalPrice > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;

  return (
    <section className="cart">
      <h1>Votre panier</h1>

      <div className="cart__layout">
        <ul className="cart__list">
          {items.map(({ product, quantity }) => (
            <li key={product.id} className="cart__item">
              <Link to={`/produit/${product.id}`} className="cart__item-cover">
                <ProductCover product={product} size="sm" />
              </Link>
              <div className="cart__item-info">
                <Link to={`/produit/${product.id}`} className="cart__item-title">
                  {product.name}
                </Link>
                <p className="cart__item-author">{product.brand}</p>
                <button
                  type="button"
                  className="cart__item-remove"
                  onClick={() => removeFromCart(product.id)}
                >
                  Retirer
                </button>
              </div>
              <div className="quantity-stepper">
                <button
                  type="button"
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                  aria-label="Diminuer la quantité"
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  aria-label="Augmenter la quantité"
                >
                  +
                </button>
              </div>
              <span className="cart__item-price">{formatCFA(product.price * quantity)}</span>
            </li>
          ))}
        </ul>

        <aside className="cart__summary">
          <h2>Récapitulatif</h2>
          <div className="cart__summary-row">
            <span>Sous-total</span>
            <span>{formatCFA(totalPrice)}</span>
          </div>
          <div className="cart__summary-row">
            <span>Livraison</span>
            <span>{shipping === 0 ? "Offerte" : formatCFA(shipping)}</span>
          </div>
          {shipping > 0 && (
            <p className="cart__summary-note">
              Plus que {formatCFA(FREE_SHIPPING_THRESHOLD - totalPrice)} d'achat pour la livraison offerte.
            </p>
          )}
          <div className="cart__summary-row cart__summary-row--total">
            <span>Total</span>
            <span>{formatCFA(totalPrice + shipping)}</span>
          </div>
          <button type="button" className="btn btn--primary btn--block">
            Passer la commande
          </button>
        </aside>
      </div>
    </section>
  );
}
