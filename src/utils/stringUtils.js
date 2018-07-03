/* eslint-disable import/prefer-default-export */
export const shorten = (text) => {
  if (!text) return '';
  if (text.length <= 140) return text;

  return `${text.substring(0, 140)}...`;
};
