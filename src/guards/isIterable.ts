/**
 * Check whether the given value is iteratable or not
 *
 * @param {unknown} x any value
 * @returns {boolean} true if the value is iterable
 *
 * @example
 *
 * isIterable([])        // true
 * isIterable(new Map()) // true
 * isIterable('some')    // true
 * isIterable({})        // false
 * isIterable(undefined) // false
 */
export const isIterable = <T>(x: unknown): x is Iterable<T> =>
  Symbol.iterator in Object(x);
