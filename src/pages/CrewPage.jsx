import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCrew,
  prevPage,
  nextPage,
  handlePage,
  cleanUp,
} from '../features/crew/crewSlice';
import ProfileCard from '../components/Items/ProfileCard';
import PaginationBtns from '../components/UI/PaginationBtns';
import styles from './CrewPage.module.css';
import LoadingSpinner from '../components/UI/LoadingSpinner';

function CrewPage() {
  const dispatch = useDispatch();
  const [pageContent, setPageContent] = useState([]);

  const { crew, page, isLoading } = useSelector((store) => store.crew);

  useEffect(() => {
    dispatch(getAllCrew());

    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch]);

  useEffect(() => {
    setPageContent(crew[page]);
  }, [crew, page]);

  const handlePrevPage = () => {
    dispatch(prevPage());
  };
  const handleNextPage = () => {
    dispatch(nextPage());
  };
  const handleSetPage = (idx) => {
    dispatch(handlePage(idx));
  };

  return (
    <section>
      {pageContent !== undefined ? (
        <>
          <div className={styles.crew_container}>
            {pageContent.map((profile) => {
              return (
                <div className="profile_container" key={profile.id}>
                  <ProfileCard profile={profile} />
                </div>
              );
            })}
          </div>
          <div className={styles.center}>
            <PaginationBtns
              data={crew}
              isLoading={isLoading}
              page={page}
              prevPage={handlePrevPage}
              nextPage={handleNextPage}
              handlePage={handleSetPage}
            />
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
}
export default CrewPage;
