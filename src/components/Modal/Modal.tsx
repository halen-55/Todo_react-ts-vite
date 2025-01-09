import { FC, ReactNode } from 'react';
import styles from './Modal.module.scss'

type ModalProps = {
    children?: ReactNode;
    visible: boolean;
    setVisible?: (setModal: () => boolean) => void;
}
const Modal: FC<ModalProps> = ({children, visible, setVisible}) => {

  const rootClasses = [styles.modal]

  if (visible) {
    rootClasses.push(styles.active);
  }
    
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal;