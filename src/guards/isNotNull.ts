/**
 * Check whether the given value is not nullable (undefined or null)
 *
 * @param {unknown} x
 * @returns {boolean}
 *
 * @example
 *
 * isNotNull(undefined) // false
 * isNotNull(null)      // false
 * isNotNull('null')    // true
 * isNotNull(0)         // true
 * isNotNull([])        // true
 * isNotNull({})        // true
 * isNotNull(false)     // true
 */
export const isNotNull = <T>(x: T): x is NonNullable<T> => x != null;
