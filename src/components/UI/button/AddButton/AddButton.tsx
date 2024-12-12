import styles from './AddButton.module.scss'
import { FC } from 'react'

type AddButtonProps = {
  text: string;
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void
}

const AddButton: FC<AddButtonProps> = ({text, ...props}) => {
  return (
    <button className={styles.addButton}
    {...props}
    >
      {text}
   </button>
  )
}

export default AddButton;