/**
 * Returns a boolean indicating whether the string is lower case.
 *
 * @param {string} str any string
 * @returns {boolean} is all character is lowercase
 *
 * @example
 *
 * isLowerCase('')           // false
 * isLowerCase('test')       // true
 * isLowerCase('TEST')       // false
 * isLowerCase('Test')       // false
 * isLowerCase('123')        // false
 * isLowerCase('snake_case') // true
 */
export function isLowerCase(str: string): boolean {
  return str.toLowerCase() === str && str.toUpperCase() !== str;
}
