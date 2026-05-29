//BLOCCO 1 — Inizializzazione e setup del server

const express = require("express"); // Importa il framework Express, utile per la creazione del server e la gestione delle richieste HTTP
const app = express(); //crea l'istanza del server Express
const PORT = 5000; //Definisce la porta su cui il server ascolterà le varie richieste

//contesto: per serverREST si intende di un server che espone dati o funzionalità tramite API HTTP, 
//seguendo le regole dell’architettura REST


//In pratica:
//il server riceve richieste da un client (browser, app, ecc.);
//ogni richiesta usa un metodo HTTP (GET, POST, PUT, DELETE);
//il server risponde con dati in formato JSON e uno status code (200, 404, 201…);
//ogni “risorsa” (in questo caso, i videogiochi) ha un endpoint dedicato, come /api/giochi o /api/giochi/:id.
//Quindi, in questo esercizio, il server REST è un server Express che fornisce dati strutturati (videogiochi) tramite URL e metodi HTTP, 
//permettendo al client di leggerli o gestirli.

//BLOCCO 2 - Creazione risorsa, ovvero array di videogiochi che la API REST esporrà
const videogiochi = [
{ id: 1, nome: "The Legend of Zelda: Breath of the Wild", piattaforma: "Nintendo Switch" },
{ id: 2, nome: "God of War", piattaforma: "PlayStation 5" }, 
{ id: 3, nome: "Red Dead Redemption 2", piattaforma: "PC" },
]


//BLOCCO 3 - Permettere la lettura di tutti i videogiochi

app.get("/api/giochi", (req, res) => {  // app è l'istanza del server Express, con .get si utilizza questo metodo, di tipo HTTP, per gestire
    //le richieste GET all'endpoint "/api/giochi". È il verbo HTTP usato per “dammi qualcosa”. 
    //req è l'oggetto che rappresenta la richiesta del client, res è l'oggetto che rappresenta la risposta del server. In questo caso si tratta di
    //una richiesta per ottenere la lista di videogiochi, CALLBACK
res.status(200).json(videogiochi); //.status(200) imposta lo status code della risposta a 200, che indica successo.
//.json() è un metodo di Express che invia una risposta JSON al client. In questo caso, invia l'array di videogiochi come risposta.
});


//BLOCCO 4 - Permettere la lettura di un singolo videogioco tramite ID
app.get("/api/giochi/:id", (req, res) => { // Qui gestiamo le richieste GET all'endpoint "/api/giochi/:id".
    const idRichiesto = parseInt(req.params.id); //parseInt converte la stringa in un numero intero. 
    //req.params.id è il parametro che rappresenta l'ID del videogioco richiesto, estratto dall'URL
    const gioco = videogiochi.find(g => g.id === idRichiesto);  // .find() è un metodo degli array JavaScript.
    //g => g.id === idRichiesto è una funzione di callback che confronta l'ID di ogni videogioco con l'ID richiesto.


if (!gioco) {
return res.status(404).json({ errore: "Risorsa non individuata nel sistema" }); // Se il videogioco non viene trovato, restituisce una risposta 
// con status code 404 e un messaggio di errore in formato JSON.
res.status(200).json(gioco);// Se trovato, invio il singolo oggetto con status 200
}

});  

//BLOCCO 5 - Avvio del server
app.listen(PORT, () => {   // Avvio il server Express
  console.log(`Server attivo sulla porta ${PORT}`); // Messaggio di conferma in console. Simbolo dollaro ${PORT} è una sintassi di template literal che permette di inserire il valore della variabile PORT direttamente nella stringa.
});

//Concettualmente: il server è operativo e pronto a ricevere richieste HTTP lato client. 