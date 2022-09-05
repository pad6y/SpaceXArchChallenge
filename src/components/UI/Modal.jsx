import ReactDom from 'react-dom';
import Backdrop from './Backdrop';
import styles from './Modal.module.css';

function ModalOverlay({ className, headerClass, header, children }) {
  const content = (
    <div className={`${styles.modal} ${className}`}>
      <header className={`${styles.header} ${headerClass}`}>
        <h1>{header}</h1>
      </header>
      <div className={styles.content}>{children}</div>
    </div>
  );
  return ReactDom.createPortal(content, document.getElementById('modal-hook'));
}

function Modal(props) {
  return (
    <>
      {props.toggle && <Backdrop onClick={props.onClick} />}
      {props.toggle && <ModalOverlay {...props} />}
    </>
  );
}
export default Modal;
