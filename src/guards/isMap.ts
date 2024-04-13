import { getTypeOf } from '../types/getTypeOf.js';

/**
 * Check whether the given value is a Map or not.
 *
 * @param {unknown} x any value.
 * @return {boolean} true if the value is a Map.
 *
 * @example
 *
 * isMap(new Map([["a", 1]]))   // true
 * isMap(new Map())             // true
 * isMap(new Set([1, 2]))       // false
 * isMap(new Set())             // false
 * isMap({a: 1})                // false
 * isMap({})                    // false
 * isMap([])                    // false
 * isMap([1, 2, 3])             // false
 * isMap(Symbol("bar"))         // false
 * isMap("")                    // false
 * isMap("foo")                 // false
 * isMap(1)                     // false
 * isMap(NaN)                   // false
 * isMap(true)                  // false
 * isMap(null)                  // false
 * isMap(undefined)             // false
 */
export function isMap(x: unknown): x is Map<unknown, unknown> {
  return getTypeOf(x) === 'map';
}
