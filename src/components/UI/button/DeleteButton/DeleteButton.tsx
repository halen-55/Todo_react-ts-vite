import styles from './DeleteButton.module.scss'
import { FC } from 'react'

type DeleteButtonProps = {
  text: string;
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void
}

const DeleteButton: FC<DeleteButtonProps> = ({text, ...props}) => {
  return (
    <button className={styles.deleteButton}
    {...props}
    >
      {text}
    </button>
  )
}

export default DeleteButton;