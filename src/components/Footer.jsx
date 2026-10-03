import { Link } from "react-router-dom";
import { classes } from "../data/supplies";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="brand__name brand__name--footer">
            Online<em>Bookshop</em>
          </span>
          <p>
            Librairie scolaire en ligne : manuels et fournitures regroupés par
            classe, livrés chez vous. Douala, Cameroun.
          </p>
          <p className="site-footer__contact">
            +237 6XX XXX XXX
            <br />
            contact@onlinebookshop.cm
          </p>
        </div>

        <div className="site-footer__col">
          <h4>Fournitures par classe</h4>
          {classes.slice(0, 5).map((c) => (
            <Link key={c.id} to={`/fournitures/${c.id}`}>
              {c.label}
            </Link>
          ))}
          <Link to="/fournitures">Toutes les classes</Link>
        </div>

        <div className="site-footer__col">
          <h4>Aide</h4>
          <Link to="/">Livraison à domicile</Link>
          <Link to="/">Paiement Mobile Money</Link>
          <Link to="/">Nous contacter</Link>
        </div>

        <div className="site-footer__col site-footer__col--newsletter">
          <h4>Rester informé</h4>
          <p>Les listes de la rentrée et nos offres, une fois par mois.</p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Votre adresse e-mail" aria-label="Adresse e-mail" required />
            <button type="submit" className="btn btn--primary">S'inscrire</button>
          </form>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} OnlineBookshop. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
