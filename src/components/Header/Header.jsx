import { Link } from 'react-router-dom';

import Icon from '../Icon/Icon';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.pageHeader}>
      <Container>
        <div className={css.wrapper}>
          <Link to="/">
            <Icon name="logo" width={104} height={16} />
          </Link>
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
