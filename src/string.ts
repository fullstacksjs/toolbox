/**
 * converts crlf to lf
 * @param {string} str - value
 * @returns {string} value with lf line ending
 */
export const crlfToLF = (str: string): string => str.replace(/\r\n/g, '\n');

/**
 * uppercase first letter + lowercase rest
 * @param {string} str - word to become capitalize
 * @returns {string} Capitalzed value
 */
export const toCapitalCase = (str: string): string => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

/**
 * convert kebab-case to camelCase
 * @param {string} str - kebab-case string
 * @returns {string} camelCase representation of string
 */
export const kebabToCamel = (str: string): string =>
  str
    .split('-')
    .map((part, key) => (key === 0 ? part : toCapitalCase(part)))
    .join('');

/**
 * return initial chars of words
 * @param {string} name - value to get initials from
 * @param {string} [fallback='?'] - return value if opration failed
 * @returns {string} initials chars of a words || fallback
 * @example getInitials('frontend monsters'); //-> FM
 */
export const getInitials = (name: string, fallback = '?'): string =>
  typeof name === 'string' && name.length > 0
    ? name
        .replace(/\s+/g, ' ')
        .split(' ')
        .slice(0, 2)
        .map(v => v?.[0].toUpperCase())
        .join('')
    : fallback;

/**
 * check if value is null, undefined or empty string
 * @param {*} x - any value
 * @returns {boolean} is null | undefined | empty string
 */
export const isNullOrEmpty = (x: any): boolean => x == null || x === '';
