// Importo React (necessario per usare JSX)
import React from "react";
// Importo il motore di rendering di React per il browser
import ReactDOM from "react-dom/client";
// Importo il componente principale dell'applicazione
import App from "./App.jsx";
// Importo gli stili globali (se li usi in index.css)
import "./index.css";

// Recupero dal DOM l'elemento con id "root"
const rootElement = document.getElementById("root");

// Creo la "radice" React e monto al suo interno il componente App
ReactDOM.createRoot(rootElement).render(
  // StrictMode attiva controlli aggiuntivi in sviluppo
  <React.StrictMode>
    {/* Qui viene renderizzato il componente principale */}
    <App />
  </React.StrictMode>
);
