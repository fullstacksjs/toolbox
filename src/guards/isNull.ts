import type {Nullable} from '../types/types.ts';

/**
 * Check whether the given value is nullable (undefined or null)
 *
 * @param {unknown} x any value
 * @returns {boolean} true if the value is null
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
export const isNull = (x: unknown): x is Nullable => x == null;
