import Task from "../Task/Task";
import { FC } from "react";
import { ITask } from "../../types/types";
import styles from './TaskList.module.scss'

type TaskListProps = {
    tasks: ITask[];
};

const TaskList: FC<TaskListProps> = ({ tasks }) => {
    return (
        <div>
            <h2 className={styles.title}>Task list</h2>
            {tasks.map((task, index) => (
                <Task key={task.id} number={index + 1} title={task.title} body={task.body} />
            ))}
        </div>
    );
};

export default TaskList;
