/**
 * Check whether the given value is an object
 *
 * @param {unknown} x
 * @returns {boolean}
 *
 * @example
 *
 * isObject('')            // false
 * isObject('hello world') // false
 * isObject(null)          // false
 * isObject(true)          // false
 * isObject(undefined)     // false
 * isObject(NaN)           // false
 * isObject(0)             // false
 * isObject(isObject)      // false
 * isObject(false)         // false
 * isObject([])            // false
 * isObject([2])           // false
 * isObject({})            // true
 * isObject({ a: 2 })      // true
 * isObject({ 2: 'a' })    // true
 */
export const isObject = (
  x: unknown,
): x is Record<number | string | symbol, any> =>
  typeof x === 'object' && !Array.isArray(x) && x !== null;
