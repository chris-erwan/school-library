import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={(e) => e.preventDefault()}>
        <h1>Connexion</h1>
        <p className="auth-card__subtitle">
          Retrouvez votre historique de commandes et votre liste d'envies.
        </p>

        <label>
          Adresse e-mail
          <input type="email" required placeholder="vous@exemple.com" />
        </label>

        <label>
          Mot de passe
          <input type="password" required placeholder="••••••••" />
        </label>

        <button type="submit" className="btn btn--primary btn--block">
          Se connecter
        </button>

        <p className="auth-card__footer">
          Pas encore de compte ? <Link to="/inscription">Créer un compte</Link>
        </p>
      </form>
    </section>
  );
}
