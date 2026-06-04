// Importare React
//import React from "react"; praticamente può essere un plus, e lo aggiungo come commento (da chiarire)
//È un componente che viene importato e usato da main.jsx.


// Importare i tre componenti che gestiscono GET, POST e DELETE
import GetPosts from "./components/GetPosts.jsx";
import CreatePost from "./components/CreatePost.jsx";
import DeletePost from "./components/DeletePost.jsx";


// Definisco il componente principale App
function App() {
  // Il return descrive la struttura della pagina
  return (
    // Contenitore generale
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      {/* Titolo principale */}
      <h1>Esercizi API: GET, POST, DELETE</h1>

      {/* Sezione per la chiamata GET */}
      <section style={{ marginTop: "2rem" }}>
        <h2>GET: Leggi i post 1, 2 e 3</h2>
        {/* Richiamo il componente che fa la GET */}
        <GetPosts />
      </section>

      {/* Sezione per la chiamata POST */}
      <section style={{ marginTop: "2rem" }}>
        <h2>POST: Crea un nuovo post</h2>
        {/* Richiamo il componente che fa la POST */}
        <CreatePost />
      </section>

      {/* Sezione per la chiamata DELETE */}
      <section style={{ marginTop: "2rem" }}>
        <h2>DELETE: Elimina un post</h2>
        {/* Richiamo il componente che fa la DELETE */}
        <DeletePost />
      </section>
    </div>
  );
}

// Esporto App per usarla in main.jsx
export default App;
