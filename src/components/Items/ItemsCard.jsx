import styles from './ItemsCard.module.css';

function ItemsCard({ vehicle }) {
  const { name, images, type, description, wikipedia } = vehicle;
  return (
    <article className={styles.card}>
      <img src={images[0]} alt={name} />
      <div className={styles.details}>
        <h3>Name : {name}</h3>
        <h4>Type : {type}</h4>
        <p>Description: {description}</p>
      </div>
      <div className={styles.center}>
        <a
          href={wikipedia}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          Wiki
        </a>
      </div>
    </article>
  );
}
export default ItemsCard;
