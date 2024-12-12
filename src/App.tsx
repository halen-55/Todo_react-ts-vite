import styles from "./index.module.scss";
import React, { useState } from "react";
import { ITask } from "./types/types.ts";
import TaskList from "./components/TaskList/TaskList.tsx";
import Input from "./components/UI/input/Input.tsx";
import AddButton from "./components/UI/button/AddButton/AddButton.tsx";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, title: "JS", body: 'description' },
    { id: 2, title: "TS", body: 'description' },
  ]);


  const [task, setTask] = useState<ITask>({title: '', body: ''})

  const addNewTask = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setTasks([...tasks, {...task, id: Date.now()}])
    setTask({title: '', body: ''})

  }

  return (
    <div className={styles.container}>

      {/* FORM */}
      <form>
        <Input
            onChange={e => setTask({...task, title: e.currentTarget.value})}
            value={task.title}
            type='text'
            placeholder="Task title"
        />
        <Input
            onChange={e => setTask({...task, body: e.currentTarget.value})}
            value={task.body}
            type='text'
            placeholder="Task body"
        />
        <AddButton 
            onClick={addNewTask}
            text="Создать">
        </AddButton>
      </form>

      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

