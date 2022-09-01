import styles from './Home.module.css';
import LogoX from '../components/UI/LogoX';

function Home() {
  return (
    <>
      <section className={styles.hero_container}>
        <div className={styles.circle}>
          <div className={styles.center_circle}></div>
          <LogoX className={styles.logo} />
        </div>
        <h1 className={styles.welcome}>Welcome to space x</h1>
      </section>
    </>
  );
}
export default Home;
