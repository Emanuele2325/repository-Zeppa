//Creazione funzione che trasfrorma un testo in maiuscolo

function maiuscolo (testo) {
    return testo.toUpperCase(); //Il metodo toUpperCase() restituisce la stringa convertita in lettere maiuscole.
}

//Contare un numero di caratteri in una stringa
function contaCaratteri (testo) {
    return testo.length; //Il metodo length restituisce la lunghezza di una stringa.

}

//controllare se una stringa/parola contenga una lettera

function contieneLettera (testo, lettera) {
    return testo.includes(lettera); //Il metodo includes() determina se una stringa contiene una determinata sequenza di caratteri, 
    // restituendo true o false.
}

module.exports = {  //Esportazione delle funzioni create in modo che possano essere utilizzate in altri file
    maiuscolo,
    contaCaratteri,
    contieneLettera
};

