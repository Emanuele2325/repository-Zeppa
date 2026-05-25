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
//localStorage è una memoria del browser che salva coppie chiave/valore.
//getItem("toys") chiede: “Hai qualcosa salvato con la chiave "toys"?”
//Legge la stringa JSON salvata nel localStorage


return saved ? JSON.parse(saved) : [];  //JSON.parse(saved) converte la stringa JSON in un array di oggetti JavaScript.
  // Se esiste → deserializza con JSON.parse()
  // Se non esiste → restituisce array vuoto
}
//Ci sono due casi: - Se esiste, restituisce una stringa JSON; - non esiste, restituisce Null. 





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
    prezzo: parseFloat(toyPrice.value),
    eta: toyAge.value,
    disponibilita: toyAvailability.value
  };
// Stai costruendo un “record” di un giocattolo, con tutte le sue proprietà.

const toys = getToysArray();
//Recupero dell’array esistente
//Qui richiami la funzione del BLOCCO 2: 
//se ci sono già giocattoli → ottieni l’array
//se non c’è niente → ottieni []

toys.push(toy);
//push() è un metodo degli array.
//Aggiunge un elemento in fondo all’array.

saveToysArray(toys);
//Salvataggio dell’array aggiornato nel localStorage
//Richiami la funzione del BLOCCO 3:
//serializza l’array
//lo salva nel localStorage

alert("Giocattolo salvato!");   ////Messaggio di conferma
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
// Questa funzione viene eseguita nella pagina elenco.html.

function loadToyList() {
  if (!toyList) return;

//toyList è l’elemento con id="toyList" (solo in elenco.html).
//Se sei in un’altra pagina, document.getElementById("toyList") è null.
//if (!toyList) → se non esiste, esci.
// Serve per usare lo stesso file JS su più pagine senza errori.
  
const toys = getToysArray();    //Recupera l’array dal localStorage (giocattoli). Qui avviene la deserializzazione (dentro getToysArray())


if (toys.length === 0) {
  toyList.innerHTML = "<p>Nessun giocattolo salvato.</p>";
  return;
}
//Gestione caso vuoto: se l’array è vuoto, mostra un messaggio e esci.



//Ciclo forEach per creare le card
toys.forEach(toy => {
  const div = document.createElement("div");
  div.className = "toy-card";
  div.innerHTML = `
    <h3>${toy.nome}</h3>
    <p>Categoria: ${toy.categoria}</p>
    <p>Prezzo: €${toy.prezzo.toFixed(2)}</p>
    <p>Età consigliata: ${toy.eta}</p>
    <p>Disponibilità: ${toy.disponibilita}</p>
  `;
  toyList.appendChild(div);
});
}
//forEach scorre ogni giocattolo dell’array.
// Per ogni toy:crei un <div>
// gli dai una classe CSS
// gli inserisci dentro il contenuto HTML con i dati del giocattolo
//lo appendi al contenitore toyList



// BLOCCO 7 — Visualizzazione riepilogo
function loadSummary() {
  if (!totalToys) return;
//Stessa logica di prima:
//totalToys esiste solo in riepilogo.html
//Se sei in un’altra pagina, esci.
totalToys.textContent = "Totale giocattoli: " + toys.length;
//toys.length → numero di elementi nell’array -- > numero totale di giocattoli
//textContent → scrive testo dentro il paragrafo


const uniqueCategories = [...new Set(toys.map(t => t.categoria))];    //new Set() è una struttura che elimina i duplicati di un array
categories.textContent = "Categorie: " + uniqueCategories.join(", "); //join unisce gli elementi dell’array in una stringa, separandoli con ", "
//concettualmente: prendi tutte le categorie dei giocattoli, elimina i duplicati, e poi crea una stringa con tutte le categorie uniche 
//separate da virgola.

const avg = toys.reduce((sum, t) => sum + t.prezzo, 0) / toys.length;
averagePrice.textContent = "Prezzo medio: €" + avg.toFixed(2);

//reduce((sum, t) => sum + t.prezzo, 0)  
// → parte da 0 e somma tutti i prezzi
// es. 0 + 10 + 20 + 30 = 60 poi divide per toys.length  → media = somma / numero elementi
//toFixed(2) formatta il numero con 2 decimali

//giocattoli non disponibili
const unavailable = toys.filter(t => t.disponibilita === "non disponibile");
//filter() crea un nuovo array con solo gli elementi che rispettano la condizione.
//Qui: tutti i giocattoli con disponibilita === "non disponibile".



//BLOCCO 8: Event listeners e avvio logica
if (saveToyBtn) saveToyBtn.addEventListener("click", addToy); //Se il pulsante esiste nella pagina: collega il click 
// alla funzione corrispondente.
if (clearFormBtn) clearFormBtn.addEventListener("click", clearForm);
loadToyList();
loadSummary();
}

//Vengono chiamate sempre, ma:
//se non siamo nella pagina giusta, escono subito grazie ai if (!toyList) e if (!totalToys).




