//Importazione modulo

//si importa prima prompt-sync
const prompt = require('prompt-sync')(); // Importazione del modulo prompt-sync, che consente di leggere input dall'utente tramite la console.log 

//si importa il modulo testo.js 
const testo = require('./testo'); // Importazione del modulo testo.js, dove ./ indica che il file si trova nella stessa directory di app.js

//Chiedere all'utente di inserire una frase tramite console
const frase = prompt('Inserisci una frase: ');

//funzioni del modulo da utilizzare
const fraseMaiuscola = testo.maiuscolo(frase); // Utilizzo della funzione maiuscolo del modulo testo.js per trasformare la frase in maiuscolo

const numeroCaratteri = testo.contaCaratteri(frase); // Utilizzo della funzione contaCaratteri del modulo testo.js per contare il numero di caratteri nella frase

const contieneLaLettera = testo.contieneLettera(frase, 't'); // Utilizzo della funzione contieneLettera del modulo testo.js per controllare se la frase contiene la lettera 't'

//Stampare i risultati in console
console.log("\nRISULTATI ");


// Testo originale
console.log("Testo originale:"); 
console.log(frase);


// Testo maiuscolo
console.log("\nTesto maiuscolo:");
console.log(fraseMaiuscola);    // Il risultato della funzione maiuscolo viene stampato in console, mostrando la frase trasformata in lettere maiuscole.
//esempio: se l'utente inserisce "ciao" --> primo console.log stamperà "Testo originale:" e il secondo console.log stamperà "CIAO" 
// (la frase in maiuscolo).


// Numero caratteri
console.log("\nNumero caratteri:");
console.log(numeroCaratteri);


// Controllo lettera
console.log("\nContiene la lettera?");
console.log(contieneLaLettera);

