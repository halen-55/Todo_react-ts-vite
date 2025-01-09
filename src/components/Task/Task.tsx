import styles from "./Task.module.scss";
import { FC } from "react";
import DeleteButton from "../UI/button/DeleteButton/DeleteButton";

type TaskProps = {
  number: number;
  title: string;
  body: string;
  remove: (id: number) => void;
  id: number;
};

const Task: FC<TaskProps> = ({ number, title, body, remove, id }) => {
  return (
      <div className={styles.task}>
        <div className={styles.task__content}>
          <div className={styles.title}>
            {`${number}. ${title}`}
          </div>
          <div>{body}</div>
        </div>
        <DeleteButton onClick={() => remove(id)} text={"Delete task"} />
      </div>
  );
};

export default Task;
