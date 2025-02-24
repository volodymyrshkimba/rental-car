import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCars } from '../../redux/cars/operations';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return <div>CatalogPage</div>;
};

export default CatalogPage;
