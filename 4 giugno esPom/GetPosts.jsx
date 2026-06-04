//Importo useState e useEffect perché mi servono per:
// - salvare i dati ricevuti
// - fare la chiamata API quando il componente viene caricato
import { useState, useEffect } from "react";    //useState serve per memorizzare i dati, useEffect serve per eseguire codice al montaggio del componente

//Definisco il componente GetPosts
//Concettualmente: questo componente si occupa SOLO di leggere dati dal server
export default function GetPosts() {

//Creo uno stato per salvare i post ricevuti
//Parte come array vuoto perché ancora non ho i dati
const [posts, setPosts] = useState([]);

//Cosa fa: Crea una variabile posts e una funzione setPosts per aggiornarla.
//Concettualmente:  All’inizio non hai nessun post, quindi parti con un array vuoto. Quando la fetch finisce, setPosts() aggiorna
// lo stato e React ridisegna la pagina.


//Creo uno stato per gestire il caricamento
const [loading, setLoading] = useState(true);

//Cosa fa: Tiene traccia se stai ancora caricando.
//Concettualmente: Serve per mostrare un messaggio tipo “Caricamento…” finché i dati non arrivano.


//Creo uno stato per eventuali errori
const [error, setError] = useState(null);

//Cosa fa: Tiene traccia di eventuali errori.
//Concettualmente: Se la chiamata fallisce, setError() salva un messaggio che React mostrerà in pagina.


// useEffect viene eseguito SOLO al montaggio del componente
useEffect(() => {
// Concettualmente: "quando il componente appare in pagina, fai la GET"


//Funzione asincrona che fa la chiamata API
const fetchPosts = async () => {
    try {
    // Faccio 3 chiamate GET in parallelo per i post 1, 2 e 3
        const ids = [1, 2, 3];

    // Promise.all aspetta che tutte le fetch siano completate
        const responses = await Promise.all(
        ids.map(id => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`))
        );

        // Converto tutte le risposte in JSON
        const data = await Promise.all(responses.map(res => res.json()));

/*  - try → tenti di eseguire la chiamata.
    - ids = [1, 2, 3] → scegli i post da scaricare.
    - Promise.all(...) → fai 3 chiamate in parallelo.
    - res.json() → converti le risposte in oggetti JavaScript.
    - setPosts(data) → salvi i dati nello stato.
    - catch → se qualcosa va storto, salvi un messaggio di errore.
    - finally → in ogni caso, togli il “Caricamento…” impostando loading a false.
*/

/*Concettualmente
Sto chiedendo dati al server (GET).
Se tutto va bene → li salvi e li mostri.
Se qualcosa va male → mostri un messaggio d’errore.
Quando finisci → togli il messaggio “Caricamento”.*/


// Salvo i dati nello stato
    setPosts(data);
} catch {
setError("Errore nel caricamento dei post");
    } finally {
        // In ogni caso, il caricamento è finito
        setLoading(false);
    }
    };

/*Cosa fa: Chiama la funzione che hai appena definito.
Concettualmente:  
È il momento in cui “parte” la GET.
React esegue questa riga solo una volta, perché l’array di dipendenze sotto è vuoto.*/ 

fetchPosts();

}, []); // Array vuoto = esegui solo al primo render

  // Se sto ancora caricando, mostro un messaggio
if (loading) return <p>Caricamento...</p>;  //Se loading è vero, mostra un messaggio.

  // Se c'è un errore, lo mostro
if (error) return <p>{error}</p>;   // Se c’è un errore, mostra il messaggio salvato. È un’altra condizione di rendering: se la fetch fallisce, React mostra l’errore invece dei dati.

  // Se tutto è ok, mostro i post
return (
    <ul>
    {posts.map(post => (
        // Ogni elemento deve avere una key unica
        <li key={post.id}>
        <strong>Post {post.id}:</strong> {post.title}
        </li>
))}
    </ul>
);
}


/*posts.map() → trasforma ogni oggetto post in un elemento <li>.
key={post.id} → serve a React per identificare ogni elemento.
{post.title} → mostra il titolo del post.*/ 

/*Concettualmente
Sto convertendo dati in interfaccia.
Ogni post diventa una riga della lista.
React “legge” l’array e lo trasforma in HTML.*/ 