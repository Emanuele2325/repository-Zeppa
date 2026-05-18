//Usare uno switch su X variabili ruolo per gestire i seguenti casi, deve essere richiesto 3 volte:
// - "Player"
// - "Moderator"
// - "Admin"
// - Caso predefinito con default
// Ogni ruolo deve stampare un messaggio diverso relativo ai permessi disponibili nel sistema, e deve rendere possibile sceglierne più di uno
//contemporaneamente. ES. player/moderator


// Input utente
const prompt = require("prompt-sync")(); // Importiamo prompt-sync per leggere input da console; () è necessario per far funzionare prompt in Node.js

// Variabili ruolo
let ruolo1 = "";
let ruolo2 = "";
let ruolo3 = "";

// Input
ruolo1 = prompt("Inserisci primo ruolo: ");
ruolo2 = prompt("Inserisci secondo ruolo: ");
ruolo3 = prompt("Inserisci terzo ruolo: ");
// Abbiamo chiesto all'utente di inserire 3 ruoli e li abbiamo salvati nelle variabili

// Primo ruolo
switch (ruolo1) {
    case "player":
        console.log("PLAYER: accesso base al gioco, può giocare e chattare.");
        break;
    case "moderator":
        console.log("MODERATOR: gestione chat, può bannare e silenziare utenti.");
        break;
    case "admin":
        console.log("ADMIN: controllo totale, gestisce server e permessi.");
        break;
    default:
        console.log("Ruolo 1 non valido.");
}
// Abbiamo controllato ruolo1 e stampato il messaggio corrispondente

// Secondo ruolo
switch (ruolo2) {
    case "player":
        console.log("PLAYER: accesso base al gioco, può giocare e chattare.");
        break;
    case "moderator":
        console.log("MODERATOR: gestione chat, può bannare e silenziare utenti.");
        break;
    case "admin":
        console.log("ADMIN: controllo totale, gestisce server e permessi.");
        break;
    default:
        console.log("Ruolo 2 non valido.");
}
// Stessa cosa di prima ma per ruolo2

// Terzo ruolo
switch (ruolo3) {
    case "player":
        console.log("PLAYER: accesso base al gioco, può giocare e chattare.");
        break;
    case "moderator":
        console.log("MODERATOR: gestione chat, può bannare e silenziare utenti.");
        break;
    case "admin":
        console.log("ADMIN: controllo totale, gestisce server e permessi.");
        break;
    default:
        console.log("Ruolo 3 non valido.");
}
// Stessa cosa di prima ma per ruolo3



// Controllo combinazioni con IF -- Opzionale, non richiesto ma utile per mostrare combinazioni di ruoli
if (
    (ruolo1 === "player" || ruolo2 === "player" || ruolo3 === "player") &&
    (ruolo1 === "moderator" || ruolo2 === "moderator" || ruolo3 === "moderator")
) {
    console.log("Combinazione: hai sia PLAYER che MODERATOR.");
}
// Se tra i 3 ruoli inseriti c'è sia player che moderator, stampa un messaggio speciale

if (
    (ruolo1 === "player" || ruolo2 === "player" || ruolo3 === "player") &&
    (ruolo1 === "admin" || ruolo2 === "admin" || ruolo3 === "admin")
) {
    console.log("Combinazione: hai sia PLAYER che ADMIN.");
}
// Se tra i 3 ruoli inseriti c'è sia player che admin, stampa un messaggio speciale

if (
    (ruolo1 === "moderator" || ruolo2 === "moderator" || ruolo3 === "moderator") &&
    (ruolo1 === "admin" || ruolo2 === "admin" || ruolo3 === "admin")
) {
    console.log("Combinazione: hai sia MODERATOR che ADMIN.");
}
// Se tra i 3 ruoli inseriti c'è sia moderator che admin, stampa un messaggio speciale

