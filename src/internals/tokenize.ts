import { passesMin } from '../function';
import { testRegex } from '../regex';

const camelOrPascalRegex = /[A-Z]/g;
const snakeRegex = /_./g;
const kebabRegex = /-./g;

const fromCamelOrPascal = (x: string) =>
  x
    .replace(
      camelOrPascalRegex,
      (match, offset: number) => (offset > 0 ? ' ' : '') + match,
    )
    .toLowerCase();
const fromSnake = (x: string) =>
  x
    .replace(
      snakeRegex,
      (match, offset: number) => (offset > 0 ? ' ' : '') + match.slice(1),
    )
    .toLowerCase();

const fromKebab = (x: string) =>
  x
    .replace(
      kebabRegex,
      (match, offset: number) => (offset > 0 ? ' ' : '') + match.slice(1),
    )
    .toLowerCase();

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 * @internal
 * @param {string} str
 * @return {string}
 */
export const tokenize = (str: string): string => {
  const isMoreThanOneCase = passesMin(
    2,
    [
      s => testRegex(snakeRegex, s),
      s => testRegex(kebabRegex, s),
      s => testRegex(camelOrPascalRegex, s),
    ],
    str,
  );
  console.log(isMoreThanOneCase);
  if (isMoreThanOneCase) return str;
  if (testRegex(snakeRegex, str)) return fromSnake(str);
  if (testRegex(kebabRegex, str)) return fromKebab(str);
  if (testRegex(camelOrPascalRegex, str)) return fromCamelOrPascal(str);
  return str;
};
