/* eslint-disable import/prefer-default-export */
export const shorten = (text, maxLength = 140) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;

  return `${text.substring(0, maxLength)}...`;
};
