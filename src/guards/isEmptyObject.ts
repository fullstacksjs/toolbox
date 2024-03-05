import { isPlainObject } from './isPlainObject';

/**
 * Check whether the given value is an empty object or not
 *
 * @param x any value
 * @returns {boolean} true if the value is an empty object
 *
 * @example
 *
 * isEmptyObject({})                    // true
 * isEmptyObject([])                    // false
 * isEmptyObject(10)                    // false
 * isEmptyObject(true)                  // false
 * isEmptyObject(null)                  // false
 * isEmptyObject("bar")                 // false
 * isEmptyObject({a: 1})                // false
 * isEmptyObject(() => {})              // false
 * isEmptyObject(new Map())             // false
 * isEmptyObject(new Set())             // false
 * isEmptyObject([1, "foo"])            // false
 * isEmptyObject(new Set([1, true]))    // false
 * isEmptyObject(new Map([["a", 1]]))   // false
 */

export function isEmptyObject(x: unknown): x is boolean {
  if (!isPlainObject(x)) return false;

  return Object.keys(x).length === 0;
}
