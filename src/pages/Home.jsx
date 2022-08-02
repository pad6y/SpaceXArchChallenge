import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.home}>
      <h1>Welcome To Space X</h1>
      <div>
        <p>Select a link from Nav bar to consume a space x endpoint</p>
      </div>
    </section>
  );
}
export default Home;
