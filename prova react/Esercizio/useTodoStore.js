// Importiamo la funzione "create" da Zustand.
// "create" è la funzione che costruisce uno store globale.
import { create } from "zustand";

// "useTodoStore" è un hook custom creato da Zustand.
// Lo esportiamo così ogni componente può importarlo e usarlo.
export const useTodoStore = create((set) => ({
  // ─── STATO ───────────────────────────────────────────────
  // "tasks" è l'array che contiene tutti i task dell'app.
  // Partiamo con 2 task di esempio così la lista non è vuota.
  tasks: [
    {
      id: "1",                // identificatore unico del task
      text: "Studiare React", // testo del task
      isCompleted: false,     // false = non completato
      priority: "High",       // priorità: High, Medium o Low
    },
    {
      id: "2",
      text: "Fare la spesa",
      isCompleted: false,
      priority: "Low",
    },
  ],


  // Le azioni sono funzioni che modificano lo stato.
  // "set" è la funzione di Zustand per aggiornare lo stato.
  // Regola fondamentale: non modifichiamo mai l'array originale
  // direttamente — creiamo sempre una copia nuova (immutabilità).

  // 1: aggiunge un nuovo task all'array
  // Riceve "text" (stringa) e "priority" (High/Medium/Low)
addTask: (text, priority) =>
    set((state) => ({
      // "...state.tasks" copia tutti i task esistenti
      // poi aggiunge il nuovo oggetto task in fondo all'array
    tasks: [
        ...state.tasks,
        {
          // Date.now() genera un numero unico basato sul tempo attuale
          // .toString() lo converte in stringa come richiesto dall'interfaccia
        id: Date.now().toString(),
          text: text,               // testo passato dal form
          isCompleted: false,       // ogni nuovo task parte come non completato
          priority: priority,       // priorità scelta dall'utente
        },
    ],
    })),

  // 2: rimuove un task dall'array tramite il suo id
  // Riceve "id" (stringa) — l'id del task da eliminare
deleteTask: (id) =>
    set((state) => ({
      // .filter() crea un nuovo array tenendo solo i task
      // il cui id è DIVERSO da quello che vogliamo eliminare
    tasks: state.tasks.filter((task) => task.id !== id),
    })),

  //3: inverte lo stato completato/non completato di un task
  // Riceve "id" (stringa) — l'id del task da modificare
toggleCompletion: (id) =>
    set((state) => ({
      // .map() crea un nuovo array passando per ogni task
    tasks: state.tasks.map((task) => {
        if (task.id === id) {
          // Se questo è il task cercato, restituiamo una copia
          // con isCompleted invertito (true→false oppure false→true)
        return { ...task, isCompleted: !task.isCompleted };
        }
        // Altrimenti restituiamo il task invariato
        return task;
    }),
    })),

  //4: aggiorna la priorità di un task specifico
  // Riceve "id" (stringa) e "newPriority" (High/Medium/Low)
updatePriority: (id, newPriority) =>
    set((state) => ({
    tasks: state.tasks.map((task) => {
        if (task.id === id) {
          // Se è il task cercato, restituiamo una copia
          // con il campo priority aggiornato al nuovo valore
        return { ...task, priority: newPriority };
        }
        return task;
    }),
    })),
}));