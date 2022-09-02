import { useSlider } from '../../hooks/useSlider';
import LoadingSpinner from '../UI/LoadingSpinner';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './stylesTemp.module.css';
import { format } from 'date-fns';

function DragonTemp({ spaceCraft, isLoading }) {
  const {
    name,
    flickr_images,
    description,
    first_flight,
    crew_capacity,
    type,
    active,
    launch_payload_mass,
    height_w_trunk,
    diameter,
  } = spaceCraft;

  let arrLength;
  if (flickr_images !== undefined) {
    arrLength = flickr_images.length;
  }
  const [idx, handleBack, handleForward] = useSlider(arrLength);

  if (isLoading) return <LoadingSpinner />;
  let formatDate;
  if (first_flight !== undefined) {
    formatDate = format(new Date(first_flight), 'd MMMM yyyy');
  }

  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <div className={styles.box}>
          <div className={styles.box_content}>
            <h1>first flight</h1>
            <h3>{formatDate}</h3>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.box_content}>
            <h1>Name</h1>
            <h3>{name}</h3>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.box_content}>
            <h1>crew capacity</h1>
            <h3>{crew_capacity}</h3>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <button
          className={`${styles.slider_btn} ${styles.left}`}
          onClick={handleBack}
        >
          <FaChevronLeft />
        </button>
        {flickr_images !== undefined ? (
          <img src={flickr_images[idx]} alt="flickr img" />
        ) : (
          <LoadingSpinner />
        )}
        <button
          className={`${styles.slider_btn} ${styles.right}`}
          onClick={handleForward}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className={styles.desc_container}>
        {launch_payload_mass !== undefined && (
          <div className={styles.details}>
            <h3>Type:- {type}</h3>
            <h3>Launch Mass:- {launch_payload_mass.kg}kg</h3>
            <h3>Height plus trunk:- {height_w_trunk.meters}m</h3>
            <h3>Diameter:- {diameter.meters}m</h3>
            {active && <div className={styles.status}>active</div>}
          </div>
        )}
        <div className={styles.desc}>{description}</div>
      </div>
    </div>
  );
}
export default DragonTemp;
