import css from './CarInfoList.module.css';

const CarInfoList = ({ items, icon: Icon }) => {
  return (
    <ul className={css.list}>
      {items?.map(item => {
        return (
          <li className={css.item} key={item}>
            {Icon}
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default CarInfoList;
