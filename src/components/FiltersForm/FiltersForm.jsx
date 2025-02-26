import { Field, Formik, Form } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands, getAllCars } from '../../redux/cars/operations';
import Select from '../Select/Select';
import carsPrices from '../../carsPrices.json';
import { selectAllBrands } from '../../redux/cars/selectors';

import css from './FiltersForm.module.css';

import { changeFilter, initialState } from '../../redux/filters/slice';

const initialValues = {
  brand: '',
  rentalPrice: '',
  minMileage: '',
  maxMileage: '',
};

const FiltersForm = ({ page, setPage }) => {
  const dispatch = useDispatch();
  const brands = useSelector(selectAllBrands);

  useEffect(() => {
    dispatch(getAllBrands());
  }, [dispatch]);

  const handleSubmit = values => {
    setPage(1);
    dispatch(changeFilter(initialState.filters));
    dispatch(changeFilter(values));
    dispatch(getAllCars(page));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.fieldWrapper}>
          <label className={css.label} htmlFor="brand">
            Car brand
          </label>
          <Field
            id="brand"
            name="brand"
            component={Select}
            options={brands}
            placeholder={'Choose a brand'}
          />
        </div>
        <div className={css.fieldWrapper}>
          <label className={css.label} htmlFor="price">
            Price/ 1 hour
          </label>
          <Field
            id="price"
            name="rentalPrice"
            component={Select}
            options={carsPrices}
            placeholder={'Choose a price'}
          />
        </div>
        <div className={css.fieldWrapper}>
          <label className={css.label} htmlFor="minMileage">
            Car mileage / km
          </label>
          <div className={css.mileageInputWrapper}>
            <Field
              className={css.mileageInput}
              id="minMileage"
              name="minMileage"
              type="text"
              placeholder="From"
            />
            <Field
              className={css.mileageInput}
              name="maxMileage"
              type="text"
              placeholder="To"
            />
          </div>
        </div>
        <button className={css.btn} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default FiltersForm;
