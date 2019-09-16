/**
 * converts crlf to lf
 * @param {string} value
 * @returns string with lf line ending
 */
export const normalizeLineEndings = (str: string) => str.replace(/\r\n/g, '\n');

/**
 * uppercase first letter + lowercase rest
 * @param {string} value
 * @returns Capital value
 */
export const toCapitalCase = (str: string) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

/**
 * convert kebab-case to camelCase
 * @param {string} value
 * @returns camelCase value
 */
export const kebabToCamel = (str: string) =>
  str
    .split('-')
    .map((part, key) => (key === 0 ? part : toCapitalCase(part)))
    .join('');

/**
 * return initial chars of an string
 * @param {string} value
 * @param {string} [fallback='?']
 * @returns initials chars of a name
 * @example
 * getInitials('frontend monsters'); // FM
 */
export const getInitials = (name: string, fallback = '?') =>
  typeof name === 'string' && name.length > 0
    ? name
        .replace(/\s+/g, ' ')
        .split(' ')
        .slice(0, 2)
        .map(v => v && v[0].toUpperCase())
        .join('')
    : fallback;
