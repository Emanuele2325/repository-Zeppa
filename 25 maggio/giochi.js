// Blocco 1: Selezione degli elementi del DOM

// Questo blocco serve a "collegare" il JavaScript agli elementi HTML.
// Senza questa selezione, JS non può leggere né modificare nulla nella pagina.

// Selettori dei campi input della dashboard (index.html)
const nameInput = document.getElementById("playerName"); 
const gameInput = document.getElementById("favGame"); 
const platformInput = document.getElementById("platform"); 
// Selettori dei pulsanti (presenti in index.html e settings.html)
const saveBtn = document.getElementById("saveBtn"); 
// Pulsante che attiva la funzione di salvataggio nel Local Storage.
const clearBtn = document.getElementById("clearBtn"); 
// Pulsante che cancella tutti i dati salvati.
const themeBtn = document.getElementById("themeBtn"); 
// Selettori della pagina profilo (profile.html)
const cardName = document.getElementById("cardName"); 
const cardGame = document.getElementById("cardGame"); 
const cardPlatform = document.getElementById("cardPlatform"); 

/*Qui creo i “ponti” tra HTML e JS.
Ogni getElementById() permette a JS di:
- leggere valori dagli input
- scrivere valori nella card
- attivare funzioni quando clicchi un pulsante
È il blocco fondamentale per far comunicare le pagine con la logica dell’app.*/ 



//BLOCCO 2: Funzione per salvare i dati nel Local Storage
//Funzione che prende i valori inseriti dall’utente e li salva nel Local Storage.
//Local Storage è una memoria del browser che NON si cancella al refresh.

// Funzione che salva i dati
function saveData() {
localStorage.setItem("playerName", nameInput.value); 
  // Salva il nome con la chiave "playerName".
  // setItem(chiave, valore) è il metodo che memorizza dati nel browser.

localStorage.setItem("favGame", gameInput.value); 
  // Salva il gioco preferito.

localStorage.setItem("platform", platformInput.value); 
  // Salva la piattaforma preferita.

alert("Dati salvati correttamente!"); 
  // Messaggio di conferma per l’utente.
}


/*Questa funzione è il cuore della dashboard.
Quando l’utente clicca “Salva”, i dati vengono memorizzati nel browser e diventano disponibili:
- nella pagina profilo (profile.html)
- anche dopo il refresh
- anche dopo la chiusura del browser
- È così che si crea una mini‑app che mantiene lo stato.*/ 


// BLOCCO 3: Funzione per mostrare i dati nella pagina profilo
// Questa funzione viene eseguita quando si apre profile.html.
// Legge i dati dal Local Storage e li inserisce negli elementi HTML.

function loadProfile() {
const savedName = localStorage.getItem("playerName"); 
  // Recupera il nome salvato. Se non esiste, restituisce null.

const savedGame = localStorage.getItem("favGame"); 
  // Recupera il gioco preferito.

const savedPlatform = localStorage.getItem("platform"); 
  // Recupera la piattaforma.

if (cardName) cardName.textContent = savedName || "Nessun nome salvato"; 
  // Inserisce il nome nella card. Se non esiste, mostra un messaggio di fallback.

if (cardGame) cardGame.textContent = "Gioco preferito: " + (savedGame || "Nessun dato"); 
  // Inserisce il gioco preferito.

if (cardPlatform) cardPlatform.textContent = "Piattaforma: " + (savedPlatform || "Nessun dato"); 
  // Inserisce la piattaforma.
}

// La card non contiene testo nell’HTML perché:
// il contenuto dipende da ciò che l’utente ha salvato
// il JS deve leggere i dati e inserirli al momento


// BLOCCO 4: Funzione per cancellare i dati
// Questa funzione elimina completamente la memoria dell’app.

function clearData() {
localStorage.clear(); 
  // Cancella TUTTE le chiavi salvate nel Local Storage.

alert("Dati cancellati!"); 
  // Conferma per l’utente.

location.reload(); 
  // Ricarica la pagina per aggiornare la visualizzazione.
}

// Questa funzione è usata nella dashboard e nelle impostazioni.
// Serve a riportare l’app allo stato iniziale.


// BLOCCO 5: Funzione per cambiare tema
// Questa funzione alterna una classe CSS sul body per cambiare i colori.

function toggleTheme() {
document.body.classList.toggle("dark-mode"); 
  // classList.toggle() aggiunge la classe se non c’è, la rimuove se c’è.
  // "dark-mode" è definita nel CSS e cambia colori, sfondi, testi.

const isDark = document.body.classList.contains("dark-mode"); 
  // Controlla se il tema scuro è attivo.

localStorage.setItem("theme", isDark ? "dark" : "light"); 
  // Salva il tema scelto nel Local Storage.
}

/*classList è una proprietà (non una funzione) degli elementi HTML nel DOM e, con toggle(), permette di aggiungere o rimuovere una classe 
CSS.
Ogni elemento HTML ha un attributo class=""; In JavaScript, quell’attributo viene esposto come un oggetto speciale chiamato classList.
Questo oggetto contiene la lista delle classi CSS applicate a quell’elemento.
classList contiene metodi, cioè funzioni che puoi chiamare per modificare le classi: in questo caso --> toggle("classe")
Se la classe c’è → la rimuove
Se non c’è → la aggiunge.
FOND. Serve direttamente a modificare class="" 

In questo esercizio, perchè body.classList? Perché è il contenitore di tutta la pagina.
Se cambi il body, cambi tutto il sito in un colpo solo.*/


// BLOCCO 6 — Applica il tema salvato quando la pagina viene caricata
function loadTheme() {
const savedTheme = localStorage.getItem("theme"); 
  // Recupera il tema salvato.

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode"); 
    // Applica il tema scuro se era stato scelto.
}
}
//Questo blocco garantisce che il tema rimanga coerente su tutte le pagine dell’app.


//BLOCCO 7 — Event listeners (collegamento pulsanti → funzioni)


// Gli event listener attivano le funzioni quando l’utente clicca i pulsanti.

if (saveBtn) saveBtn.addEventListener("click", saveData); 
// Quando clicchi "Salva", parte la funzione saveData().

if (clearBtn) clearBtn.addEventListener("click", clearData); 
// Quando clicchi "Cancella", parte clearData().

if (themeBtn) themeBtn.addEventListener("click", toggleTheme); 
// Quando clicchi "Cambia tema", parte toggleTheme().

// Carica automaticamente il profilo e il tema quando la pagina viene aperta
loadProfile(); 
loadTheme();

//addEventListener serve per ascoltare un evento su un elemento HTML. “Quando succede questo evento, esegui questa funzione.”



