//importa moduli necessari

const http = require ('http'); // Importazione del modulo http, che consente di creare un server web in Node.js
const fs = require ('fs'); // Importazione del modulo fs, che consente di lavorare con il file system, ad esempio per leggere o scrivere file




// Crea il server
const server = http.createServer((req, res) => { // Creazione di un server HTTP che ascolta le richieste in arrivo. La funzione callback viene eseguita ogni volta che il server riceve una richiesta. I parametri req e res rappresentano rispettivamente la richiesta del client e la risposta del server.

// Legge il file HTML
fs.readFile("index.html", (errore, dati) => { // Utilizzo del metodo readFile del modulo fs per leggere il file index.html. La funzione callback viene eseguita una volta che il file è stato letto, con i parametri errore e dati che rappresentano rispettivamente eventuali errori durante la lettura e i dati del file letto.


// Controlla eventuali errori
if (errore) {

res.writeHead(500, { "Content-Type": "text/plain" }); //500 è un codice di stato HTTP che indica un errore interno del server. 

res.end("Errore nel caricamento del file");

return;

}

//blocco if: se c'è un errore durante la lettura del file, il server risponde con un codice di stato 500 (Internal Server Error) 
//e un messaggio di errore in formato testo. La funzione res.end() viene chiamata per terminare la risposta e restituire il messaggio al client. 
//Il return viene utilizzato per uscire dalla funzione callback in caso di errore, evitando di eseguire il codice successivo che invia il file HTML al browser.


// Invia il file HTML al browser
res.writeHead(200, { "Content-Type": "text/html" }); // Se non ci sono errori, il server risponde con un codice di stato 200 (OK) e 
//un'intestazione che specifica il tipo di contenuto come "text/html".

res.end(dati);  // La funzione res.end() viene chiamata per inviare i dati del file HTML al client e terminare la risposta.

});

});


// Avvia il server
server.listen(3000, () => {

    console.log("Server avviato su http://localhost:3000");

});

