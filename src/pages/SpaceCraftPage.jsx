import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSpaceCraft } from '../features/spaceCraft/spaceCraftSlice';
import DragonTemp from '../components/craftTypeLayout/DragonTemp';
import RocketTemp from '../components/craftTypeLayout/RocketTemp';
import { useDispatch, useSelector } from 'react-redux';

function SpaceCraftPage() {
  const { category, id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpaceCraft({ category, id }));
  }, [dispatch, category, id]);

  const { spaceCraft, isLoading } = useSelector((store) => store.spaceCraft);

  return (
    <section>
      {category === 'dragons' && (
        <DragonTemp spaceCraft={spaceCraft} isLoading={isLoading} />
      )}
      {category === 'rockets' && (
        <RocketTemp spaceCraft={spaceCraft} isLoading={isLoading} />
      )}
    </section>
  );
}
export default SpaceCraftPage;
