import { NavLink } from 'react-router-dom';
import Button from '../../UI/Button';
import styles from './NavLinks.module.css';

function NavLinks({ onClick }) {
  return (
    <ul className={styles.nav_list}>
      <li>
        <NavLink
          to="/rockets"
          className={({ isActive }) =>
            isActive
              ? `${styles.nav_link} ${styles.active}`
              : `${styles.nav_link}`
          }
          onClick={onClick}
        >
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dragons"
          className={({ isActive }) =>
            isActive
              ? `${styles.nav_link} ${styles.active}`
              : `${styles.nav_link}`
          }
          onClick={onClick}
        >
          Dragons
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/crew"
          className={({ isActive }) =>
            isActive
              ? `${styles.nav_link} ${styles.active}`
              : `${styles.nav_link}`
          }
          onClick={onClick}
        >
          Crew
        </NavLink>
      </li>
      <li>
        <Button customClass={styles.btn} onClick={onClick}>
          &times;
        </Button>
      </li>
    </ul>
  );
}
export default NavLinks;
