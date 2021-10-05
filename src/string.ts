import { isString } from './guards';
import { tokenize } from './internals/tokenize';

export const toSpaceCase = tokenize;

/**
 * converts crlf to lf
 */
export const crlfToLF = (str: string): string => str.replace(/\r\n/g, '\n');

/**
 * uppercase first letter + lowercase rest
 */
export const toCapitalCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

/**
 * convert any casing to camelCase
 */
export const toCamelCase = (str: string) =>
  toSpaceCase(str).replace(/\s([a-z])/g, (_, letter) => letter.toUpperCase());

/**
 * convert any casing to snake_case
 */
export const toSnakeCase = (str: string) =>
  toSpaceCase(str).replace(/(\s[a-z])/g, (_, letter) => `_${letter.slice(1)}`);

/**
 * convert any casing to kebab-case
 */
export const toKebabCase = (str: string) =>
  toSpaceCase(str).replace(/(\s[a-z])/g, (_, letter) => `-${letter.slice(1)}`);

/**
 * convert any casing to PascalCase
 */
export const toPascalCase = (str: string) => toCapitalCase(toCamelCase(str));

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
 * check if value is null, undefined or empty string or array
 */
export const isNullOrEmpty = (x: any[] | string): boolean =>
  x == null || x.length === 0;
