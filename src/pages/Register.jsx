import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={(e) => e.preventDefault()}>
        <h1>Créer un compte</h1>
        <p className="auth-card__subtitle">
          Suivez vos commandes et enregistrez vos livres favoris.
        </p>

        <label>
          Nom complet
          <input type="text" required placeholder="Votre nom" />
        </label>

        <label>
          Adresse e-mail
          <input type="email" required placeholder="vous@exemple.com" />
        </label>

        <label>
          Mot de passe
          <input type="password" required placeholder="••••••••" />
        </label>

        <button type="submit" className="btn btn--primary btn--block">
          Créer mon compte
        </button>

        <p className="auth-card__footer">
          Déjà inscrit ? <Link to="/connexion">Se connecter</Link>
        </p>
      </form>
    </section>
  );
}
