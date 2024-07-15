import type {Nullable} from '../types/types.js';

/**
 * Checks whether the given value is null, undefined or empty string.
 *
 * @param {string} arr an string
 * @returns {boolean} true when the value is null or empty string
 *
 * @example
 *
 * isNullOrEmptyArray(null)        // true
 * isNullOrEmptyArray(undefined)   // true
 * isNullOrEmptyArray([])          // true
 * isNullOrEmptyArray([0])         // false
 * isNullOrEmptyArray([,])         // false
 * isNullOrEmptyArray([null])      // false
 * isNullOrEmptyArray([undefined]) // false
 */
export function isNullOrEmptyArray<T extends any[]>(
  arr: Nullable<T | []>,
): arr is Nullable<[]> {
  return arr == null || arr.length === 0;
}
