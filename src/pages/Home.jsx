import { Link } from "react-router-dom";
import { products, categories, classes } from "../data/supplies";
import ProductCard from "../components/ProductCard";
import ProductCover from "../components/ProductCover";

const visible = products.filter((p) => !p.hidden);
const featured = visible.slice(0, 4);
const heroStack = [visible[14], visible[0], visible[16], visible[11]];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <h1>
            La liste de fournitures de votre enfant, prête en un clic.
          </h1>
          <p>
            Choisissez simplement la classe : nous réunissons les livres, les
            cahiers et le petit matériel, avec la main d'œuvre et la livraison
            déjà comprises dans le prix affiché.
          </p>
          <div className="hero__actions">
            <Link to="/fournitures" className="btn btn--primary">
              Choisir la classe
            </Link>
            <Link to="/catalogue" className="btn btn--outline">
              Voir le catalogue
            </Link>
          </div>
          <div className="hero__stats">
            <div>
              <strong>{classes.length}</strong>
              <span>niveaux disponibles</span>
            </div>
            <div>
              <strong>48h</strong>
              <span>délai moyen de livraison</span>
            </div>
            <div>
              <strong>+150</strong>
              <span>articles au catalogue</span>
            </div>
          </div>
        </div>

        <div className="hero__display" aria-hidden="true">
          {heroStack.map((product, i) => (
            <div className={`hero__display-item hero__display-item--${i}`} key={product.id}>
              <ProductCover product={product} size="lg" />
            </div>
          ))}
        </div>
      </section>

      <section className="class-picker">
        <div className="section-heading">
          <h2>Choisissez une classe</h2>
          <Link to="/fournitures">Toutes les classes</Link>
        </div>
        <div className="class-picker__row">
          {classes.map((c) => (
            <Link
              key={c.id}
              to={`/fournitures/${c.id}`}
              className={`class-pill ${c.cycle === "Primaire" ? "theme-primaire" : "theme-secondaire"}`}
            >
              {c.cycle === "Primaire" && (
                <span className="class-pill__emoji" aria-hidden="true">{c.emoji}</span>
              )}
              <span className="class-pill__label">{c.label}</span>
              <span className="class-pill__cycle">{c.cycle}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="categories">
        <div className="categories__row">
          {categories.slice(1).map((cat) => (
            <Link key={cat} to="/catalogue" className="category-pill">
              {cat}
            </Link>
          ))}
        </div>
      </section>

      <section className="featured">
        <div className="section-heading">
          <h2>Les indispensables</h2>
          <Link to="/catalogue">Tout voir</Link>
        </div>
        <div className="book-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 12h18M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3>Listes conformes au programme</h3>
          <p>Chaque liste reprend les manuels et fournitures demandés par les écoles partenaires.</p>
        </div>
        <div className="feature">
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3v18M4 12h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          <h3>Protège-livres et stickers prénom</h3>
          <p>Couverture des cahiers, protège-livres Pembo et stickers prénom en option sur chaque liste.</p>
        </div>
        <div className="feature">
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 7h15l-1.6 9.2a2 2 0 0 1-2 1.8H8.6a2 2 0 0 1-2-1.8L5 4H2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3>Livraison à domicile</h3>
          <p>Paiement par Mobile Money et livraison suivie jusqu'à votre porte, partout à Douala.</p>
        </div>
      </section>
    </>
  );
}
