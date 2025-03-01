import { ErrorMessage, Field } from 'formik';
import clsx from 'clsx';

import css from './InputWrapper.module.css';

const InputWrapper = ({ type, name, placeholder, ...props }) => {
  return (
    <div className={css.wrapper}>
      <Field
        {...props}
        autoComplete={name}
        className={clsx(css.input, name === 'comment' && css.textarea)}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage className={css.errorMessage} name={name} component="span" />
    </div>
  );
};

export default InputWrapper;
