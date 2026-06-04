//Questo componente serve per inviare un nuovo post al server e mostrare la risposta che l’API restituisce.


// Importo useState da React.
// - salvare i valori del form
// - salvare la risposta del server
import { useState } from "react";

// Definisco il componente CreatePost
export default function CreatePost() {

//È una “mini-app” che gestisce solo la creazione di un post.
//Quando l’utente compila il form e clicca “Crea post”, parte la chiamata POST.

//Creo due stati per i campi del form.
const [title, setTitle] = useState(""); //memorizzo il titolo inserito
const [body, setBody] = useState("");   //memorizzo il contenuto inserito

const [createdPost, setCreatedPost] = useState(null); //Tengo traccia del post creato.
//Dopo la chiamata POST, il server ti restituisce un oggetto con id, title, body.
//Lo salvo qui per poterlo mostrare in pagina.


const [error, setError] = useState(null);
/*Tiene traccia di eventuali errori.
Concettualmente:  
Se la chiamata fallisce (rete, server, ecc.), React mostrerà un messaggio d’errore.*/ 



// Funzione che gestisce l'invio del form
const handleSubmit = async (e) => { // La funzione è asincrona perché fa una chiamata API arrow function che riceve l’evento del form.
    // Evito il refresh della pagina
    e.preventDefault();

/*Cosa fa: Definisce la funzione che gestisce l’invio del form.
Concettualmente:  
È il “motore” del componente: quando l’utente clicca “Crea post”, questa funzione parte e fa la chiamata POST.*/ 

/*Parte due, inerente alla riga 34:
Impedisce al browser di ricaricare la pagina.
Concettualmente:  
In React, il form non deve mai ricaricare la pagina — tutto avviene in modo dinamico.*/ 

try {
      // Faccio la chiamata POST
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", // Metodo HTTP
        headers: {
          "Content-Type": "application/json", // Dico che invio JSON
        },
        body: JSON.stringify({
        title: title,
        body: body,
          userId: 1, // Campo richiesto dall'API
        }),
    });

/*Cosa fa:
Uso fetch() per fare una chiamata HTTP POST.
Invia i dati del form convertiti in JSON.
Specifica l’header per dire al server che stai mandando JSON.
Concettualmente:  
Qui "si comunica" con il server: “voglio creare un nuovo post con questi dati”.
await serve per aspettare la risposta prima di proseguire.*/ 


      // Converto la risposta in JSON
    const data = await response.json();

      // Salvo il post creato nello stato
    setCreatedPost(data);

      // Pulisco eventuali errori
    setError(null);

    } catch {
      // Se qualcosa va storto, salvo un errore
    setError("Errore nella creazione del post");
    }
};

/*Cosa fa:
Converte la risposta in oggetto JavaScript.
Salva il post creato nello stato.
Cancella eventuali errori precedenti.
Concettualmente:  
Ora React “sa” che il server ha risposto e può mostrare il nuovo post in pagina.*/

/*Concettualmente:  
È il piano B il catch: se qualcosa va storto, React non si blocca — mostra un messaggio chiaro all’utente.*/

// UI del componente
return (
    <div>
      {/* Form per inserire titolo e contenuto */}
    <form onSubmit={handleSubmit}>

/*Cosa fa:  
Creo il form e collega l’evento onSubmit alla funzione handleSubmit.
Concettualmente:  
Quando l’utente clicca “Crea post”, React non ricarica la pagina ma esegue la logica che hai scritto sopra.*/


        {/* Campo titolo */}
        <div>
        <label>
            Titolo:
            <input
            type="text"
              value={title} // Stato collegato all'input
              onChange={(e) => setTitle(e.target.value)} // Aggiorno lo stato
            />
        </label>
        </div>

/*Cosa fa:  
Campo di input per il titolo.
value={title} → collega il campo allo stato.
onChange → aggiorna lo stato ogni volta che l’utente digita.
Concettualmente:  
React “controlla” il campo: ogni lettera che scrivi aggiorna lo stato title.*/


        {/* Campo contenuto */}
        <div>
        <label>
            Contenuto:
            <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />
        </label>
        </div>

/*Concettualmente:  
Tutto ciò che scrivi qui finisce nello stato body, pronto per essere inviato. Stesso di titolo come procedimento logico*/ 

        {/* Pulsante invio */}
        <button type="submit">Crea post</button>
    </form>

//Concettualmente: Quando lo si clicca, React esegue handleSubmit() → parte la POST.

      {/* Mostro eventuale errore */}
    {error && <p style={{ color: "red" }}>{error}</p>}



      {/* Mostro il post creato */}
    {createdPost && (
        <div style={{ marginTop: "1rem" }}>
        <h4>Post creato:</h4>
        <p><strong>ID:</strong> {createdPost.id}</p>
        <p><strong>Titolo:</strong> {createdPost.title}</p>
        <p><strong>Contenuto:</strong> {createdPost.body}</p>
        </div>
    )}
    </div>
);
}
/*Se il server ha restituito un post, lo mostra in pagina.
Concettualmente:  
È la “prova” che la POST è andata a buon fine.
React legge i dati salvati in createdPost e li trasforma in HTML.*/