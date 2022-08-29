import { Link, useParams } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  const { category } = useParams();
  return (
    <nav className={styles.navbar}>
      <h1>{category} list</h1>
      <ul>
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
