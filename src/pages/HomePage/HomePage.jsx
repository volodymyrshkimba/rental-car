import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.subtitle}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link className={css.viewButton} to="/catalog">
        View Catalog
      </Link>
    </div>
  );
};

export default HomePage;
