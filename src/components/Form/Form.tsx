import styles from './Form.module.scss';
import Input from '../UI/input/Input';
import AddButton from '../UI/button/AddButton/AddButton';

const Form = () => {
    return (
        <form className={styles.borderBottom}>
            <h1>Add new task</h1>
            <div className={styles.container}>
                <Input description={"Task title"} />
                <Input description={"Task description"} />
                <AddButton text={"Add task"} />
            </div>
        </form>
    );
};

export default Form;
