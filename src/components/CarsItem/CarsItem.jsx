import { capitalizeText } from '../../utils/capitalizeText';
import { editMileage } from '../../utils/editMileage';

import ButtonLink from '../ButtonLink/ButtonLink';
import FavouriteButton from '../FavouriteButton/FavouriteButton';

import css from './CarsItem.module.css';

const CarsItem = ({
  id,
  img,
  favourite,
  brand,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
}) => {
  return (
    <li className={css.item}>
      <FavouriteButton id={id} favourite={favourite} />
      <div className={css.imgWrapper}>
        <img className={css.image} src={img} alt={`${brand} ${model}`} />
      </div>
      <div className={css.carInfo}>
        <div className={css.mainInfo}>
          <p>
            {brand} <span className={css.model}>{model}</span>, {year}
          </p>
          <p>${rentalPrice}</p>
        </div>
        <div className={css.desc}>
          <ul className={css.infoList}>
            <li className={css.infoItem}>{address?.split(',')[1]}</li>
            <li className={css.infoItem}>{address?.split(',')[2]}</li>
            <li className={css.infoItem}>{rentalCompany}</li>
          </ul>
          <ul className={css.infoList}>
            <li className={css.infoItem}>{capitalizeText(type)}</li>
            <li>{editMileage(mileage, ' ')} km</li>
          </ul>
        </div>
        <ButtonLink to={`/catalog/${id}`}>Read more</ButtonLink>
      </div>
    </li>
  );
};

export default CarsItem;
