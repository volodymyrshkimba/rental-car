export const editMileage = (mileage, symbol) => {
  const splited = mileage?.toString().split('');
  splited?.splice(1, 0, symbol);
  return splited?.join('');
};
