import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function Button({ href, to, children, type, disabled, onClick, customClass }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={`${styles.btn}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${customClass ? `${customClass}` : `${styles.btn}`}`}
      type={type}
      onClick={onClick}
      disabled={disabled || false}
    >
      {children}
    </button>
  );
}
export default Button;
