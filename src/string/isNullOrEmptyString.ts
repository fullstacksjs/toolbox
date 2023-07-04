import type { Nullable } from '../types/types.js';

/**
 * Checks whether the given value is null, undefined or empty string.
 *
 * @param {string} str an string
 * @returns {boolean} true when the value is null or empty string
 *
 * @example
 *
 * isNullOrEmpty(null)      // true
 * isNullOrEmpty(undefined) // true
 * isNullOrEmpty('')        // true
 * isNullOrEmpty('f')       // false
 */
export function isNullOrEmptyString(
  str: Nullable<string>,
): str is Nullable<''> {
  return str == null || str === '';
}
