import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ListSpaceCraftPage.module.css';
import { getVehicles, reset, sortList } from '../features/vehicle/vehicleSlice';
import { useSelector, useDispatch } from 'react-redux';
import ItemsCard from '../components/Items/ItemsCard';
import Button from '../components/UI/Button';
import LoadingSpinner from '../components/UI/LoadingSpinner';

function ListItems() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { vehicles, isLoading, message } = useSelector(
    (state) => state.vehicle
  );
  const [order, setOrder] = useState(false);

  useEffect(() => {
    dispatch(getVehicles(category));

    return () => {
      dispatch(reset());
    };
  }, [category, dispatch]);

  if (isLoading) return <LoadingSpinner />;
  if (message) return <h2>{message}</h2>;

  const sort = () => {
    dispatch(sortList());
    setOrder(!order);
  };

  return (
    <div className={styles.section}>
      <div className={styles.action_container}>
        <Button customClass={styles.btn} onClick={sort}>
          Sort by {order ? 'asc' : 'desc'}
        </Button>
      </div>
      <div className={styles.itemsContainer}>
        {vehicles.map((vehicle) => (
          <ItemsCard key={vehicle.id} vehicle={vehicle} category={category} />
        ))}
      </div>
    </div>
  );
}
export default ListItems;
