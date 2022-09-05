import { useParams, useLocation } from 'react-router-dom';
import useToggle from '../../../hooks/useToggle';
import SlidingMenu from './SlidingMenu';
import Button from '../../UI/Button';
import Modal from '../../UI/Modal';
import NavLinks from './NavLinks';
import { FiMenu } from 'react-icons/fi';
import styles from './NavBar.module.css';

function NavBar() {
  const { category, id } = useParams();
  const location = useLocation();
  const [toggle, onClickTog] = useToggle();

  return (
    <>
      <Modal header="nav options" toggle={toggle} onClick={onClickTog}>
        <NavLinks onClick={onClickTog} />
      </Modal>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          {location.pathname !== '/' && !id && (
            <h1>{category ? `${category}` : 'Crew'} list</h1>
          )}

          {location.pathname === '/' && !id && <h1>Welcome</h1>}
          {id && <h1>{category}</h1>}
          <SlidingMenu />
          <Button customClass={styles.btn} onClick={onClickTog}>
            <FiMenu />
          </Button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
