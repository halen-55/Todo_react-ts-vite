import styles from './Form.module.scss';
import Input from "../UI/input/Input.tsx";
import AddButton from "../UI/button/AddButton/AddButton.tsx";
import React, { useState, FC } from "react";
import { ITask } from "../../types/types.ts";

type FormProps = {
   create: (newTask: ITask) => void
  }

const Form: FC<FormProps> = ({create}) => {

    const [task, setTask] = useState<ITask>({title: '', body: ''})

    const addNewTask = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newTask: ITask = {
            ...task, id: Date.now()
        }
        create(newTask)
        setTask({title: '', body: ''})
      }

    return (
        <form className={styles.container}>
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
            text="Crate">
        </AddButton>
      </form>
    );
};

export default Form;
