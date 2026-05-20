//BLOCCO 1:  Selezione degli elementi dal DOM
const btnCarica = document.getElementById("btnCarica"); // prendo il bottone con id "btnCarica"
const output = document.getElementById("output");       // prendo il div di output con id "output"

// il bottone per avviare il caricamento e l'area dove mostrare i messaggi.



//BLOCCO 2: Funzione che simula il caricamento asincrono con Promise
function caricaDatiUtente() {                 // dichiaro una funzione normale chiamata caricaDatiUtente
  return new Promise((resolve) => {           // ritorno una nuova Promise che riceve una funzione con parametro resolve, utile per restituire risultato
    setTimeout(() => {                        // uso setTimeout per simulare un ritardo di 2 secondi
      const datiUtente = {                    // creo un oggetto con i dati finti dell'utente
        nome: "Mario Rossi",                  // proprietà nome dell'utente
        ruolo: "Amministratore",              // proprietà ruolo dell'utente
        stato: "Attivo"                       // proprietà stato dell'utente
      };                                      // fine definizione oggetto datiUtente
      resolve(datiUtente);                    // chiamo resolve passando i dati utente alla Promise
    }, 2000);                                 // imposto il ritardo del setTimeout a 2000 millisecondi (2 secondi)
  });                                         // fine della Promise
}

// La Promise rappresenta un’operazione che “promette” di restituire un risultato in futuro (dopo 2 secondi, indicato prima della chiusura parentesi).



//BLOCCO 3: Funzione asincrona che gestisce il flusso di caricamento
async function gestisciCaricamento() {        // dichiaro una funzione asincrona chiamata gestisciCaricamento
  output.textContent = "Caricamento in corso..."; // imposto il testo dell'area di output per indicare il caricamento
  output.classList.remove("success");         // rimuovo la classe di successo se era presente da prima
  output.classList.add("loading");            // aggiungo la classe di caricamento per cambiare lo stile

  const dati = await caricaDatiUtente();      // attendo (await) che la Promise caricaDatiUtente venga risolta e salvo il risultato in dati

  output.classList.remove("loading");         // rimuovo la classe di caricamento perché il processo è finito
  output.classList.add("success");            // aggiungo la classe di successo per indicare che è andato tutto bene

  output.textContent =                       // imposto il testo dell'area di output con i dati dell'utente
    `Nome: ${dati.nome}, Ruolo: ${dati.ruolo}, Stato: ${dati.stato}`; // uso una template string per mostrare nome, ruolo e stato
}

/*In poche parole, richiami la funzione Async, chiamata gestisciCaricamento; dopodichè cambi il testo nella sezione <div> di html; rimuovi la classe
e successivamente la sostituisci con loading, caricamento; dichiarata la variabile DATI, attende poi che caricaDatiUtente chiami Resolve e, quando succede
, prende il valore che è passato in resolve del blocco 2; con i due output successivi -->Togli lo stile da caricamento, perché non sto più aspettando. 
Inserisce poi le variabili dentro le stringhe*/