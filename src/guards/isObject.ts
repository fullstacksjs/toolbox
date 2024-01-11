import type { ObjectType } from '../types/types';
import { getTypeOf } from '../types';

/**
 * Check whether the given value is an object
 *
 * @param {unknown} x any value
 * @returns {boolean} true when the value is an object
 *
 * @example
 *
 * isObject('')                   // false
 * isObject('hello world')        // false
 * isObject(null)                 // false
 * isObject(true)                 // false
 * isObject(undefined)            // false
 * isObject(NaN)                  // false
 * isObject(0)                    // false
 * isObject(isObject)             // false
 * isObject(false)                // false
 * isObject([])                   // false
 * isObject([2])                  // false
 * isObject(new Map())            // false
 * isObject(new Set())            // false
 * isObject(new RegExp('foo'))    // false
 * isObject({})                   // true
 * isObject({ a: 2 })             // true
 * isObject({ 2: 'a' })           // true
 */
export const isObject = (x: unknown): x is ObjectType =>
  getTypeOf(x) === 'object' && x !== null;
