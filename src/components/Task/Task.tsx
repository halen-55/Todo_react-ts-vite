import styles from "./Task.module.scss";
import { FC } from "react";
import DeleteButton from "../UI/button/DeleteButton/DeleteButton";

type TaskProps = {
    number: number;
    title: string;
    body: string;
};

const Task: FC<TaskProps> = ({number, title, body}) => {
    return (
        <div className={styles.task}>
            <div className={styles.task__content}>{`${number}. ${title}`}
            </div>
            <div className={styles.task__content}>{body}
            </div>
            <DeleteButton text={'Delete task'}/>
        </div>
    );
};

export default Task;
