//Selezionare elementi DOM con la funzione getElementById

const input = document.getElementById("InputElemento")  //prendo il campo dove l'utente scrive
const btnAggiungi = document.getElementById("btnAggiungi")  //prendo il tasto che aggiunge elemento
const btnSvuota = document.getElementById("btnSvuota")      //prendo il tasto che svuota la lista
const lista = document.getElementById("lista")              // prendo la lista non ordinata dove vengono inserite le opzioni
const contatore = document.getElementById("contatore")      //prendo il paragrafo dove che mostra quanti elementi ci sono

//Blocco 2:
//leggere input 

const testo = input.value;     // leggo il contenuto scritto dall'utente nel campo input
console.log(testo);            // lo stampo in console per verificare che sia stato letto correttamente


// Questo blocco serve solo a prendere il testo che l’utente ha scritto. Input.value per leggere il contenuto dell’input.
//Blocco 3: Controllare campo non vuoto

const testo = input.value.trim();   // leggo il testo e tolgo eventuali spazi all'inizio/fine

if (testo === "") {                 // controllo se il testo è una stringa vuota
  alert("Campo vuoto!");            // avviso l'utente che deve scrivere qualcosa
  return;                           // interrompo l'esecuzione del codice
}

// Questo blocco impedisce di aggiungere elementi vuoti.
//trim() rimuove gli spazi inutili, così "   " viene considerato vuoto.
// Se il campo è vuoto, allora si passa a mostrare un alert e fermo il codice.



//Blocco 4: Creare un nuovo elemento della lista

const nuovoLi = document.createElement("li");   // creo un nuovo elemento <li>

//Blocco 5: Inserire il testo nel nuovo <li>
nuovoLi.textContent = testo;                    // inserisco dentro il testo scritto dall'utente


// Questo blocco crea un nuovo <li> e gli assegna il testo dell’input.
// È il passaggio che prepara l’elemento prima di inserirlo nella lista.


//Blocco 6: Aggiungere il <li> alla lista

lista.appendChild(nuovoLi);    // inserisco il nuovo <li> dentro la lista <ul>

// Questo blocco aggiunge fisicamente il nuovo elemento alla lista.
// appendChild() è il metodo che permette di inserire un nodo dentro un altro nodo.



// Blocco 7: Svuotare il campo input

input.value = "";     // resetto il campo di testo, così l'utente può scrivere un nuovo valore

// Questo blocco serve solo a pulire l’input dopo l’inserimento.
// È una buona pratica per migliorare l’esperienza dell’utente.

//blocco 8: creazione di un testo per eliminare gli elementi della lista
lista.addEventListener("click", function(event) {   // ascolto i click dentro la lista <ul>
  if (event.target.tagName === "LI") {              // elemento cliccato
    lista.removeChild(event.target);                // rimuovo quello cliccato
  }
});

//Questo blocco permette di eliminare un singolo elemento semplicemente cliccandolo.
//Controlliamo che il click sia su un <li> per evitare errori, poi lo rimuoviamo dalla lista.





