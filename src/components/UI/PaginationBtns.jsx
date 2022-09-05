import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './PaginationBtns.module.css';

function PaginationBtns({
  data,
  isLoading,
  prevPage,
  nextPage,
  handlePage,
  page,
}) {
  return (
    <>
      {!isLoading && (
        <div className={styles.btn_container}>
          {page !== 0 && (
            <button
              className={`${styles.btn} ${styles.prev_btn}`}
              onClick={prevPage}
            >
              <FaChevronLeft className={styles.icon} />
            </button>
          )}
          {data.map((item, index) => {
            let style;
            page === index
              ? (style = `${styles.page_btn} ${styles.active_btn}`)
              : (style = `${styles.btn} ${styles.page_btn}`);

            return (
              <button
                key={index}
                className={style}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          {page !== data.length - 1 && (
            <button
              className={`${styles.btn} ${styles.next_btn}`}
              onClick={nextPage}
            >
              <FaChevronRight className={styles.icon} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
export default PaginationBtns;
