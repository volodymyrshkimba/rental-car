import { useSelector } from 'react-redux';
import { selectAllCars } from '../../redux/cars/selectors';

import CarsItem from '../CarsItem/CarsItem';

import css from './CarsList.module.css';

const CarsList = () => {
  const allCars = useSelector(selectAllCars);

  return (
    <ul className={css.list}>
      {allCars !== null && allCars.length !== 0 ? (
        allCars.map(item => {
          return <CarsItem key={item.id} {...item} />;
        })
      ) : (
        <li className={css.notFound}>No cars available for your search</li>
      )}
    </ul>
  );
};

export default CarsList;
