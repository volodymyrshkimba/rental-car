import { useState } from 'react';

import Icon from '../Icon/Icon.jsx';

import css from './Select.module.css';

import clsx from 'clsx';
import { selectAllFilters } from '../../redux/filters/selectors.js';
import { useSelector } from 'react-redux';

const Select = ({ options, placeholder, form, field, id, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const filters = useSelector(selectAllFilters);

  return (
    <button
      className={css.select}
      id={id}
      type="button"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      {field.name === 'rentalPrice' && (
        <span className={css.placeholder}>
          {filters.rentalPrice || placeholder}
        </span>
      )}
      {field.name === 'brand' && (
        <span className={css.placeholder}>{filters.brand || placeholder}</span>
      )}
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
          {options !== null &&
            options.map(item => {
              return (
                <li
                  className={css.option}
                  key={item}
                  onClick={() => {
                    setIsOpen(false);
                    form.setFieldValue(field.name, item);
                    onChange({ [field.name]: item });
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
