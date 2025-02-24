import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

const isActive = ({ isActive }) => {
  return isActive ? css.active : '';
};

const Navigation = () => {
  return (
    <nav>
      <ul className={css.linkList}>
        <li className={css.link}>
          <NavLink className={isActive} to="/">
            Home
          </NavLink>
        </li>
        <li className={css.link}>
          <NavLink className={isActive} to="/catalog">
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
