import { isNull, isString } from './guards.js';
import { isWordOrWords } from '../internals/string.js';
import { hasInvalidCasing, tokenize } from '../internals/tokenize.js';
import type { Nullish, Sensitivity } from '../types/types.js';

export const toSpaceCase = tokenize;

/**
 * converts crlf to lf
 */
export const crlfToLf = (str: string): string => str.replace(/\r\n/g, '\n');

/**
 * uppercase first letter + lowercase rest
 */
export const toCapitalCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

/**
 * convert any casing to camelCase
 */
export const toCamelCase = (str: string) =>
  hasInvalidCasing(str)
    ? str
    : toSpaceCase(str).replace(/\s([a-z])/g, (_, letter) =>
        letter.toUpperCase(),
      );

/**
 * convert any casing to snake_case
 */
export const toSnakeCase = (str: string) =>
  hasInvalidCasing(str)
    ? str
    : toSpaceCase(str).replace(
        /(\s[a-z])/g,
        (_, letter: string) => `_${letter.slice(1)}`,
      );

/**
 * convert any casing to kebab-case
 */
export const toKebabCase = (str: string) =>
  hasInvalidCasing(str)
    ? str
    : toSpaceCase(str).replace(
        /(\s[a-z])/g,
        (_, letter: string) => `-${letter.slice(1)}`,
      );

/**
 * convert any casing to PascalCase
 */
export const toPascalCase = (str: string) =>
  hasInvalidCasing(str)
    ? str
    : toCamelCase(str).replace(/^./, m => m.toUpperCase());

/**
 * check if value is null, undefined or empty string or array
 */
export const isNullOrEmpty = <T extends any[] | string>(
  x: Nullish | T | '' | [],
): x is Nullish | (T extends any[] ? [] : '') => isNull(x) || x.length === 0;

/**
 * return initial chars of words
 * @param {string} name - value to get initials from
 * @param {string} [fallback='?'] - return value if operation failed
 * @returns {string} initials chars of a words || fallback
 * @example getInitials('frontend monsters'); //-> FM
 */
export const getInitials = (name: string, fallback: string = '?'): string =>
  isString(name) && isWordOrWords(name.trim())
    ? name
        .replace(/\s+/g, ' ')
        .split(' ')
        .map(v => (isNullOrEmpty(v) ? '' : v.slice(0, 1).toUpperCase()))
        .join('')
    : fallback;

/**
 * removing trailing slashes from a string
 */
export const removeTrailingSlashes = (str: string): string =>
  str.replace(/\/+$/g, '');

/**
 * removing leading slashes from a string
 */
export const removeLeadingSlashes = (s: string) => s.replace(/^\/+/, '');

/**
 * join path parts with / and without trailing and leading slashes
 */
export const joinPath = (...paths: string[]): string => {
  const result = paths.map(el =>
    removeLeadingSlashes(removeTrailingSlashes(el)),
  );
  return result.join('/');
};

/**
 * Compare two path without trailing and leading slashes
 * @param {string} path1: first path
 * @param {string} path2: second path
 * @return {boolean} is they are equal
 */
export const comparePaths = (
  path1: string,
  path2: string,
  { sensitivity = 'accent' }: { sensitivity?: Sensitivity } = {},
): number => {
  const normalPath1 = removeLeadingSlashes(removeTrailingSlashes(path1));
  const normalPath2 = removeLeadingSlashes(removeTrailingSlashes(path2));
  return normalPath1.localeCompare(normalPath2, undefined, {
    sensitivity,
  });
};
