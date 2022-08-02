import { Link } from 'react-router-dom';
import Logo from '../../UI/Logo';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>
    </header>
  );
}
export default Header;
