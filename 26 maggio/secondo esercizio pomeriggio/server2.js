// È il cuore dell’esercizio: crea il server, riceve la richiesta, capisce se l’utente vuole A/B/C e restituisce la pagina corretta.

// BLOCCO 1: Import dei moduli
const http = require('http');   //Importo il modulo http per creare un server.
const fs = require('fs');       //Importo il modulo fs per leggere i file HTML.
const url = require("url");    // Importo il modulo 'url', serve per leggere i parametri della richiesta

// BLOCCO 2: Creazione del server
const server = http.createServer((req, res) => {   // Creo il server e definisco cosa deve fare ad ogni richiesta
const parsedUrl = url.parse(req.url);    // Estraggo le informazioni dall'URL (es: ?page=a)
const page = parsedUrl.query.page;       // Recupero il parametro 'page' passato dall'utente

//riga 10: metodo parse del variabile url, serve per leggere i parametri della richiesta -- (req.url) Legge l’URL della richiesta
//riga 11: creo variabile page, che è uguale a parsedUrl.query.page, ovvero .query è un oggetto che contiene tutti i parametri passati nell'URL,
//e page è il parametro specifico che vogliamo leggere. 

//Blocco 3: la scelta della pagina
let filePath = "";                                   // Variabile che conterrà il percorso del file HTML da inviare

    if (page === "a") {                              // Se l'utente ha scelto 'a'
        filePath = "./home.html";                    // Mostro la pagina Home
    } else if (page === "b") {                       // Se l'utente ha scelto 'b'
        filePath = "./info.html";                    // Mostro la pagina Info Creatore
    } else if (page === "c") {                       // Se l'utente ha scelto 'c'
        filePath = "./calc.html";                    // Mostro la pagina Calcolatrice
    } else {                                         // Se non sceglie nulla o sbaglia
        filePath = "./home.html";                    // Mostro comunque la Home
    }

//filePath è una stringa che contiene il percorso del file HTML da inviare in base alla scelta dell'utente. 


// BLOCCO 4: Lettura del file e invio della risposta
    fs.readFile(filePath, (err, data) => {           // Leggo il file HTML scelto
        if (err) {                                   // Se c'è un errore (file non trovato)
            res.writeHead(500, { "Content-Type": "text/plain" });  // Risposta di errore. 500 è il codice interno del server
            res.end("Errore interno del server");    // Messaggio di errore
            return;                                   // Esco dalla funzione
        }

        res.writeHead(200, { "Content-Type": "text/html" });  // Imposto l'header come HTML. 200 codice di riuscita
        res.end(data);                               // Invio il contenuto del file al browser
    });
});


server.listen(3000, () => {                          // Il server ascolta sulla porta 3000
    console.log("Server avviato su http://localhost:3000");  // Messaggio di conferma
});


