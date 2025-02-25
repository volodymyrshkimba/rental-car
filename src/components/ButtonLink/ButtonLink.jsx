import { Link } from 'react-router-dom';
import css from './ButtonLink.module.css';

const ButtonLink = ({ children, to }) => {
  return (
    <Link className={css.buttonLink} to={to}>
      {children}
    </Link>
  );
};

export default ButtonLink;
