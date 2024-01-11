import { getTypeOf } from '../types';

/**
 * Check whether the given value is a Set or not.
 *
 * @param {unknown} x any value.
 * @return {boolean} true if the value is a Set.
 *
 * @example
 *
 * isSet(new Set([1, 2]))       // true
 * isSet(new Set())             // true
 * isSet(new Map([["a", 1]]))   // false
 * isSet(new Map())             // false
 * isSet({a: 1})                // false
 * isSet({})                    // false
 * isSet([])                    // false
 * isSet([1, 2, 3])             // false
 * isSet(Symbol("bar"))         // false
 * isSet("")                    // false
 * isSet("foo")                 // false
 * isSet(1)                     // false
 * isSet(NaN)                   // false
 * isSet(true)                  // false
 * isSet(null)                  // false
 * isSet(undefined)             // false
 */
export function isSet(x: unknown): x is Set<unknown> {
  return getTypeOf(x) === 'set';
}
