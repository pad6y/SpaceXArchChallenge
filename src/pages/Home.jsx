import styles from './Home.module.css';
import LogoX from '../components/UI/LogoX';

function Home() {
  return (
    <section className={styles.home_container}>
      <div className={styles.circle}>
        <div className={styles.center_circle}></div>
        <LogoX className={styles.logo} />
      </div>
    </section>
  );
}
export default Home;
