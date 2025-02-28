import * as Yup from 'yup';

export const bookingSchema = Yup.object({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email('Email must be a valid email address.')
    .required('Email is required.'),
  date: Yup.date().min(new Date(), 'Date must be in the future.'),
  comment: Yup.string(),
});
