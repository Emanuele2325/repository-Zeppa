// Importiamo React per poter usare JSX
//import React from "react";

// Definiamo il componente Layout con una prop "children" -- children è un nome speciale in React, 
// rappresenta tutto ciò che viene inserito dentro il componente quando lo usiamo. E' in linguaggio jsx, quindi è come se fosse un 
// parametro che contiene tutto ciò che mettiamo dentro <Layout> ... </Layout>
// Layout è un "contenitore" che avvolge tutte le pagine
export function Layout({ children }) {
return (
    <div className="layout-container">
    {/* Header dell'app. È un contenitore generale per dare struttura alla pagina.*/}

    {/* È la parte alta dell’app, visibile in tutte le pagine. */}
    <header className="layout-header">
        <h1>Giveaway Finder</h1>
    </header>

      {/* Contenuto dinamico: qui dentro verranno inserite le pagine.  */}
    <main className="layout-content">
        {children}
    </main>
    </div>
);
}

// FONDAMENTALE: Layout.jsx → parla SOLO con: App.jsx, che gli passa i children

