import type { Predicate } from '../types';

/**
 * Remove key from an object when predicate is true
 *
 * @template T
 * @param {T} obj an object
 * @param {Predicate} predicate a predicate that specifies when key should be removed.
 * @returns {T} pruned object
 *
 * pruneKeyWhen({ a: { b: null } }, () => false)      // { a: { b: null } }
 * pruneKeyWhen({ a: 'John', b: {} }, () => true)     // {}
 * pruneKeyWhen({ a: null, age: '' }, k => k === 'a') // { a: null }
 */
export function pruneKeyWhen<T extends object>(
  obj: T,
  predicate: Predicate,
): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !predicate(key)),
  ) as T;
}
