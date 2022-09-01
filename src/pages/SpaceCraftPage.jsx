import { useParams } from 'react-router-dom';
import DragonTemp from '../components/craftTypeLayout/DragonTemp';
import RocketTemp from '../components/craftTypeLayout/RocketTemp';

// import styles from './SpaceCraftPage.module.css';
function SpaceCraftPage() {
  const { category } = useParams();
  return (
    <section>
      {category === 'dragons' && <DragonTemp />}
      {category === 'rockets' && <RocketTemp />}
    </section>
  );
}
export default SpaceCraftPage;
