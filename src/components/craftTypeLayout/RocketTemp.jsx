import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSpaceCraft } from '../../features/spaceCraft/spaceCraftSlice';
import LoadingSpinner from '../UI/LoadingSpinner';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './stylesTemp.module.css';

function RocketTemp() {
  const { category, id } = useParams();
  const dispatch = useDispatch();
  const { spaceCraft, isLoading } = useSelector((store) => store.spaceCraft);

  const { flickr_images, description } = spaceCraft;
  const [images, setImages] = useState([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const promise = dispatch(getSpaceCraft({ category, id }));

    return () => {
      promise.abort();
    };
  }, [dispatch, category, id]);

  useEffect(() => {
    setImages(flickr_images);
  }, [flickr_images]);

  if (isLoading) return <LoadingSpinner />;

  const handleBack = () => {
    if (idx === 0) {
      setIdx(images.length - 1);
    } else {
      setIdx((prev) => prev - 1);
    }
  };
  const handleForward = () => {
    if (idx === images.length - 1) {
      setIdx(0);
    } else {
      setIdx((prev) => prev + 1);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <div className={styles.box}>b1</div>
        <div className={styles.box}>b2</div>
        <div className={styles.box}>b3</div>
      </div>
      <div className={styles.image}>
        <button className={styles.slider_btn} onClick={handleBack}>
          <FaChevronLeft />
        </button>
        <img src={images[idx]} alt="flickr img" />
        <button className={styles.slider_btn} onClick={handleForward}>
          <FaChevronRight />
        </button>
      </div>
      <div className={styles.desc_container}>
        <div className={styles.desc}>{description}</div>
        <div className={styles.details}>Details</div>
      </div>
    </div>
  );
}
export default RocketTemp;
