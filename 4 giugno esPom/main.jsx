// Importare React
import React from "react";
// Importare il motore di rendering per il browser
import ReactDOM from "react-dom/client";
// Importare il componente principale dell'app
import App from "./App.jsx";

// Creo la radice React collegata al div con id "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode attiva controlli extra in sviluppo
  <React.StrictMode>
    {/* Renderizzo il componente principale */}
    <App />
  </React.StrictMode>
);
