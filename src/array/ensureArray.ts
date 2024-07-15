import type {EnsureArray} from '../types/types.ts';

/**
 * If the given value is not an array already, it wraps the value in an array.
 *
 * @template T
 * @param {T} x any value
 * @returns {T[]} array version of the value
 *
 * @example
 *
 * ensureArray(null);           // [null]
 * ensureArray(undefined);      // [undefined]
 * ensureArray('string');       // ['string']
 * ensureArray(['array']);      // ['array']
 * ensureArray([1, 2, 3]);      // [1, 2, 3]
 * ensureArray({ foo: 'bar' }); // [{ foo: 'bar' }]
 */
export function ensureArray<T>(x: T): EnsureArray<T> {
  return Array.isArray(x) ? (x as any) : [x];
}
