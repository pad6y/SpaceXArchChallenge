import { useParams } from 'react-router-dom';
import Button from '../UI/Button';
import styles from './ItemsCard.module.css';

function ItemsCard({ vehicle }) {
  const { id, name, images, type, description, wikipedia } = vehicle;
  const { category } = useParams();
  return (
    <article className={styles.card}>
      <img src={images[0]} alt={name} />
      <div className={styles.details}>
        <h3>Name : {name}</h3>
        <h4>Type : {type}</h4>
        <p>Description: {description.substring(0, 240)}...</p>
      </div>
      <div className={styles.center}>
        <Button to={`/${category}/${id}`}>more details</Button>
        <Button href={wikipedia}>wiki</Button>
      </div>
    </article>
  );
}
export default ItemsCard;
