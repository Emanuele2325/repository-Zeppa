// Importiamo React: serve per poter usare JSX e i componenti
import React from 'react';

// Importiamo ReactDOM: serve per montare l'app dentro l'HTML
import ReactDOM from 'react-dom/client';

// Importiamo il componente principale dell'applicazione (App.jsx)
import App from './App.jsx';

// Importiamo BrowserRouter dal pacchetto react-router-dom
// BrowserRouter serve per abilitare il routing (più pagine)
import { BrowserRouter } from 'react-router-dom';

// Importare eventuali stili globali (opzionale)
//import './styles/style.css';

// Selezioniamo l'elemento HTML con id="root"
// È il punto in cui React "aggancia" l'app
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode è una modalità di sviluppo che aiuta a trovare errori
  <React.StrictMode>
    {/* BrowserRouter avvolge tutta l'app e abilita il routing */}
    <BrowserRouter>
      {/* App è il componente principale dell'applicazione */}
      <App />
    </BrowserRouter>
    {/* TUTTI i componenti devono poter usare il routing. */}
  </React.StrictMode>
);
