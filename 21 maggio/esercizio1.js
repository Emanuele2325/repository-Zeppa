//BLOCCO 1 — Selezione degli elementi del DOM

const form = document.getElementById("formLibro"); // seleziono il form
const contenitore = document.getElementById("contenitoreLibri"); // seleziono il contenitore delle card
const hamburger = document.getElementById("hamburger"); // seleziono il pulsante hamburger
const menu = document.getElementById("vociMenu"); // seleziono la lista del menu

//Aggancio gli elementi HTML che useremo nel codice js. 


// BLOCCO 2: Gestione dell’invio del form

form.addEventListener("submit", function(event) {   //Quando il form viene inviato, eseguire questa funzione. CONCETTO
    event.preventDefault();                         //Il browser, quando invii un form, ricarica la pagina. preventDefault() 
                                                    //blocca questo comportamento.

const titolo = document.getElementById("titolo").value;     //cerco l'Input con ID titolo, ne prelevo il testo e lo assegno alla variabile creata 
const autore = document.getElementById("autore").value;     //stesso ragionamento
const genere = document.getElementById("genere").value;
const anno = document.getElementById("anno").value;
const descrizione = document.getElementById("descrizione").value;

// BLOCCO 4: Creazione card dinamicamente

const card = document.createElement("div"); //Creo un nuovo elemento HTML <div>. Non esisteva prima, lo sto creando su js

// BLOCCO 5: aggiungi semplicemente la classe su CSS
card.classList.add("card");

// BLOCCO 6: Riempire la card con i dati del libro
// riempio la card con i dati del libro
card.innerHTML = `                            
    <h3>${titolo}</h3>
    <p><strong>Autore:</strong> ${autore}</p>   
    <p><strong>Genere:</strong> ${genere}</p>
    <p><strong>Anno:</strong> ${anno}</p>
    <p>${descrizione}</p>
`;

//innerHTML permette di inserire HTML dentro il div
//${variabili} -- inseriscono i valori scritti dall’utente in compilazione

  //BLOCCO 7: aggiungo la card nel contenitore
contenitore.appendChild(card);      

//il nuovo elemento viene aggiunto alla lista presente nella pagina. Richiami la variabile creata contenitore e ne aggiungi alla lista i
//valori di card creata nel blocco 4

  //BLOCCO 8: svuoto il form dopo l’inserimento
form.reset();
});