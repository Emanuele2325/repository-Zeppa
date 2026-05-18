//Scrivere un programma che chieda all'utente di inserire un numero intero positivo N.
//Il programma deve utilizzare un ciclo per analizzare tutti i numeri da 1 a N e contare quanti di questi sono pari e quanti dispari. 
//Alla fine, deve stampre in output il numero totale di valori pari e dispari trovati.
//Se l'utente inserisce un valore non valido (ad esempio un numero negativo o non numerico), il programma deve segnalarlo tramite un messaggio di errore



// Input utente
const prompt = require("prompt-sync")();

// Variabili
let n = 0;
let contatorePari = 0;
let contatoreDispari = 0;

// Input
n = parseInt(prompt("Inserisci un numero intero N: "));
// L'utente decide fino a che numero contare


// Ciclo da 1 fino a N
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        contatorePari++;
    } else {
        contatoreDispari++;
    }
}
// Abbiamo scorso tutti i numeri da 1 a N e contato pari e dispari

// Risultato
console.log("Numeri pari trovati: " + contatorePari);
console.log("Numeri dispari trovati: " + contatoreDispari);
// Stampiamo i risultati finali 