// Importo useState per gestire messaggi e loading
import { useState } from "react";

// Definisco il componente figlio
export default function SubmitPostButton({ getFormData, resetForm }) {

// Stato per mostrare messaggi
const [message, setMessage] = useState("");

// Stato per gestire il caricamento
const [loading, setLoading] = useState(false);

// Funzione che parte quando clicco il bottone
const handlePost = async () => {

    // Mostro "Invio in corso..."
    setLoading(true);

    // Recupero i dati dal form (dal padre)
    const formData = await getFormData();

    try {
      // Faccio la POST
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

//Tutto quello che può generare errori (rete, server, JSON) lo metti dentro il try.
//const response = await fetch("https://jsonplaceholder.typicode.com/posts", { ... })
//fetch(...) → funzione che fa una richiesta HTTP.
//URL: endpoint dei post di JSONPlaceholder.
//method: "POST" → stai dicendo “voglio inviare dati”.
//headers: { "Content-Type": "application/json" } → informi il server che il corpo è JSON.
//body: JSON.stringify(formData) → trasformi l’oggetto formData (es. { title, body, userId }) in stringa JSON.

//Concetto: qui “parli” con il server e gli dici: “Ehi, crea un nuovo post con questi dati”.

// Converto la risposta
    const data = await response.json();

//La risposta HTTP (response) contiene il corpo in formato JSON.
//.json() lo trasforma in oggetto JavaScript.
//await aspetta che la conversione sia finita.

//concetto: ora hai in data il post che il server ti restituisce, con un id finto generato da JSONPlaceholder.

    // Mostro un messaggio di conferma
    setMessage(`Post creato con ID: ${data.id}`);
//setMessage(\Post creato con ID: ${data.id}\);
//Quando cambi stato → React ridisegna il componente → il messaggio appare in pagina.

    // Pulisco il form
    resetForm();
//resetForm è la funzione che il padre ti ha passato (in realtà è reset di React Hook Form).
//Concetto: “Ho finito di usare i dati, ora pulisco il form per un nuovo inserimento”.



    } catch {
    setMessage("Errore nella creazione del post");
    } finally {
    setLoading(false);
    }
};
//Se qualcosa dentro il try va storto (rete, server, ecc.), il flusso salta qui.
//Il blocco finally viene eseguito sempre: sia se la POST ha successo, sia se fallisce.



return (
    <div style={{ marginTop: "1rem" }}>
      {/* Bottone che fa partire la POST */}
    <button type="button" onClick={handlePost} disabled={loading}>
        {loading ? "Invio in corso..." : "Invia post"}
    </button>

      {/* Mostro messaggi */}
    {message && <p>{message}</p>}
    </div>
);
}

//type="button": il bottone non invia il form HTML, è solo un bottone “normale”.
//onClick={handlePost} -> quando l’utente clicca, parte la funzione handlePost (quella che contiene il try/catch con la POST).
//disabled={loading}:
//se loading è true → il bottone è disabilitato (non cliccabile); se loading è false → il bottone è attivo.

//Concetto: “Finché sto inviando i dati, non permetto altri click”.

//{loading ? "Invio in corso..." : "Invia post"}
//Se loading è true → mostro "Invio in corso..."; se loading è false → mostro "Invia post".

//{message && <p>{message}</p>} --> Rendering condizionale
//Se message è una stringa non vuota → mostro il paragrafo con il messaggio; se message è una stringa vuota → non mostro nulla.


/*Riceve i dati dal padre tramite getFormData e resetForm. Quando clicchi il bottone:
- mette loading = true
- chiede i dati del form al padre (formData)
- prova a fare la POST (try)
- se va bene:
- mostra “Post creato con ID: …”
- resetta il form
se va male:
- mostra “Errore nella creazione del post”
in ogni caso:
mette loading = false (toglie “Invio in corso…”)*/