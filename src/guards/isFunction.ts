/**
 * Check whether the given value is a functions or not
 *
 * @param {unknown} x any value
 * @returns {boolean} true when the value is function
 *
 * @example
 *
 * isFunction(() => 1)   // true
 * isFunction(undefined) // false
 * isFunction(true)      // false
 * isFunction('string')  // false
 */
export const isFunction = (x: unknown): x is Function =>
  typeof x === 'function';
