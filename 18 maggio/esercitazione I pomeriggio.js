//Scrivere un programma che chiede all'utente di inserire una serie di numeri (uno alla volta), l'inserimento termina quando l'utente digita 0
//i valore devono esserre salvati in un array
//Successivamente il programma deve:
// - Verificare tramite condizione che ogni valore inserito sia numerico, ignorando eventuali input non validi
// - utilizzare un ciclo per analizzare l'array e separare i numeri in due nuovi array: uno per i numeri pari e uno per i numeri dispari
// - calcolare la somma totale dei numeri inseriti
// - determinare il valore massimo e minimo presenti nell'array
// Infine, il programma deve stampare in output:
// - Tutti i numeri inseriti
// - l'array dei numeri pari
// - l'array dei numeri dispari
// - la somma totale
// - il valore massimo e minimo

//Gestire eventuali casi limite, come array vuoto o input non validi.

const prompt = require("prompt-sync")();

// STEP 1 - Raccogliere i numeri
let numeri = [];    //Creiamo un array vuoto per salvare i numeri inseriti dall'utente
let input = prompt("Inserisci un numero (0 per terminare): "); //Chiediamo all'utente di inserire un numero, e salviamo l'input in una variabile

while (input!=="0") { //Finché l'utente non digita "0", continuiamo a chiedere numeri
    let numero = Number(input); //Convertiamo l'input in un numero. Se l'input non è un numero valido, Number() restituirà NaN
    if (!isNaN(numero)) { 
        numeri.push(numero); //Se il numero è valido, lo aggiungiamo all'array dei numeri
    }
    input = prompt("Inserisci un numero (0 per terminare): "); //Chiediamo nuovamente un numero all'utente
}


// STEP 2 - Separare numeri pari e dispari
let pari = [];
let dispari = [];

for (let numero of numeri) {
    if (numero % 2 === 0) {
        pari.push(numero); //Se il numero è pari, lo aggiungiamo all'array dei numeri pari

    } else {
        dispari.push(numero); //Se il numero è dispari, lo aggiungiamo all'array dei numeri dispari
    }
} //Scorriamo ogni numero nell'array dei numeri inseriti 



// STEP 3 - Calcolare la somma totale
let somma = 0;

for (let numero of numeri) {
    somma += numero; //Aggiungiamo ogni numero alla variabile somma
}

// STEP 4 - Trovare massimo e minimo
let massimo = [0]; //creamo una variabile per il massimo, inizializzata a 0 
let minimo = [0]; //creamo una variabile per il minimo, inizializzata a 0 

for (let numero of numeri) {

  // Se trovo un numero più grande, aggiorno il massimo
  if (numero > massimo) {
    massimo = numero;
  }

  // Se trovo un numero più piccolo, aggiorno il minimo
  if (numero < minimo) {
    minimo = numero;
  }
}

// STEP 5 - Stampare i risultati
console.log("Numeri inseriti: " , numeri); //Stampiamo tutti i numeri inseriti, uniti da una virgola
console.log("Numeri pari: " , pari); //Stampiamo l'array dei numeri pari, uniti da una virgola
console.log("Numeri dispari: " , dispari); //Stampiamo l'array dei numeri dispari, uniti da una virgola
console.log("Somma totale: " , somma); //Stampiamo la somma totale
console.log("Valore massimo: " , massimo); //Stampiamo il valore massimo
console.log("Valore minimo: " , minimo); //Stampiamo il valore minimo
