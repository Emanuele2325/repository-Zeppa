// Esempio for

for (let i = 0; i < 3; i++) {
console.log(i); // 0, 1, 2
}

// Esempio while
let i = 0;

while (i < 3) {
console.log(i); // 0, 1, 2
 i++;
}


// Esempio do-while
let i = 0;

do {
console.log(i); // 0, 1, 2
 i++;

} while (i < 3);

//una volta lo fa, poi controlla la condizione, se è vera continua, altrimenti esce



// Do-While booleano
//Esempio presente: do while con uscita tramite input utente

//modulo per input da console
const prompt = require("prompt-sync")();

//dichiarazione variabile di tipo booleano
let attivo = true;

//ciclo presentato
while (attivo) {

    //input utente
    let comando = prompt ("Scrivi qualcosa (digita 'esci' per terminare): ");

    //controllo comando
    if (comando === "esci") {
        console.log("Programma terminato.");
        attivo = false; //uscita dal ciclo
} else{
    console.log("Hai scritto: " + comando);
}

}
