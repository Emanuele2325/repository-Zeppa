// Importa il modulo HTTP integrato di Node.js
const http = require("http");

// Crea il server
const server = http.createServer((req, res) => {


    // Leggo richiesta

    console.log(req.url);


    // Invio risposta

    res.write("Ciao");


    // Chiudo risposta

    res.end();

});
