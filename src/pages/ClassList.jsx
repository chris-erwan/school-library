import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getClassById,
  supplyLists,
  getProductById,
  formatCFA,
} from "../data/supplies";
import { useCart } from "../context/CartContext";

const MAIN_OEUVRE = getProductById("service-main-oeuvre");
const LIVRAISON = getProductById("service-livraison");
const PROTEGE_CAHIER = getProductById("protege-cahier");
const STICKER = getProductById("sticker-prenom");

export default function ClassList() {
  const { classId } = useParams();
  const schoolClass = getClassById(classId);
  const { addManyToCart } = useCart();

  const [withProtection, setWithProtection] = useState(true);
  const [withStickers, setWithStickers] = useState(false);
  const [added, setAdded] = useState(false);

  const lines = useMemo(() => {
    if (!schoolClass) return [];
    return supplyLists[classId].map(({ productId, quantity }) => ({
      product: getProductById(productId),
      quantity,
    }));
  }, [classId, schoolClass]);

  const notebookCount = useMemo(
    () =>
      lines
        .filter((l) => l.product.category === "Cahiers" || l.product.category === "Livres scolaires")
        .reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );

  if (!schoolClass) {
    return (
      <section className="empty-state">
        <p>Cette classe n'existe pas dans notre catalogue.</p>
        <Link to="/fournitures" className="btn btn--primary">Voir les classes disponibles</Link>
      </section>
    );
  }

  const suppliesTotal = lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0);
  const protectionTotal = withProtection ? PROTEGE_CAHIER.price * notebookCount : 0;
  const stickersTotal = withStickers ? STICKER.price : 0;
  const total = suppliesTotal + MAIN_OEUVRE.price + LIVRAISON.price + protectionTotal + stickersTotal;

  function handleAddAll() {
    const entries = lines.map(({ product, quantity }) => ({ product, quantity }));
    entries.push({ product: MAIN_OEUVRE, quantity: 1 });
    entries.push({ product: LIVRAISON, quantity: 1 });
    if (withProtection) entries.push({ product: PROTEGE_CAHIER, quantity: notebookCount });
    if (withStickers) entries.push({ product: STICKER, quantity: 1 });
    addManyToCart(entries);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  const isPrimaire = schoolClass.cycle === "Primaire";
  const theme = isPrimaire ? "theme-primaire" : "theme-secondaire";

  return (
    <section className={`class-list ${theme}`}>
      <div className="class-list__inner">
      <div className="class-list__header">
        {isPrimaire && (
          <span className="class-list__emoji" aria-hidden="true">{schoolClass.emoji}</span>
        )}
        <p className="book-card__category">{schoolClass.cycle}</p>
        <h1>
          {isPrimaire
            ? `La liste de ${schoolClass.label}, prête pour l'aventure !`
            : `Liste de fournitures — ${schoolClass.label}`}
        </h1>
        <p>
          {isPrimaire
            ? "Tout ce qu'il faut pour une super année scolaire, à ajouter au panier en un clic."
            : "Tous les articles demandés pour cette classe, regroupés en une seule commande."}
        </p>
      </div>

      <div className="class-list__layout">
        <table className="supply-table">
          <thead>
            <tr>
              <th>Article</th>
              <th>Catégorie</th>
              <th>Qté</th>
              <th>Prix unitaire</th>
              <th>Sous-total</th>
            </tr>
          </thead>
          <tbody>
            {lines.map(({ product, quantity }) => (
              <tr key={product.id}>
                <td>
                  <Link to={`/produit/${product.id}`}>{product.name}</Link>
                </td>
                <td>{product.category}</td>
                <td>{quantity}</td>
                <td>{formatCFA(product.price)}</td>
                <td>{formatCFA(product.price * quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <aside className="class-list__summary">
          <h2>Options</h2>

          <label className="option-row">
            <input
              type="checkbox"
              checked={withProtection}
              onChange={(e) => setWithProtection(e.target.checked)}
            />
            <span>
              Protège-cahiers / protège-livres — Pembo Sarl
              <small>{notebookCount} unités · {formatCFA(PROTEGE_CAHIER.price)} / unité</small>
            </span>
          </label>

          <label className="option-row">
            <input
              type="checkbox"
              checked={withStickers}
              onChange={(e) => setWithStickers(e.target.checked)}
            />
            <span>
              Planche de stickers prénom
              <small>À coller sur les cahiers et livres · {formatCFA(STICKER.price)}</small>
            </span>
          </label>

          <h2 className="class-list__summary-title">Récapitulatif</h2>
          <div className="cart__summary-row">
            <span>Fournitures</span>
            <span>{formatCFA(suppliesTotal)}</span>
          </div>
          <div className="cart__summary-row">
            <span>Main d'œuvre</span>
            <span>{formatCFA(MAIN_OEUVRE.price)}</span>
          </div>
          <div className="cart__summary-row">
            <span>Livraison</span>
            <span>{formatCFA(LIVRAISON.price)}</span>
          </div>
          {withProtection && (
            <div className="cart__summary-row">
              <span>Protège-cahiers</span>
              <span>{formatCFA(protectionTotal)}</span>
            </div>
          )}
          {withStickers && (
            <div className="cart__summary-row">
              <span>Stickers prénom</span>
              <span>{formatCFA(stickersTotal)}</span>
            </div>
          )}
          <div className="cart__summary-row cart__summary-row--total">
            <span>Total</span>
            <span>{formatCFA(total)}</span>
          </div>

          <button type="button" className="btn btn--primary btn--block" onClick={handleAddAll}>
            {added
              ? isPrimaire
                ? "Liste ajoutée, bravo ! 🎉"
                : "Liste ajoutée au panier ✓"
              : "Ajouter toute la liste au panier"}
          </button>
        </aside>
      </div>
      </div>
    </section>
  );
}
