// Importiamo i componenti che compongono l'app
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

function App() {
  // App non ha stato e non parla con lo store.
  // Il suo unico compito è posizionare i componenti nella pagina.
  // Ognuno di essi si collega allo store in autonomia.
  return (
    <div>
      <h1>Todo List con Zustand</h1>

      {/* Form per aggiungere task — si collega da solo allo store */}
      <AddTaskForm />

      {/* Lista dei task — si collega da solo allo store */}
      <TaskList />
    </div>
  );
}

export default App;