import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CarsList from '../../components/CarsList/CarsList';
import Container from '../../components/Container/Container';
import FiltersForm from '../../components/FiltersForm/FiltersForm';
import LoadMore from '../../components/LoadMore/LoadMore';

import { selectLoading } from '../../redux/cars/selectors';
import { getAllCars } from '../../redux/cars/operations';

import css from './CatalogPage.module.css';
import Loader from '../../components/Loader/Loader';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllCars(page));
  }, [dispatch, page]);

  return (
    <div className={css.catalogPage}>
      {loading && <Loader />}

      <Container>
        <FiltersForm />
        <CarsList />
        <LoadMore page={page} setPage={setPage} />
      </Container>
    </div>
  );
};

export default CatalogPage;
