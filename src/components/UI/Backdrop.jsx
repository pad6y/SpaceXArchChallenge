import ReactDOM from 'react-dom';
import styles from './Backdrop.module.css';

function Backdrop({ onClick }) {
  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={onClick}></div>,
    document.getElementById('backdrop-hook')
  );
}
export default Backdrop;
