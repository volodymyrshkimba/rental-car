export const capitalizeText = text => {
  const splited = text?.toLowerCase().split('');
  if (splited) splited[0] = splited[0]?.toUpperCase();
  return splited?.join('');
};
