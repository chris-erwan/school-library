import { Link } from "react-router-dom";
import { classes, supplyLists, getProductById, formatCFA } from "../data/supplies";

function classTotal(classId) {
  return supplyLists[classId].reduce((sum, { productId, quantity }) => {
    const product = getProductById(productId);
    return sum + product.price * quantity;
  }, 0);
}

function ClassCard({ schoolClass }) {
  const theme = schoolClass.cycle === "Primaire" ? "theme-primaire" : "theme-secondaire";
  return (
    <Link to={`/fournitures/${schoolClass.id}`} className={`class-card ${theme}`}>
      {schoolClass.cycle === "Primaire" && (
        <span className="class-card__emoji" aria-hidden="true">{schoolClass.emoji}</span>
      )}
      <span className="class-card__cycle">{schoolClass.cycle}</span>
      <h3>{schoolClass.label}</h3>
      <p>{supplyLists[schoolClass.id].length} articles sur la liste</p>
      <span className="class-card__price">à partir de {formatCFA(classTotal(schoolClass.id))}</span>
    </Link>
  );
}

export default function Classes() {
  const primaire = classes.filter((c) => c.cycle === "Primaire");
  const secondaire = classes.filter((c) => c.cycle === "Secondaire");

  return (
    <section className="catalogue">
      <div className="catalogue__header">
        <div>
          <h1>Fournitures par classe</h1>
          <p>Sélectionnez un niveau pour voir la liste complète et l'ajouter au panier en un clic.</p>
        </div>
      </div>

      <div className="cycle-group">
        <h2>Primaire</h2>
        <div className="class-grid">
          {primaire.map((c) => (
            <ClassCard key={c.id} schoolClass={c} />
          ))}
        </div>
      </div>

      <div className="cycle-group">
        <h2>Secondaire</h2>
        <div className="class-grid">
          {secondaire.map((c) => (
            <ClassCard key={c.id} schoolClass={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
