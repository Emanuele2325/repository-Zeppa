// Aspetta che la pagina sia completamente caricata
window.addEventListener("DOMContentLoaded", function() {




// BLOCCO 1 — Selettori del DOM
// Questo blocco collega il JavaScript agli elementi HTML delle tre pagine.
// Ogni elemento viene selezionato SOLO se esiste nella pagina corrente.

// --- Selettori pagina inserimento ---
const toyName = document.getElementById("toyName"); 
// Campo input: nome del giocattolo

const toyCategory = document.getElementById("toyCategory"); 
// Campo input: categoria del giocattolo

const toyPrice = document.getElementById("toyPrice"); 
// Campo input: prezzo del giocattolo

const toyAge = document.getElementById("toyAge"); 
// Campo input: età consigliata

const toyAvailability = document.getElementById("toyAvailability"); 
// Select: disponibilità

const saveToyBtn = document.getElementById("saveToyBtn"); 
// Pulsante: salva giocattolo

const clearFormBtn = document.getElementById("clearFormBtn"); 
// Pulsante: pulisci form

// --- Selettori pagina elenco ---
const toyList = document.getElementById("toyList"); 
// Contenitore dove verranno inserite le card dei giocattoli

// --- Selettori pagina riepilogo ---
const totalToys = document.getElementById("totalToys"); 
// Paragrafo: numero totale giocattoli

const categories = document.getElementById("categories"); 
// Paragrafo: categorie uniche

const averagePrice = document.getElementById("averagePrice"); 
// Paragrafo: prezzo medio

const unavailableToys = document.getElementById("unavailableToys"); 
// Lista UL: giocattoli non disponibili



//Blocco 2: Funzione per recuperare l’array dal localStorage
// Questa funzione legge la chiave "toys" dal localStorage.
// Se non esiste ancora, restituisce un array vuoto.
function getToysArray() {
  const saved = localStorage.getItem("toys");

  if (saved) {
    return JSON.parse(saved);
  } else {
    return [];
  }
}

// BLOCCO 3: Salvataggio dell'array nel localStorage
// Trasforma l'array in JSON e lo salva nella chiave "toys".

function saveToysArray(array) {         // La funzione prende un array di giocattoli come argomento
const json = JSON.stringify(array);     // dichiara una variabile json e le assegna il valore di JSON.stringify(array),che converte 
// l'array in una stringa JSON.
localStorage.setItem("toys", json);     //localStorage.setItem("toys", json) salva la stringa JSON nel localStorage con la chiave "toys".
// Ora l'array è salvato nel localStorage e può essere recuperato in seguito con getToysArray().
}






//BLOCCO 4: addToy(): creare l’oggetto e aggiungerlo all’array
function addToy() {
  const toy = {
    nome: toyName.value,
    categoria: toyCategory.value,
    prezzo: parseFloat(toyPrice.value), //parseFloat converte la stringa in un numero decimale
    eta: toyAge.value,
    disponibilita: toyAvailability.value
  };
// Stai costruendo un “record” di un giocattolo, con tutte le sue proprietà presenti nei vari ID di inserimento HTML.

const toys = getToysArray();
//Recupero dell’array esistente
//Qui richiami la funzione del BLOCCO 2: 
//se ci sono già giocattoli → ottieni l’array
//se non c’è niente → ottieni [] --> Null 

toys.push(toy);
//push() è un metodo degli array.
//Aggiunge un elemento in fondo all’array.

saveToysArray(toys);
//Salvataggio dell’array aggiornato nel localStorage
//Richiami la funzione del BLOCCO 3:
//serializza l’array
//lo salva nel localStorage

alert("Giocattolo salvato!");   //Messaggio di conferma
}


// BLOCCO 5: clearForm(): pulire i campi del form
// Svuota tutti i campi dopo il salvataggio.

function clearForm() {
  toyName.value = "";
  toyCategory.value = "";
  toyPrice.value = "";
  toyAge.value = "";
  toyAvailability.value = "disponibile";
}





// BLOCCO 6 — Visualizzazione elenco giocattoli
// Scopo: leggere i giocattoli salvati nel localStorage e mostrarli come card HTML nella pagina elenco.html.
// Se non siamo in quella pagina, la funzione esce subito senza fare nulla.
// Se non ci sono giocattoli, mostra un messaggio.
// Se ci sono, crea una card HTML per ognuno e la inserisce nella pagina.

function loadToyList() {

  if (!toyList) {
  // toyList è l'elemento con id="toyList", che esiste solo in elenco.html.
  // !toyList significa: "se toyList NON esiste in questa pagina".
  // Serve per evitare errori quando il file JS gira su index.html o riepilogo.html.
  
    return;
    // Esci dalla funzione immediatamente. Non eseguire nient'altro.
  }

  const toys = getToysArray();
  // Chiama la funzione del Blocco 2.
  // Legge il localStorage e restituisce l'array dei giocattoli salvati.
  // Se non c'è nulla salvato, restituisce un array vuoto [].

  if (toys.length === 0) {
  // toys.length è il numero di elementi nell'array.
  // Se è 0, l'array è vuoto: non ci sono giocattoli da mostrare.
  
    toyList.innerHTML = "<p>Nessun giocattolo salvato.</p>";
    // Scrive direttamente nell'HTML del contenitore un paragrafo di testo.
    // L'utente vedrà: "Nessun giocattolo salvato."
    
    return;
    // Esci dalla funzione. Non ha senso continuare se non c'è nulla.
  }

  toys.forEach(toy => {
  // Scorre l'array uno ad uno.
  // Ad ogni iterazione, toy è il giocattolo corrente (un oggetto con nome, categoria, ecc.).

    const div = document.createElement("div");
    // Crea un nuovo elemento <div> in memoria (non è ancora nella pagina).

    div.className = "toy-card";
    // Assegna al div la classe CSS "toy-card".
    // Serve per applicare lo stile definito nel CSS.

    div.innerHTML = "<h3>" + toy.nome + "</h3>" +
                    "<p>Categoria: " + toy.categoria + "</p>" +
                    "<p>Prezzo: €" + toy.prezzo.toFixed(2) + "</p>" +
                    "<p>Età consigliata: " + toy.eta + "</p>" +
                    "<p>Disponibilità: " + toy.disponibilita + "</p>";
    // Riempie il div con l'HTML della card.
    // toy.nome, toy.categoria ecc. sono le proprietà dell'oggetto giocattolo.
    // toFixed(2) formatta il prezzo con esattamente 2 decimali (es. 19.90).
    // Le stringhe vengono unite con + (concatenazione).

    toyList.appendChild(div);
    // Inserisce il div appena creato dentro il contenitore toyList nella pagina.
    // Questo lo rende visibile all'utente.
  });
}


// BLOCCO 7 — Visualizzazione riepilogo
// Domanda generale: "Quanti giocattoli ho? Quali categorie? Quanto costano in media? Quali non sono disponibili?"
// Movimento: legge il localStorage, calcola le statistiche e le scrive nella pagina riepilogo.html.

function loadSummary() {

  if (!totalToys) {
  // Domanda: "Sono nella pagina giusta?"
  // Se totalToys non esiste, non siamo in riepilogo.html → esci.
    return;
  }

  const toys = getToysArray();
  // getToysArray() legge il localStorage e restituisce l'array dei giocattoli.
  // Domanda: "Cosa ho salvato finora?"


  //TOTALE 
  totalToys.textContent = "Totale giocattoli: " + toys.length;
  // length è una proprietà degli array: restituisce il numero di elementi.
  // Domanda: "Quanti giocattoli ho in totale?"
  // textContent scrive il risultato nel paragrafo HTML con id="totalToys".


  //CATEGORIE UNICHE
  const allCategories = toys.map(function(t) {
    return t.categoria;
  });
  // map() scorre l'array e costruisce un nuovo array con un solo valore per ogni elemento.
  // Domanda: "Quali categorie compaiono nei giocattoli salvati?" (anche con duplicati)
  // Movimento: estrai solo il campo categoria da ogni giocattolo.

  const uniqueCategories = [...new Set(allCategories)];
  // new Set() è una struttura che accetta un array ed elimina automaticamente i duplicati.
  // [...] (spread operator) riconverte il Set in un array normale.
  // Domanda: "Quali categorie compaiono almeno una volta, senza ripetizioni?"

  categories.textContent = "Categorie: " + uniqueCategories.join(", ");
  // join(", ") unisce tutti gli elementi dell'array in una stringa separata da virgole.
  // Domanda: "Come mostro le categorie in modo leggibile?"
  // Movimento: scrivi il risultato nel paragrafo HTML con id="categories".


  // --- PREZZO MEDIO ---
  let somma = 0;
  // Variabile contatore che parte da zero e accumula i prezzi.
  // Domanda: "Qual è la somma totale di tutti i prezzi?"

  for (let i = 0; i < toys.length; i++) {
    somma = somma + toys[i].prezzo;
    // Ad ogni iterazione prende il prezzo del giocattolo corrente e lo aggiunge alla somma.
  }

  const avg = somma / toys.length;
  // Divide la somma per il numero di giocattoli.
  // Domanda: "Qual è il prezzo medio?"

  averagePrice.textContent = "Prezzo medio: €" + avg.toFixed(2);
  // toFixed(2) è un metodo dei numeri: formatta con esattamente 2 decimali.
  // Domanda: "Come mostro il prezzo medio in modo leggibile?"
  // Movimento: scrivi il risultato nel paragrafo HTML con id="averagePrice".


  // --- GIOCATTOLI NON DISPONIBILI ---
  const unavailable = toys.filter(function(t) {
    return t.disponibilita === "non disponibile";
  });
  // filter() scorre l'array e restituisce un nuovo array con solo gli elementi
  // che rispettano la condizione indicata.
  // Domanda: "Quali giocattoli hanno disponibilità = non disponibile?"
  // Movimento: filtra e tieni solo quelli non disponibili.

  unavailableToys.innerHTML = "";
  // Svuota la lista HTML prima di riempirla.
  // Movimento: pulisci il contenitore per evitare duplicati ad ogni chiamata.

  for (let i = 0; i < unavailable.length; i++) {
    const li = document.createElement("li");
    // createElement crea un nuovo elemento HTML <li> in memoria.
    // Domanda: "Come creo una voce di lista per ogni giocattolo non disponibile?"

    li.textContent = unavailable[i].nome;
    // textContent scrive il nome del giocattolo dentro il <li>.
    // Movimento: inserisci il testo nella voce di lista appena creata.

    unavailableToys.appendChild(li);
    // appendChild inserisce il <li> dentro la lista HTML con id="unavailableToys".
    // Movimento: aggiungi la voce alla lista visibile in pagina.
  }
}


// Test: verifica che il bottone venga trovato
if (saveToyBtn) {
  console.log("Bottone trovato, listener attivo");
  saveToyBtn.addEventListener("click", addToy);
}

//BLOCCO 8: Event listeners e avvio logica
if (saveToyBtn) saveToyBtn.addEventListener("click", addToy); //Se il pulsante esiste nella pagina: collega il click 
// alla funzione corrispondente.
if (clearFormBtn) clearFormBtn.addEventListener("click", clearForm);
loadToyList();
loadSummary();

//Vengono chiamate sempre, ma:
//se non siamo nella pagina giusta, escono subito grazie ai if (!toyList) e if (!totalToys).




}); // ← chiude il listener DOMContentLoaded