import { Field, Formik, Form } from 'formik';

import css from './RentForm.module.css';
import clsx from 'clsx';

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const RentForm = () => {
  const handleSubmit = values => {};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <p className={css.title}>Book your car now</p>
        <p className={css.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={css.inputsWrapper}>
          <Field
            className={css.input}
            type={'text'}
            name={'name'}
            placeholder={'Name*'}
          />
          <Field
            className={css.input}
            type={'text'}
            name={'email'}
            placeholder={'Email*'}
          />
          <Field
            className={css.input}
            type={'date'}
            name={'date'}
            placeholder={'Booking date'}
          />
          <Field
            className={clsx(css.input, css.textarea)}
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
