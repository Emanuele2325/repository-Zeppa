// StrictMode è un wrapper di React che in sviluppo
// aiuta a trovare errori — non cambia nulla in produzione
import { StrictMode } from "react";
// createRoot è il metodo moderno per "montare" React nella pagina
import { createRoot } from "react-dom/client";
// Importiamo il componente principale
import App from "./App.jsx";

// "document.getElementById('root')" trova il div con id="root"
// che si trova in index.html — è lì che React monta tutta l'app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* App è il punto di partenza di tutta la gerarchia */}
    <App />
  </StrictMode>
);