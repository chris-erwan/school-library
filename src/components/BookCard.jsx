import { Link } from "react-router-dom";
import BookCover from "./BookCover";
import { useCart } from "../context/CartContext";

export default function BookCard({ book }) {
  const { addToCart } = useCart();

  return (
    <article className="book-card">
      <Link to={`/livre/${book.id}`} className="book-card__cover">
        <BookCover book={book} />
      </Link>
      <div className="book-card__body">
        <p className="book-card__category">{book.category}</p>
        <h3 className="book-card__title">
          <Link to={`/livre/${book.id}`}>{book.title}</Link>
        </h3>
        <p className="book-card__author">{book.author}</p>
        <div className="book-card__footer">
          <span className="book-card__price">{book.price.toFixed(2)} €</span>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => addToCart(book, 1)}
          >
            Ajouter
          </button>
        </div>
      </div>
    </article>
  );
}
