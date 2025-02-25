import { useState } from 'react';

import css from './Select.module.css';

import clsx from 'clsx';

const Select = ({ options, placeholder, form, field }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <div className={css.select}>
      <span>
        {selected && field.name === 'rentalPrice'
          ? `To $${selected}`
          : selected || placeholder}
      </span>
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? 'close' : 'open'}
      </button>
      <ul className={clsx(css.optionsList, isOpen && css.visible)}>
        {options !== null &&
          options.map(item => {
            return (
              <li
                key={item}
                onClick={e => {
                  setIsOpen(false);
                  setSelected(e.target.innerText);
                  form.setFieldValue(field.name, item);
                }}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Select;
