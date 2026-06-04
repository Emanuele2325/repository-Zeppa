//Questo componente serve per eliminare un post specifico (in base all’ID inserito) e mostrare un messaggio di conferma o errore.

import { useState } from "react";
/*Cosa fa: Importa useState da React.
Concettualmente:  
Utile per gestire tre cose:
- L’ID del post da eliminare.
- Il messaggio di conferma (“Post n eliminato”).
- Eventuali errori.*/



// Definisco il componente DeletePost
export default function DeletePost() {




// Stato per l'id del post da eliminare
const [postId, setPostId] = useState("");

//Concettualmente: questo componente si occupa SOLO di eliminare un post
//L’utente scrive un numero (es. 3) → React lo memorizza in postId.
//Questo valore verrà usato nella chiamata API.


// Stato per il messaggio finale
const [message, setMessage] = useState("");

/*Cosa fa: Tiene traccia del messaggio di conferma.
Concettualmente:  
Dopo la chiamata DELETE, se va tutto bene, React mostrerà “Post n eliminato”.*/

// Stato per eventuali errori
const [error, setError] = useState(null);

/*Cosa fa: Tiene traccia di eventuali errori.
Concettualmente:  
Se la chiamata fallisce (es. ID non valido o rete assente), React mostrerà un messaggio d’errore.*/




//Funzione che gestisce la DELETE
const handleDelete = async () => { // La funzione è asincrona perché fa una chiamata API.
    try {
      // Faccio la chiamata DELETE
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        { method: "DELETE" }
    );

/*Cosa fa: Definisce la funzione che gestisce la chiamata DELETE.
Concettualmente:  
È il “motore” del componente: quando l’utente clicca “Elimina post”, questa funzione parte e comunica con il server.*/ 


/*Cosa fa:
Usa fetch() per fare una chiamata HTTP DELETE.
Inserisce l’ID del post nell’URL.
Specifica il metodo HTTP come “DELETE”.
Concettualmente:  
Qui si comunica con il server: gli dici “voglio eliminare il post con questo ID”.*/

      // Se la risposta è ok, considero il post eliminato
    if (response.ok) {
        setMessage(`Post ${postId} eliminato`);
        setError(null);
    } else {
        setError("Errore nell'eliminazione");
        setMessage("");
    }

    } catch {
    setError("Errore di rete");
    setMessage("");
    }
};

  // UI del componente
return (
    <div>

      {/* Campo input per l'id */}
    <label>
        ID del post da eliminare:
        <input
        type="number"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
        />
    </label>

//Crea un campo di input per inserire l’ID del post.
//value={postId} → collega il campo allo stato.
//onChange → aggiorna lo stato ogni volta che l’utente digita.
//Concettualmente:  
//React “controlla” il campo: ogni numero che scrivi aggiorna postId.


      {/* Pulsante elimina */}
    <button onClick={handleDelete} disabled={!postId}>
        Elimina post
    </button>

//Crea il pulsante che avvia la DELETE.
//disabled={!postId} → disabilita il pulsante se non hai scritto un ID.

      {/* Mostro errori */}
    {error && <p style={{ color: "red" }}>{error}</p>}

//Concettualmente:  
//È una condizione di rendering:
//Se c’è un errore → testo rosso.
//Se tutto ok → testo verde.

      {/* Mostro messaggio di conferma */}
    {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
);
}




