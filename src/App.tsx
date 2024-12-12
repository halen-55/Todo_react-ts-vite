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


  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
 
  const addNewTask = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newTask = {
      id: Date.now(),
      title,
      body
    }
    console.log(newTask)
    setTasks([...tasks, newTask])
    setTitle('')
    setBody('')
  }

  return (
    <div className={styles.container}>

      {/* FORM */}
      <form>
        <Input
            onChange={e => setTitle(e.currentTarget.value)}
            value={title}
            type='text'
            placeholder="Task title"
        />
        <Input
            onChange={e => setBody(e.currentTarget.value)}
            value={body}
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

