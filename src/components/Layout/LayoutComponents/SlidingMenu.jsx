import NavLinks from './NavLinks';
import styles from './SlidingMenu.module.css';
import { FaRocket } from 'react-icons/fa';

function SlidingMenu() {
  return (
    <div className={styles.btn}>
      <div className={styles.icon}>
        <FaRocket />
      </div>
      <NavLinks />
    </div>
  );
}
export default SlidingMenu;
