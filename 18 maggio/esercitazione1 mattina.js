// ES 1. Scrivere un programma che chieda all'utente di inserire scegliere tra X opzioni per un menù, tramite SWITCH. Far inserire all'utente una serie di
// condimenti e stampare la selezione inziale più i componenti extra

// Input utente
const prompt = require("prompt-sync")();

// Variabili
let scelta = "";
let piatto = "";
let condimento1 = "";
let condimento2 = "";
let condimento3 = "";

// Scelta menu
scelta = prompt("Scegli il tuo menu:\n1 - Pizza\n2 - Burger\n3 - Pasta: ");
console.log("Hai scelto: " + scelta);

// Switch principale
switch (scelta) {
  case "pizza":
    console.log("Hai scelto Pizza.");

    condimento1 = prompt("Aggiungi il primo condimento: ");
    if (condimento1 === "" || condimento1 === null) condimento1 = "nessuno";
    condimento2 = prompt("Aggiungi il secondo condimento: ");
    if (condimento2 === "" || condimento2 === null) condimento2 = "nessuno";
    condimento3 = prompt("Aggiungi il terzo condimento: ");
    if (condimento3 === "" || condimento3 === null) condimento3 = "nessuno";
    console.log("Ordine finale:");
    console.log("Pizza con " + condimento1 + ", " + condimento2 + " e " + condimento3);
    break;


  case "burger":
    console.log("Hai scelto Burger.");
    condimento1 = prompt("Aggiungi il primo condimento: ");
    if (condimento1 === "" || condimento1 === null) condimento1 = "nessuno";
    condimento2 = prompt("Aggiungi il secondo condimento: ");
    if (condimento2 === "" || condimento2 === null) condimento2 = "nessuno";
    condimento3 = prompt("Aggiungi il terzo condimento: ");
    if (condimento3 === "" || condimento3 === null) condimento3 = "nessuno";
    console.log("Ordine finale:");
    console.log("Burger con " + condimento1 + ", " + condimento2 + " e " + condimento3);
    break;



  case "pasta":
    console.log("Hai scelto Pasta.");
    condimento1 = prompt("Aggiungi il primo condimento: ");
    if (condimento1 === "" || condimento1 === null) condimento1 = "nessuno";
    condimento2 = prompt("Aggiungi il secondo condimento: ");
    if (condimento2 === "" || condimento2 === null) condimento2 = "nessuno";
    condimento3 = prompt("Aggiungi il terzo condimento: ");
    if (condimento3 === "" || condimento3 === null) condimento3 = "nessuno";
    console.log("Ordine finale:");
    console.log("Pasta con " + condimento1 + ", " + condimento2 + " e " + condimento3);
    break;

  
  default:
    console.log("Scelta non valida.");
}

