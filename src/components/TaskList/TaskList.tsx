import Task from "../Task/Task";
import { FC } from "react";
import { ITask } from "../../types/types";
import styles from "./TaskList.module.scss";

type TaskListProps = {
  tasks: ITask[];
  remove: (id: number) => void;
};

const TaskList: FC<TaskListProps> = ({ tasks, remove }) => {

  if (!tasks.length) {
    return (
      <h2 className={styles.title}> Посты не найдены </h2>
    ) 
  }

  return (
    <div>
      <h2 className={styles.title}>Task list</h2>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          number={index + 1}
          title={task.title}
          body={task.body}
          remove={remove}
          id={task.id}
        />
      ))}
    </div>
  );
};

export default TaskList;

