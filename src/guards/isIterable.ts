/**
 * Check whether the given value is iteratable or not
 *
 * @param {unknown} x
 * @returns {boolean}
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
