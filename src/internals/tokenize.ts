import { testRegex } from '../regex/regex.js';
import type { Predicate } from '../types/types.js';

const camelOrPascalRegex = /[A-Z][a-z]+/g;
const snakeRegex = /_./g;
const kebabRegex = /-./g;

/**
 * @template T
 * @param {number} min minimum predicates that should be passed
 * @param {Predicate[]} ps list of predicates
 * @param {T} a the value to apply the predicates
 * @returns {boolean} true if specified minimum predicates pass the given value otherwise false
 *
 * @example
 *
 * const isDivisibleBy3 = x => x % 3 === 0
 * const isDivisibleBy5 = x => x % 5 === 0
 * const isLargerThan25 = x => x > 25
 *
 * const isValidNumber = x =>
 *  passesMin(2, [isDivisibleBy3, isDivisibleBy5, isSmallerThan25], x);
 *
 * isValidNumber(15) // returns true because its divisible by 5 and 3
 * isValidNumber(3)  // returns false because its only divisible by 3
 * isValidNumber(26) // returns false because its only larger than 25
 * isValidNumber(30) // returns true because its passes minimum 2 cases (being divisible by 5 and 3 and larger than 25)
 */
export function passesMin<T>(min: number, ps: Predicate<T>[], a: T): boolean {
  return ps.reduce((m, f) => (f(a) ? m - 1 : m), min) <= 0;
}

/**
 * @internal
 */
export const hasInvalidCasing = (str: string) =>
  passesMin(
    2,
    [
      s => testRegex(snakeRegex, s),
      s => testRegex(kebabRegex, s),
      s => testRegex(camelOrPascalRegex, s),
    ],
    str,
  );

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
  if (hasInvalidCasing(str)) return str;
  if (testRegex(snakeRegex, str)) return fromSnake(str);
  if (testRegex(kebabRegex, str)) return fromKebab(str);
  if (testRegex(camelOrPascalRegex, str)) return fromCamelOrPascal(str);
  return str.toLowerCase();
};
