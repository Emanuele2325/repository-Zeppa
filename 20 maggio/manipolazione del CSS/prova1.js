let bottone = document.getElementById("btn");

let testo = document.getElementById("testo");


bottone.addEventListener("click", function() {

    // Aggiunge o rimuove la classe CSS

    testo.classList.toggle("evidenziato"); //toggle va a dire attiva, inserisci. 

});

