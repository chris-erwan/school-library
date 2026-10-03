import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
            <path
              d="M32 20c-4.5-3.2-10.4-4.4-16-3.4v27.6c5.6-1 11.5.2 16 3.4 4.5-3.2 10.4-4.4 16-3.4V16.6c-5.6-1-11.5.2-16 3.4Z"
              fill="none"
              stroke="#C69A3E"
              strokeWidth="2.6"
              strokeLinejoin="round"
            />
            <path d="M32 20v27.6" stroke="#C69A3E" strokeWidth="2.6" strokeLinecap="round" />
          </svg>
          <span className="brand__text">
            <span className="brand__name">
              Online<em>Bookshop</em>
            </span>
            <span className="brand__tagline">Livres &amp; fournitures scolaires</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Accueil
          </NavLink>
          <NavLink to="/fournitures" onClick={() => setMenuOpen(false)}>
            Fournitures par classe
          </NavLink>
          <NavLink to="/catalogue" onClick={() => setMenuOpen(false)}>
            Catalogue
          </NavLink>
          <NavLink to="/connexion" onClick={() => setMenuOpen(false)}>
            Connexion
          </NavLink>
        </nav>

        <Link to="/panier" className="cart-button" onClick={() => setMenuOpen(false)}>
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 7h15l-1.6 9.2a2 2 0 0 1-2 1.8H8.6a2 2 0 0 1-2-1.8L5 4H2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="21" r="1.4" fill="currentColor" />
            <circle cx="18" cy="21" r="1.4" fill="currentColor" />
          </svg>
          {totalItems > 0 && <span className="cart-button__badge">{totalItems}</span>}
        </Link>
      </div>
    </header>
  );
}
