import { useDispatch, useSelector } from 'react-redux';
import css from './FavouriteButton.module.css';
import { selectAllFavourites } from '../../redux/filters/selectors';
import { addFavourite, deleteFavourite } from '../../redux/filters/slice';
import Icon from '../Icon/Icon';

const FavouriteButton = ({ id, favourite }) => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectAllFavourites);

  const handleClick = () => {
    const isFavourite = favourites.find(item => item === id);

    if (!isFavourite) {
      dispatch(addFavourite(id));
      return;
    }

    dispatch(deleteFavourite(id));
  };

  return (
    <button className={css.btn} onClick={handleClick}>
      {favourite ? (
        <Icon name={'heart-favourite'} width={16} height={16} />
      ) : (
        <Icon name={'heart'} width={16} height={16} />
      )}
    </button>
  );
};

export default FavouriteButton;
