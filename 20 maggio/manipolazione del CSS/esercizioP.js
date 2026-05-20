//Selezionare gli elementi tramite getElementById()

// BLOCCO 1: Selezionare gli elementi dal DOM

const titolo = document.getElementById("titolo");     // prendo l'elemento <h1> con id "titolo"
const divTesto = document.getElementById("testo");    // prendo il div che contiene il testo
const input = document.getElementById("inputTesto");  // prendo il campo di input
const lista = document.getElementById("lista");       // prendo la lista <ul>
const btnAggiungi = document.getElementById("btnAggiungi"); // prendo il bottone per aggiungere
const btnModifica = document.getElementById("btnModifica"); // prendo il bottone per modificare titolo
const btnElimina = document.getElementById("btnElimina");   // prendo il bottone per eliminare ultimo elemento

//Passaggio importante per agganciare i contenuti HTML a Javascript

//Blocco 2: leggere il valore scritto

const testoInserito = input.value;   // leggo il contenuto scritto dall'utente nel campo input
console.log(testoInserito);          // stampo per verificare che sia stato letto

//Passaggio semplice di visione

//Blocco 3: Aggiungere elementi li -- lista non ordinata da HTML
const nuovoLi = document.createElement("li");   // creo un nuovo elemento di tipo <li>

//Blocco 4: aggiungere il nuovo elemento alla lista

lista.appendChild(nuovoLi);   // aggiungo il nuovo nodo <li> come figlio del nodo genitore lista <ul>
                              // appendChild() metodo che aggiunge un nodo dentro un altro nodo

//blocco 5: Modifica del testo
btnModifica.addEventListener("click", function() {   // ascolto il click sul bottone "Modifica titolo" tramite il metodo addEventListener
  titolo.textContent = "Titolo modificato!";         // cambio il testo del titolo con "titolo modificato"
});


//blocco 6: eliminare ultimo elemento della lista
btnElimina.addEventListener("click", function() {    // ascolto il click sul bottone "Elimina" tramite lo stesso metodo del blocco precedente
  if (lista.lastChild) {                             // controllo che la lista non sia vuota
    lista.removeChild(lista.lastChild);              // rimuovo l'ultimo elemento <li> della lista
  }
});


