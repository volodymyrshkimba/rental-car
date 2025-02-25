import ButtonLink from '../ButtonLink/ButtonLink';

import css from './CarsItem.module.css';

const CarsItem = ({
  id,
  img,
  brand,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
}) => {
  const editMileage = mileage => {
    const splited = mileage.toString().split('');
    splited.splice(1, 0, ' ');
    return splited.join('');
  };

  const capitalizeText = text => {
    const splited = text.toLowerCase().split('');
    splited[0] = splited[0].toUpperCase();
    return splited.join('');
  };

  return (
    <li className={css.item}>
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
            <li className={css.infoItem}>{address.split(',')[1]}</li>
            <li className={css.infoItem}>{address.split(',')[2]}</li>
            <li className={css.infoItem}>{rentalCompany}</li>
          </ul>
          <ul className={css.infoList}>
            <li className={css.infoItem}>{capitalizeText(type)}</li>
            <li>{editMileage(mileage)} km</li>
          </ul>
        </div>
        <ButtonLink to={`/catalog/${id}`}>Read more</ButtonLink>
      </div>
    </li>
  );
};

export default CarsItem;
