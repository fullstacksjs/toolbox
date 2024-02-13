import type { Nullable } from '../types';

/**
 * Checks whether the given value is null, undefined or empty string.
 *
 * @param {string} str an string
 * @returns {boolean} true when the value is null or empty string
 *
 * @example
 *
 * isNullOrEmptyString(null)      // true
 * isNullOrEmptyString(undefined) // true
 * isNullOrEmptyString('')        // true
 * isNullOrEmptyString('f')       // false
 */
export function isNullOrEmptyString(
  str: Nullable<string>,
): str is Nullable<''> {
  return str == null || str === '';
}
