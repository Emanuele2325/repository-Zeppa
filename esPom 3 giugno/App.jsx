
// Importo i componenti che userò nella pagina
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TeamCard from "./components/TeamCard.jsx";
// Importo il file CSS principale dell'app
import "./App.css";


// Definisco il componente principale App
function App() {
  // Il return descrive la struttura della pagina in JSX
  return (
    // Contenitore principale con una classe per lo stile
    <div className="app">
      {/* Barra superiore della pagina */}
      <Header/>

      {/* Sezione principale con le card del team */}
      <main className="team-section">
        {/* Titolo della sezione */}
        <h1>Il nostro team</h1>

        {/* Contenitore delle card, gestito con flex/grid in CSS */}
        <div className="team-grid">
          {/* Prima scheda: membro presente */}
          <TeamCard
            name="Giulia Bianco"
            role="Project Manager Junior"
            bio="Coordina i progetti e mantiene il team allineato sugli obiettivi."
            imageUrl="https://via.placeholder.com/150"
            isPresent={true}
          />

          {/* Seconda scheda: membro assente */}
          <TeamCard
            name="Luca Brambilla"
            role="Sviluppatore Front-end"
            bio="Si occupa dell'interfaccia utente e dell'esperienza di navigazione."
            imageUrl="https://via.placeholder.com/150"
            isPresent={false}
          />

          {/* Terza scheda: altro membro presente */}
          <TeamCard
            name="Sara Esposito"
            role="Data Analyst Senior"
            bio="Analizza i dati per supportare le decisioni strategiche."
            imageUrl="https://via.placeholder.com/150"
            isPresent={true}
          />
        </div>
      </main>

      {/* Piè di pagina */}
      <Footer />
    </div>
  );
}

// Esporto il componente App per poterlo usare in main.jsx
export default App;
