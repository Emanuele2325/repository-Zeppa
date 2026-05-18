let eta = 18;

if (eta >= 18){
    console.log("Sei maggiorenne");

}   
else{
    console.log("Non sei maggiorenne");
}

// altro esempio, strutturato

let voto = 75;

if (voto >= 90) {
    console.log("Ottimo");
} 
else if (voto >= 80) {
    console.log("Buono");
}
else if (voto >= 70) {
    console.log("Sufficiente");
}




// Variabili con operatori booleani

let eta = 20;
let patente = true;
let abbonamento = false;

// Condizioni con And (&&) -- Entrambe devono essere confermate
if (eta >= 18 && patente === true) {
    console.log("Puoi guidare");
} 
else {
    console.log("Non puoi guidare");
}

// Condizioni con Or (||) -- Basta che una sia confermata
if (eta < 18 || abbonamento === true) {
    console.log("Hai uno sconto speciale");

}

// Condizioni con Not (!) -- Inverte il valore booleano
if (!abbonamento) {
    console.log("Non hai un abbonamento attivo");
}

//Condizioni più complesse -- ARTE DELLE CONDIZIONI
if ((eta >= 18 && patente) || abbonamento) {
    console.log("Accesso consentito");
}
else {    
    console.log("Accesso negato");
}


// Switch case -- Alternativa a if-else per più condizioni discrete
let giorno = 2;

switch (giorno) {
    case 1:
        console.log("Lunedì");
        break;
    case 2:
        console.log("Martedì");
        break;
    case 3:
        console.log("Mercoledì");
        break;
    
    default:
        console.log("Giorno non valido");

}


// Condizioni - switch con break
let x = "5";    //

switch (x) {
    case 5:     // Non funziona perché x è una stringa, non un numero
        console.log("x è il numero 5");
        break;
    case "5":   // Funziona perché x è una stringa
        console.log("x è la stringa '5'");
        break;
}





let valore = 2;

switch (valore) {
    case 1:
    console.log("Uno");
    case 2:
    console.log("Due");
    case 3:
    console.log("Tre");

 break;
}


let giorno = 6;

switch (giorno) {
    case 6:
    case 7:
        console.log("È il weekend");
        break;
    default:
        console.log("È un giorno feriale");
}



