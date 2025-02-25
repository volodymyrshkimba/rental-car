import { Field, Formik, Form } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands } from '../../redux/cars/operations';
import Select from '../Select/Select';
import carsPrices from '../../carsPrices.json';
import { selectAllBrands } from '../../redux/cars/selectors';

const initialValues = {
  brand: '',
  rentalPrice: '',
  minMileage: '',
  maxMileage: '',
};

const FiltersForm = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectAllBrands);

  useEffect(() => {
    dispatch(getAllBrands());
  }, [dispatch]);

  return (
    <Formik initialValues={initialValues}>
      {({ values }) => {
        console.log(values);

        return (
          <Form>
            <Field
              name="brand"
              component={Select}
              options={brands}
              placeholder={'Choose a brand'}
            />
            <Field
              name="rentalPrice"
              component={Select}
              options={carsPrices}
              placeholder={'Choose a price'}
            />
            <Field name="minMileage" type="text" placeholder="From" />
            <Field name="maxMileage" type="text" placeholder="To" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FiltersForm;
