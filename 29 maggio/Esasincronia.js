//Callback 

//Definire una funzione che riceve una stringa e una callback
function InvertiStringaAsincrona (testo, callback) { //testo è la stringa da invertire, callback è la funzione da eseguire dopo aver invertito
    if (!testo) {   //controlla se la stringa è vuota. Se è !testo, allora
        console.log ("La stringa è vuota"); //stampa un messaggio di errore
        return; //ed esci dalla funzione
    }


setTimeout(() => {  //setTimeout è una funzione che esegue una funzione dopo un certo tempo. In questo caso, esegue la funzione dopo 1500 millisecondi (1.5 secondi)

// Uso setTimeout per simulare un'operazione lenta (asincrona)

const risultato = testo.toUpperCase();

//richiamo la Callback con il risultato
callback(risultato);
}, 1500); 

}

//commento blocco: setTimeout simula un'operazione lenta, come una richiesta a un server o un'elaborazione complessa. 
//Dopo 1.5 secondi, converte la stringa in maiuscolo e chiama la callback con il risultato.

InvertiStringaAsincrona("ciao mondo", (output) => {     //("ciao mondo" è la stringa da invertire, (output) => {...} è la callback che riceve il risultato)
  console.log("Risultato asincrono:", output); // Stampa il risultato dopo 1,5 secondi
});

//commento blocco: Qui chiamiamo la funzione InvertiStringaAsincrona con la stringa "ciao mondo" e una callback che stampa il risultato. 
//Dopo 1.5 secondi, vedremo "Risultato asincrono: CIAO MONDO" nella console.


//Questo blocco mostra l’asincronia classica: setTimeout fa aspettare il codice senza bloccare il resto del programma.
//La callback è la funzione che viene eseguita solo quando l’operazione è finita.
//È il primo passo per capire come JS gestisce operazioni “in background”.





// Blocco 2: Refactoring con Promise
function InvertiStringaConPromise (testo) {
        return new Promise((resolve, reject) => { 
//La funzione restituisce una nuova Promise. 
// La Promise è un oggetto che rappresenta un'operazione asincrona che può essere completata con successo (resolve) o fallire (reject).})
if (!testo) {
      reject("Errore: la stringa è vuota."); // Invio un messaggio d'errore
      return; // Interrompo la funzione


}

// Simulo un'operazione asincrona con setTimeout
    setTimeout(() => {

// Converto la stringa in maiuscolo
const risultato = testo.toUpperCase();

// 'resolve' indica che la Promise è completata con successo
resolve(risultato);
    }, 1500);
});
}
//resolve e reject, in un unico blocco


//metodi .then e .catch per gestire il risultato della promise in due casi separati
// Uso della Promise con i metodi .then() e .catch()
invertiStringaAsincrona("ciao mondo")
  // .then() viene eseguito quando la Promise è risolta (successo)
.then((output) => { //output è il risultato passato da resolve
    console.log("Risultato con Promise:", output);
})
  // .catch() viene eseguito se la Promise è rifiutata (errore)
.catch((errore) => {    //errore è il messaggio passato da reject
    console.error("Errore:", errore);
});


//La prima parte (funzione) è la fabbrica della Promise. Crea e restituisce un oggetto che rappresenta un’operazione asincrona.
//La seconda parte (metodi .then() e .catch()) è il modo per leggere il risultato di quella Promise.








// Blocco 3: Async/Await
async function eseguiConversione(){ //async indica che la funzione eseguiConversione è asincrona e può utilizzare await, 
//che fa si che il codice aspetti la risoluzione della Promise prima di continuare

//try/catch per gestire errori
try {
    const risultato = await InvertiStringaAsincrona("ciao mondo"); //await fa si che il codice aspetti la risoluzione della Promise restituita da InvertiStringaAsincrona
//Una volta completata la Promise, si stampa il risultato
    console.log("Risultato con Async/Await:", risultato);


}catch (errore) { //se c'è un errore, viene catturato qui
    console.error("Errore:", errore);   //.error è un metodo di console che stampa un messaggio di errore
}

// Chiamo la funzione asincrona
eseguiConversione();

}