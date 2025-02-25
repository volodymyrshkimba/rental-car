import { useSelector } from 'react-redux';
import { selectAllCars } from '../../redux/cars/selectors';

import CarsItem from '../CarsItem/CarsItem';

import css from './CarsList.module.css';

const CarsList = () => {
  const allCars = useSelector(selectAllCars);

  return (
    <ul className={css.list}>
      {allCars !== null &&
        allCars.map(item => {
          return <CarsItem key={item.id} {...item} />;
        })}
    </ul>
  );
};

export default CarsList;
