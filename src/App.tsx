import styles from "./index.module.scss";
import { useEffect, useMemo, useState } from "react";
import { ITask, IFilter } from "./types/types.ts";
import TaskList from "./components/TaskList/TaskList.tsx";
import Form from "./components/Form/Form.tsx";
import Filter from './components/Filter/Filter.tsx'
import Modal from "./components/Modal/Modal.tsx";
import AddButton from "./components/UI/button/AddButton/AddButton.tsx";
import TaskService from "./API/TaskService.tsx";
import Loader from "./components/UI/Loader/Loader.tsx";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    // { id: 1.1, title: "JS", body: 'description' },
    // { id: 2.2, title: "TS", body: 'dog' },
  ]);

const [filter, setFilter] = useState<IFilter>({sort: '', query: ''})
const [modal, setModal] = useState<boolean>(false);
const [isTasksLoading, setIsTasksLoading] = useState(false)

const sortedTasks = useMemo(() => {
  console.log('f. sorted')
  if (filter.sort) {
    return [...tasks].sort((a: ITask, b: ITask) => (((a[filter.sort]) as string).localeCompare((b[filter.sort]) as string)))
  }
  return tasks
}, [filter.sort, tasks])

const sortedAndSearchedTasks = useMemo (() => {
  return sortedTasks.filter( task => task.title.toLowerCase().includes(filter.query))
}, [filter.query, sortedTasks])

const createTask = (newTask: ITask) => {
  setTasks([...tasks, newTask])
  setModal(false)
}


useEffect(() => {
  console.log('useEffect')
}, [filter])

async function fetchTasks() {
  setIsTasksLoading(true);
  // setTimeout(async () => {
  // }, 1000)
  const tasksLoading = await TaskService.getAll(); 
  // setTasks(tasksLoading);
  setTasks(tasks.concat(tasksLoading));
  setIsTasksLoading(false);
}

// Получение задач из дочернего компонента
const removeTask = (id: number) => {
  setTasks(tasks.filter(t => t.id !== id))
}

return (
    <div className={styles.container}>
      <button onClick={fetchTasks}>Get tasks</button>
      <AddButton onClick={() => setModal(true)} text="Create task"/>
      <Modal visible={modal} setVisible={setModal}>
        <Form create={createTask}/>
      </Modal>
      
      <Filter 
         filter={filter}
         setFilter={setFilter}
      />
      {isTasksLoading 
        ? <div className={styles.containerCenter}>
          <Loader></Loader>
        </div> 
        : <TaskList remove={removeTask} tasks={sortedAndSearchedTasks} />
      }
    </div>
  );
}

export default App;

