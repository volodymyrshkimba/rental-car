export const editMileage = mileage => {
  const splited = mileage?.toString().split('');
  splited?.splice(1, 0, ' ');
  return splited?.join('');
};
