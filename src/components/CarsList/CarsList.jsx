import { useSelector } from 'react-redux';
import { selectAllCarsWithFavourites } from '../../redux/cars/selectors';

import CarsItem from '../CarsItem/CarsItem';

import css from './CarsList.module.css';

const CarsList = () => {
  const allCarsWithFavourites = useSelector(selectAllCarsWithFavourites);

  return (
    <ul className={css.list}>
      {Array.isArray(allCarsWithFavourites) &&
        allCarsWithFavourites.length === 0 && (
          <li className={css.notFound}>No cars available for your search</li>
        )}
      {Array.isArray(allCarsWithFavourites) &&
        allCarsWithFavourites.length !== 0 &&
        allCarsWithFavourites.map(item => {
          return <CarsItem key={item.id} {...item} />;
        })}
    </ul>
  );
};

export default CarsList;
