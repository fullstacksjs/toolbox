/**
 * Check whether the given value is string or not
 *
 * @param {unknown} x
 * @returns {x is string}
 *
 * @example
 *
 * isString('')        // true
 * isString(undefined) // false
 * isString(null)      // false
 * isString(1)         // false
 * isString(['1'])     // false
 */
export const isString = (x: unknown): x is string => typeof x === 'string';
