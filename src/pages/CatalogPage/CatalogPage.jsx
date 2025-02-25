import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCars } from '../../redux/cars/operations';
import CarsList from '../../components/CarsList/CarsList';
import Container from '../../components/Container/Container';
import FiltersForm from '../../components/FiltersForm/FiltersForm';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <>
      <Container>
        <FiltersForm />
        <CarsList />
      </Container>
    </>
  );
};

export default CatalogPage;
