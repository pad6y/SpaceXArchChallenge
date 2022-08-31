import { NavLink, useParams, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  const { category } = useParams();
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      {location.pathname !== '/' ? (
        <h1>{category ? `${category}` : 'Crew'} list</h1>
      ) : (
        <h1>Welcome</h1>
      )}
      <div className={styles.nav_list}>
        <ul>
          <li>
            <NavLink
              to="/rockets"
              className={({ isActive }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : `${styles.nav_link}`
              }
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
            >
              Crew
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
