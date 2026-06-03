// Definisco il componente TeamCard
// Destrutturo le props direttamente nei parametri della funzione
function TeamCard({ name, role, bio, imageUrl, isPresent }) {
  // Calcolo la classe CSS in base al booleano isPresent
const cardClassName = isPresent ? "card online" : "card offline";

  // Calcolo il testo del bottone in base a isPresent
const buttonLabel = isPresent ? "Disponibile" : "Assente / In riunione";

  // Il return descrive la struttura della scheda
return (
    // Uso <article> come tag semantico per un contenuto autonomo
    <article className={cardClassName}>
      {/* Immagine del membro del team */}
    <img src={imageUrl} alt={name} className="avatar" />

      {/* Nome del membro */}
    <h2>{name}</h2>

      {/* Ruolo del membro */}
    <h3>{role}</h3>

      {/* Breve biografia/descrizione */}
    <p>{bio}</p>

      {/* Bottone che mostra lo stato di presenza */}
    <button className="status-button">{buttonLabel}</button>
    </article>
);
}

// Esporto il componente per usarlo in App.jsx
export default TeamCard;
