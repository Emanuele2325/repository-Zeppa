// Importiamo axios, la libreria che useremo per fare richieste HTTP
import axios from "axios";

// Definiamo la base URL dell'API da cui prenderemo i dati
// In questo caso usiamo l'API pubblica di GamerPower
const API_BASE_URL = "https://gamerpower.com/api";

// Creiamo una funzione asincrona per ottenere TUTTI i giveaway
// async significa che dentro useremo "await"
export async function fetchGiveaways() {
// Facciamo una richiesta GET all'endpoint /giveaways
// È il metodo di Axios per fare una richiesta HTTP di tipo GET.
// Restituisce una Promise, cioè un’operazione che si completerà in futuro.
const response = await axios.get(`${API_BASE_URL}/giveaways`);

// Axios restituisce un oggetto chiamato response. Dentro ci sono: response.data (i dati veri e propri) -- prendo solo questi, 
// response.status (lo status code HTTP), e altre informazioni.
return response.data;
}
