/**
 * Checks whether the given value is boolean or not
 *
 * @param {unknown} x any value
 * @returns {boolean} is the value boolean
 *
 * @example
 *
 * isBoolean(true)      // true
 * isBoolean(false)     // true
 * isBoolean('')        // false
 * isBoolean(undefined) // false
 * isBoolean(null)      // false
 * isBoolean(1)         // false
 * isBoolean(['1'])     // false
 */
export const isBoolean = (x: unknown): x is boolean => typeof x === 'boolean';
