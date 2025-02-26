import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCars } from '../../redux/cars/operations';
import CarsList from '../../components/CarsList/CarsList';
import Container from '../../components/Container/Container';
import FiltersForm from '../../components/FiltersForm/FiltersForm';
import LoadMore from '../../components/LoadMore/LoadMore';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllCars(page));
  }, [dispatch, page]);

  return (
    <div className={css.catalogPage}>
      <Container>
        <FiltersForm />
        <CarsList />
        <LoadMore page={page} setPage={setPage} />
      </Container>
    </div>
  );
};

export default CatalogPage;
