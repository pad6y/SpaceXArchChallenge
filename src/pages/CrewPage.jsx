import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCrew } from '../features/crew/crewSlice';
import ProfileCard from '../components/Items/ProfileCard';
import styles from './CrewPage.module.css';

function CrewPage() {
  const dispatch = useDispatch();
  const { crew } = useSelector((store) => store.crew);

  useEffect(() => {
    dispatch(getAllCrew());
  }, [dispatch]);

  return (
    <section>
      <div className={styles.crew_container}>
        {crew.map((profile) => {
          return (
            <div className="profile_container" key={profile.id}>
              <ProfileCard profile={profile} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default CrewPage;
