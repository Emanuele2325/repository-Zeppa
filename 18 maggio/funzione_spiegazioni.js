//come viene scritta una funzione

function somma (a,b) {  //funzione
    return a + b; //la parola chiave return indica il valore che la funzione restituirà quando viene chiamata

} 

let risultato = somma(3,5); //chiamata della funzione, con i parametri 3 e 5
console.log(risultato); //stampa del risultato della funzione, ovvero 8

//Funzione è la comprova pratica dell'ASTRAZIONE. se non richiamo in questo caso, somma, non fa nulla. 

function differenza (a,b, c = "ciao") {
    return a / b + " " + c;
}

let risultato2 = differenza(10,5); //chiamata della funzione, con i parametri 10 e 5. Il terzo parametro non è stato fornito, quindi utilizza il valore predefinito "ciao"
console.log(risultato2); //stampa del risultato della funzione, ovvero 2 "ciao"


//funzione serve per indipendenza; metodo serve per organizzare il codice in modo più chiaro e leggibile.



//Esempio in slide:

//Funzione DICHIARATIVA
function somma (a,b) {  //funzione
    return a + b; //la parola chiave return indica il valore che la funzione restituirà quando viene chiamata
}

let risultato = somma(3,5); //chiamata della funzione, con i parametri 3 e 5
console.log(risultato); //stampa del risultato della funzione, ovvero 8

//definita con la parola chiave "function", è "hoistata", ovvero può essere chiamata prima della sua definizione nel codice.






//Funzione espressa: assegnata a una variabile, quindi non è utilizzabile prima della sua definizione. 
const moltiplica = function (a, b) {
    return a * b;
};

console.log(moltiplica(4, 2)); //stampa del risultato della funzione, ovvero 8



//Arrow function: sintassi più compatta, non ha il proprio "this" e non può essere usata come costruttore.
const sottrai = (a, b) => a - b; //funzione espressa con sintassi arrow

console.log(sottrai(10, 3)); //stampa del risultato della funzione, ovvero 7


//Parametri e return: i parametri sono variabili locali alla funzione; return interrompe l'esecuzione e restituisce un valore.
function saluta (nome) {
    return "Ciao, " + nome;
}

let messaggio = saluta ("Mirko"); //chiamata della funzione, con il parametro "Mirko"
console.log(messaggio); //stampa del risultato della funzione, ovvero "Ciao, Mirko"