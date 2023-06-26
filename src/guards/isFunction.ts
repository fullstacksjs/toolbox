/**
 * Check whether the given value is a functions or not
 *
 * @param {unknown} x
 * @returns {boolean}
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
