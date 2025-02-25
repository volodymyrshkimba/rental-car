import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCars } from '../../redux/cars/operations';
import CarsList from '../../components/CarsList/CarsList';
import Container from '../../components/Container/Container';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <CarsList />
      </Container>
    </div>
  );
};

export default CatalogPage;
