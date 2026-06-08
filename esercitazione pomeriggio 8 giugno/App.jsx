// Importiamo Routes e Route dal pacchetto react-router-dom
// Questi componenti servono per definire le "pagine" dell'app
import { Routes, Route } from "react-router-dom";

// Importiamo il componente Layout
// Layout è il contenitore grafico comune a tutte le pagine (header, struttura)
import { Layout } from "./components/Layout";

// Importiamo la pagina principale che mostra la lista dei giveaway
import { GiveawayList } from "./components/GiveawayList";

// Definiamo il componente principale dell'applicazione
// Questo componente contiene la struttura delle route (le pagine)
export default function App() {
  return (
    // Layout avvolge tutte le pagine e fornisce una struttura comune. Questo perchè vogliamo che tutte le pagine abbiano lo stesso: header, footer ed ecc
    <Layout>

      {/* Routes è il contenitore di tutte le route dell'app, route invece per una singola pagina, in questo caso la principale */}
      <Routes>

        {/* Route per la pagina principale "/" 
            element={<GiveawayList />} significa:
            "quando l'URL è '/', mostra il componente GiveawayList" */}
        <Route path="/" element={<GiveawayList />} /> 
{/* da ricordare che <> </> perchè sono componenti React , scrivendo jsx quindi, ovvero HTML dentro javascript*/}
{/* le graffe invece, dentro JSX in quanto indicano codice JavaScript, non semplice testo. */}

      </Routes>
    </Layout>
  );
}
