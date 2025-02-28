import { Formik, Form } from 'formik';
import toast from 'react-hot-toast';

import InputWrapper from '../InputWrapper/InputWrapper';

import { bookingSchema } from '../../validation/bookingSchema';

import css from './RentForm.module.css';

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const RentForm = ({ model, brand }) => {
  const handleSubmit = (values, actions) => {
    toast.success(
      `Your booking for ${brand} ${model} is being processed.\n\n We will confirm shortly.`,
      {
        duration: 10000,
      }
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={bookingSchema}
    >
      <Form className={css.form}>
        <p className={css.title}>Book your car now</p>
        <p className={css.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={css.inputsWrapper}>
          <InputWrapper type={'text'} name={'name'} placeholder={'Name*'} />
          <InputWrapper type={'email'} name={'email'} placeholder={'Email*'} />
          <InputWrapper type={'date'} name={'date'} />
          <InputWrapper
            as={'textarea'}
            name={'comment'}
            placeholder={'Comment'}
          />
        </div>
        <button className={css.btn} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default RentForm;
