// Importo il modulo 'fs' che serve per leggere file dal computer
const fs = require('fs');       //'fs' sta per file stystem e permette di leggere, scrivere e gestire i file sul computer. 
// Require funzione che riporta un modulo
// In questo caso, lo useremo per leggere un file di testo chiamato 'prova.txt'. E' un Modulo integrato. 

// Creo una funzione che leggerà il file di testo
function mostraMessaggio() {



// riga di debug per il controllo del problema
// Debug: mostra il percorso esatto del file che Node cercherà
console.log("Percorso del file:", __dirname + '/FileProva.txt');



// Leggo il file FileProva.txt
fs.readFile(__dirname + '/FileProva.txt', 'utf8', function(error, contenuto) { //readFile è una funzione che legge un file. Prende tre argomenti: 
// il nome del file, la codifica (utf8) che serve per leggere il testo e una funzione di callback che gestisce il risultato della lettura. 
// La funzione di callback riceve due argomenti: error (se c'è stato un errore) e contenuto (il testo letto dal file).


// Se c'è un errore, lo mostro
if (error) {
    console.log("Errore nella lettura del file:", error);
    return; //c'è un errore ed esco dalla funzione 
}

// Se tutto va bene, stampo il contenuto
console.log("Contenuto del file:");
console.log(contenuto);

});


// Esporto la funzione così posso usarla in altri file
module.exports = { 
    mostraMessaggio
};

}
