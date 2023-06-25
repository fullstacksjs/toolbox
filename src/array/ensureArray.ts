import type { EnsureArray } from '../types/types';

/**
 * If the given value is not an array already, it wraps the value in an array.
 *
 * @template T
 * @param {T} value - any value
 * @returns {T[]}
 */
export function ensureArray<T>(x: T): EnsureArray<T> {
  return Array.isArray(x) ? (x as any) : [x];
}
