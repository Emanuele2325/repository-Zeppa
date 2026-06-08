// Importiamo useEffect per eseguire codice al montaggio del componente
import { useEffect } from 'react';
// Importiamo Link per creare link interni con React Router
import { Link } from 'react-router-dom';
// Importiamo lo store globale dei giveaway
import { useGiveawaysStore } from '../state/useGiveawaysStore';
// Importiamo il componente che mostra la singola card
import { GiveawayCard } from './GiveawayCard';

// Questo componente mostra la lista di tutti i giveaway
export function GiveawayList() {
// Estraiamo dallo store i dati e l'azione per caricare i giveaway
const { giveaways, loading, error, loadGiveaways } = useGiveawaysStore();

// useEffect viene eseguito al primo render del componente
useEffect(() => {
// Chiamiamo l'azione per caricare i dati dall'API
loadGiveaways();
// Dipendenza: loadGiveaways (per evitare warning in sviluppo)
}, [loadGiveaways]);

//Se sta ancora caricando, mostriamo un messaggio di loading
if (loading) {
return <p>Caricamento in corso...</p>;
}

// Se c'è stato un errore, lo mostriamo all'utente
if (error) {
    return <p>Errore: {error}</p>;
}

// Se la lista è vuota, mostriamo un messaggio dedicato
if (giveaways.length === 0) {
return <p>Nessun giveaway disponibile al momento.</p>;
}

// Caso normale: mostriamo la lista di giveaway
return (
<div className="giveaways-grid">
{/* Usiamo map per trasformare l'array di oggetti in elementi JSX */}
{giveaways.map((item) => (
// Ogni elemento ha una key univoca (id)
<Link
key={item.id}
to={`/giveaway/${item.id}`}
className="giveaway-link-wrapper"
>
{/* GiveawayCard si occupa di mostrare i dettagli visivi del singolo elemento */}
<GiveawayCard giveaway={item} />
</Link>
))}
</div>
);
}


// GiveawayList è un figlio che:
// legge lo stato globale (giveaways, loading, error)
// chiama un’azione globale (loadGiveaways)
// Usa .map() per trasformare l’array in una lista di componenti.
// Ogni card è avvolta in un <Link> per andare alla pagina di dettaglio.