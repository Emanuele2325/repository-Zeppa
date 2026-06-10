// Importiamo lo store per leggere i task
import { useTodoStore } from "../store/useTodoStore";
// Importiamo TaskItem per renderizzare ogni singolo task
import TaskItem from "./TaskItem";

function TaskList() {
  // Prendiamo l'array tasks dallo store.
  // Ogni volta che un task viene aggiunto/modificato/eliminato,
  // Zustand aggiorna questo componente automaticamente.
const tasks = useTodoStore((state) => state.tasks);

// Se non ci sono task, mostriamo un messaggio invece della lista
if (tasks.length === 0) {
    return <p>Nessun task presente. Aggiungine uno!</p>;
}

return (
    <div>
    <h2>I tuoi Task</h2>

      {/* .map() scorre l'array e per ogni task crea un TaskItem */}
    {tasks.map((task) => (
        // "key" è obbligatoria in React quando si usa .map()
        // aiuta React a identificare quale elemento è cambiato
        // Passiamo l'intero oggetto task come prop a TaskItem
        <TaskItem key={task.id} task={task} />
    ))}
    </div>
);
}

export default TaskList;


//Legge l'array tasks dallo store e genera un TaskItem per ogni task. Non ha azioni in sè, legge soltanto.