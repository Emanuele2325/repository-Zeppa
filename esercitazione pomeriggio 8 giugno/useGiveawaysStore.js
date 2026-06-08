// Importiamo la funzione create da Zustand
// create serve per creare uno "store", cioè uno stato globale
import { create } from "zustand";

// Importiamo la funzione che fa la chiamata API
// Questa funzione arriva dal file giveawaysApi.js
import { fetchGiveaways } from "./giveawaysApi";

// Creiamo lo store globale usando create()
// Dentro create passiamo una funzione che riceve "set"
// "set" serve per aggiornare lo stato
export const useGiveawaysStore = create((set) => ({

// Stato iniziale: lista dei giveaway vuota
giveaways: [],

// Stato iniziale: indica se stiamo caricando i dati
isLoading: false,

// Stato iniziale: contiene un eventuale errore
error: null,

// Azione: funzione che carica i giveaway dall'API
// Le azioni sono funzioni che modificano lo stato
loadGiveaways: async () => {

// Prima di iniziare la chiamata API, impostiamo lo stato di loading
set({ isLoading: true, error: null });

try {
// Chiamiamo la funzione fetchGiveaways() che fa la richiesta API
const data = await fetchGiveaways();

// Aggiorniamo lo stato con i dati ricevuti
set({ giveaways: data, isLoading: false });

} catch (err) {
// Se c'è un errore, lo salviamo nello stato
set({ error: err.message, isLoading: false });
}
}

}));

// uno store che:
// - conserva i dati
// - gestisce loading
// - gestisce errori
// - chiama l’API
// - aggiorna lo stato
// - può essere usato da QUALSIASI componente
// È come avere un centro di controllo dell’app.