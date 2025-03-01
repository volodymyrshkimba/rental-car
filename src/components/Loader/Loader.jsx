import { ClipLoader } from 'react-spinners';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <ClipLoader />
    </div>
  );
};

export default Loader;
