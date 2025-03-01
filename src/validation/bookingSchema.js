import * as Yup from 'yup';

export const bookingSchema = Yup.object({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email('Email must be a valid email address.')
    .required('Email is required.'),
  date: Yup.string(),
  comment: Yup.string(),
});
