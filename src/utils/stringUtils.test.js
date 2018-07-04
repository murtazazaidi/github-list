import { shorten } from './stringUtils';

it('shortens the text if text exceeds maxLength', () => {
  const text = 'A quick brown fox jumps over the lazy dog';
  const maxLength = 10;
  const resultString = shorten(text, maxLength);
  expect(resultString.length).toEqual(maxLength + 3);
});

it('does not shorten text if text does not exceeds maxLength', () => {
  const text = 'A quick brown fox jumps over the lazy dog';
  const maxLength = 100;
  const resultString = shorten(text, maxLength);
  expect(resultString).toEqual(text);
});
