import { useState } from 'react';

import Icon from '../Icon/Icon.jsx';

import css from './Select.module.css';

import clsx from 'clsx';

const Select = ({ options, placeholder, form, field, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className={css.select}
      id={id}
      type="button"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <span className={css.placeholder}>
        {field.value && field.name === 'rentalPrice'
          ? `To $${field.value}`
          : field.value || placeholder}
      </span>
      <div className={css.openArrow}>
        {isOpen ? (
          <Icon name="arrow-up" width={16} height={16} />
        ) : (
          <Icon name="arrow-down" width={16} height={16} />
        )}
      </div>
      <div
        className={clsx(
          css.listWrapper,
          isOpen && css.visible,
          field.name === 'rentalPrice' && css.priceHeight
        )}
      >
        <ul className={clsx(css.optionsList)}>
          <li
            className={css.option}
            onClick={() => {
              setIsOpen(false);
              form.setFieldValue(field.name, '');
            }}
          >
            ----
          </li>
          {options !== null &&
            options.map(item => {
              return (
                <li
                  className={css.option}
                  key={item}
                  onClick={() => {
                    setIsOpen(false);
                    form.setFieldValue(field.name, item);
                  }}
                >
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
    </button>
  );
};

export default Select;
