import { isString } from './guards';
import { tokenize } from './internals/tokenize';

/**
 * converts crlf to lf
 */
export const crlfToLF = (str: string): string => str.replace(/\r\n/g, '\n');

/**
 * convert any casing to space separated lowercase
 */
export const toSpaceCase = (str: string) =>
  tokenize(str)
    .replace(/[\W_]+(.|$)/g, (matches, match) => (match ? ` ${match}` : ''))
    .trim();

/**
 * convert any casing to space camelCase
 */
export const toCamelCase = (str: string) =>
  toSpaceCase(str).replace(/\s(\w)/g, (matches, letter) =>
    letter.toUpperCase(),
  );

/**
 * uppercase first letter + lowercase rest
 */
export const toCapitalCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

/**
 * return initial chars of words
 * @param {string} name - value to get initials from
 * @param {string} [fallback='?'] - return value if operation failed
 * @returns {string} initials chars of a words || fallback
 * @example getInitials('frontend monsters'); //-> FM
 */
export const getInitials = (name: string, fallback: string = '?'): string =>
  isString(name) && name.length > 0
    ? name
        .replace(/\s+/g, ' ')
        .split(' ')
        .slice(0, 2)
        .map(v => v?.[0]?.toUpperCase())
        .join('')
    : fallback;

/**
 * escape regex chars
 * Read more on {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping MDN}
 */
export const escapeRegExp = (s: string) =>
  s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * check if value is null, undefined or empty string or array
 */
export const isNullOrEmpty = (x: any[] | string): boolean =>
  x == null || x.length === 0;
