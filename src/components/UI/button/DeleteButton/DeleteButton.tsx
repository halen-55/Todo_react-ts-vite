import styles from './DeleteButton.module.scss'
import { FC } from 'react'

type DeleteButtonProps = {
  text: string;
}

const DeleteButton: FC<DeleteButtonProps> = ({text}) => {
  return (
    <button className={styles.deleteButton}>
      {text}
    </button>
  )
}

export default DeleteButton;