import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ListItems.module.css';
import { getVehicles, reset } from '../features/vehicle/vehicleSlice';
import { useSelector, useDispatch } from 'react-redux';
import ItemsCard from '../components/Items/ItemsCard';
import LoadingSpinner from '../components/UI/LoadingSpinner';

function ListItems() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { vehicles, isLoading, message } = useSelector(
    (state) => state.vehicle
  );

  useEffect(() => {
    dispatch(getVehicles(category));

    return () => {
      dispatch(reset());
    };
  }, [category, dispatch]);

  if (isLoading) return <LoadingSpinner />;
  if (message) return <h2>{message}</h2>;

  return (
    <div className={styles.section}>
      <h1>{category} List</h1>
      <div className={styles.itemsContainer}>
        {vehicles.map((vehicle) => (
          <ItemsCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}
export default ListItems;
