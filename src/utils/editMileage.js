export const editMileage = (mileage, symbol) => {
  if (mileage === '') return '';
  const splited = mileage?.toString().split('');
  if (splited?.length !== 1) splited?.splice(1, 0, symbol);
  return splited?.join('');
};

export const mileageInputWrapper = (value, word) => {
  let cleared = value;

  if (value === word) return '';

  if (value.startsWith(word)) {
    cleared = clearMileageInputWrapper(value);
  }

  return `${word}${editMileage(cleared, ',')}`;
};

export const clearMileageInputWrapper = value => {
  if (!value) return '';

  return value?.split(' ')[1]?.split(',').join('');
};
