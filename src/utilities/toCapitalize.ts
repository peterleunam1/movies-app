export const toCapitalize = (string: string) => {
  return string.toUpperCase().charAt(0) + string.toLowerCase().slice(1);
};
