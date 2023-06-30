import type { Truthy } from '../types/types.ts';

/**
 * Check whether the given value is truthy
 *
 * @template T
 * @param {T} x any value
 * @returns {boolean} true when the value is truthy
 *
 * @example
 *
 * isTruthy(undefined) // false
 * isTruthy(NaN)    // false
 * isTruthy(false)  // false
 * isTruthy(0)      // false
 * isTruthy(null)   // false
 * isTruthy('null') // true
 * isTruthy(1)      // true
 * isTruthy([])     // true
 * isTruthy({})     // true
 */
export const isTruthy = <T>(x: T): x is Truthy<T> => Boolean(x);
