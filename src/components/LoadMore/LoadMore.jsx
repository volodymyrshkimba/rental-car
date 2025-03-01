import { useSelector } from 'react-redux';

import { selectTotalPages } from '../../redux/cars/selectors';

import css from './LoadMore.module.css';

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
