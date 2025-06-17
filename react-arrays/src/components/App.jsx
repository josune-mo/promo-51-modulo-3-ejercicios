import '../styles/App.scss';

function App() {

 const [tasksList, setTasksList] = useState([
  { task: "Comprar harina, jamón y pan rallado", completed: true },
  { task: "Hacer croquetas ricas", completed: true },
  { task: "Ir a la puerta de un gimnasio", completed: false },
  {
    task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
    completed: false,
  },
]);

 const handleClick = (ev) => {
  const newTask = ev.target.key;
  console.log(newTask);
 }

  return (
    <div>
      <h1 >Mi lista de tareas</h1>
      <ol>
        {tasksList.map((task, index) => {
       
          return (
          <li className={task.completed?"completado":"pendiente"} key={index}>  
          {task.task}
        </li>)}) }
      </ol>
    </div>
  )
}

export default App;
