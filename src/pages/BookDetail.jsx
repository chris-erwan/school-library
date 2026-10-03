import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBookById, books } from "../data/books";
import BookCover from "../components/BookCover";
import BookCard from "../components/BookCard";
import { useCart } from "../context/CartContext";

export default function BookDetail() {
  const { id } = useParams();
  const book = getBookById(id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!book) {
    return (
      <section className="empty-state">
        <p>Ce livre n'existe pas ou n'est plus au catalogue.</p>
        <Link to="/catalogue" className="btn btn--primary">Retour au catalogue</Link>
      </section>
    );
  }

  const suggestions = books
    .filter((b) => b.category === book.category && b.id !== book.id)
    .slice(0, 3);

  function handleAdd() {
    addToCart(book, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  }

  return (
    <>
      <section className="book-detail">
        <div className="book-detail__cover">
          <BookCover book={book} size="xl" />
        </div>
        <div className="book-detail__info">
          <p className="book-card__category">{book.category}</p>
          <h1>{book.title}</h1>
          <p className="book-detail__author">par {book.author}</p>

          <div className="book-detail__rating" aria-label={`Note : ${book.rating} sur 5`}>
            {"★".repeat(Math.round(book.rating))}
            <span>{book.rating.toFixed(1)} / 5</span>
          </div>

          <p className="book-detail__description">{book.description}</p>

          <div className="book-detail__purchase">
            <span className="book-detail__price">{book.price.toFixed(2)} €</span>

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
            {suggestions.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
