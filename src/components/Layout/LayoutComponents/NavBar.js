import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link to="/space/rockets">Rockets</Link>
        </li>
        <li>
          <Link to="/space/dragons">Dragons</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
