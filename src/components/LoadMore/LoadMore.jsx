import { useSelector } from 'react-redux';
import css from './LoadMore.module.css';
import { selectTotalPages } from '../../redux/cars/selectors';

const LoadMore = ({ page, setPage }) => {
  const totalPages = useSelector(selectTotalPages);

  return (
    <>
      {totalPages !== null && totalPages > page && (
        <button
          className={css.btn}
          type="button"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          LoadMore
        </button>
      )}
    </>
  );
};

export default LoadMore;
