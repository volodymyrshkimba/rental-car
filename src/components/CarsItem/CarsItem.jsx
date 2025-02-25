import css from './CarsItem.module.css';

const CarsItem = ({ img, brand, model }) => {
  return (
    <li className={css.item}>
      <div>
        <img src={img} alt={`${brand} ${model}`} />
      </div>
    </li>
  );
};

export default CarsItem;
