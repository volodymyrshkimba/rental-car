import css from './HomePage.module.css';
import ButtonLink from '../../components/ButtonLink/ButtonLink';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.subtitle}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <ButtonLink to="/catalog">View Catalog</ButtonLink>
    </div>
  );
};

export default HomePage;
