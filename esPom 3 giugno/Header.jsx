// Definisco il componente Header
function Header() {
  // Il return descrive la barra superiore della pagina
return (
    // Uso il tag semantico <header>
    <header className="header">
      {/* Logo dell'azienda (può essere testo o immagine) */}
    <div className="logo">TeamDyn</div>

      {/* Menu di navigazione fittizio */}
    <nav>
        <ul className="nav-list">
          <li>Home</li>
          <li>Team</li>
          <li>Contatti</li>
        </ul>
    </nav>
    </header>
);
}

// Esporto il componente per usarlo in App.jsx
export default Header;
