// BLOCCO 1: seleziono gli elementi che mi servono nelle varie pagine

const contenitoreCani = document.getElementById("contenitoreCani"); // prendo il div che conterrà le card dei cani (solo in adozioni.html)
const formContatti = document.getElementById("formContatti"); // prendo il form dei contatti (solo in contatti.html)

// In questo blocco mi “aggancio” agli elementi HTML che userò con JavaScript:
//il contenitore dove inserirò le card dei cani (pagina Adozioni)
//il form che l’utente compila per contattare il centro (pagina Contatti).
//Uso getElementById perché ho dato ID univoci in HTML.



// BLOCCO 2: definisco i dati dei cani disponibili in adozione
const cani = [ // creo un array di oggetti, ogni oggetto rappresenta un cane
{
    nome: "Luna", // nome del cane
    eta: 3, // età del cane
    razza: "Meticcio", // razza o tipo
    descrizione: "Dolce e affettuosa, ama le passeggiate tranquille." // breve descrizione
},
{
    nome: "Rocky",
    eta: 5,
    razza: "Pitbull",
    descrizione: "Energico e giocherellone, ideale per persone sportive."
},
{
    nome: "Milo",
    eta: 2,
    razza: "Labrador",
    descrizione: "Molto socievole, va d’accordo con bambini e altri cani."
}
];

//Qui definisco i dati di base dei cani che il centro ha in adozione. Uso un array di oggetti perché è una struttura semplice da scorrere.
//Ogni oggetto rappresenta un cane con le sue informazioni principali.

// BLOCCO 3: creo le card dei cani e le inserisco nella pagina adozioni

function creaCardCane(cane) { // definisco una funzione che riceve un oggetto cane
  const card = document.createElement("div"); //creo un nuovo div che sarà la card
  card.classList.add("cardCane"); //aggiungo una classe CSS per lo stile della card

  const titolo = document.createElement("h2"); // creo un elemento h2 per il nome del cane
  titolo.textContent = cane.nome; // imposto il testo del titolo con il nome del cane

  const info = document.createElement("p"); // creo un paragrafo per età e razza
  info.textContent = `Età: ${cane.eta} anni - Razza: ${cane.razza}`; // inserisco età e razza nel testo

  const descr = document.createElement("p"); // creo un paragrafo per la descrizione
  descr.textContent = cane.descrizione; // imposto il testo con la descrizione del cane

  card.appendChild(titolo); // aggiungo il titolo alla card
  card.appendChild(info); // aggiungo il paragrafo con età e razza alla card
  card.appendChild(descr); // aggiungo il paragrafo con descrizione alla card

  contenitoreCani.appendChild(card); // inserisco la card completa nel contenitore della pagina
}

// Creo una funzione che costruisce una card HTML completa per un cane (nome, età, razza, descrizione).
//Poi controllo se mi trovo nella pagina Adozioni e, se sì, scorro l’array dei cani e genero una card per ognuno, inserendola nel contenitore
//della pagina.


// verifico se sono nella pagina adozioni (dove esiste contenitoreCani)

function popolaCani() { // definisco una funzione che gestisce l'intero popolamento
    if (!contenitoreCani) return; // se NON sono nella pagina adozioni, esco subito

  cani.forEach(function(cane) { // scorro l'array dei cani disponibili; forEach li scorro uno alla volta e con la funzione sarà eseguita 
//su ogni cane
    creaCardCane(cane); // per ogni cane creo e aggiungo la card
});

}



// BLOCCO 4: gestisco l'invio del form contatti


if (formContatti) { // controllo se sono nella pagina contatti (dove esiste il form)
  formContatti.addEventListener("submit", function(event) { // ascolto l'evento submit del form. Quando l’utente clicca INVIA, esegui questa funzione.
    event.preventDefault(); // blocco l'invio predefinito (niente refresh della pagina)

    const nome = document.getElementById("nome").value; // prendo il valore inserito nel campo nome
    const email = document.getElementById("email").value; // prendo il valore inserito nel campo email
    const messaggio = document.getElementById("messaggio").value; // prendo il testo del messaggio

    // mostro un messaggio di conferma all'utente
    alert(`Grazie ${nome}! La tua richiesta è stata inviata. Ti risponderemo all'indirizzo: ${email}.`);

    // Mostra una finestra di conferma all’utente, per dare un feedback immediato

    formContatti.reset(); // svuoto tutti i campi del form dopo l'invio
});
}
