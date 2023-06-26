import type { Nullish } from '../types/types';

/**
 * Check whether the given value is nullable (undefined or null)
 *
 * @param {unknown} x
 * @returns {boolean}
 *
 * @example
 *
 * isNull(undefined) // true
 * isNull(null)      // true
 * isNull('null')    // false
 * isNull(0)         // false
 * isNull([])        // false
 * isNull({})        // false
 * isNull(false)     // false
 */
export const isNull = (x: unknown): x is Nullish => x == null;
