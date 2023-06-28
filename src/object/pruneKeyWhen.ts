import type { Predicate } from '../types/types';

/**
 * Remove key from an object when predicate is true
 *
 * @template T
 * @param {T} obj an object
 * @param {Predicate} predicate a predicate that specifies when key should be removed.
 * @returns {T} pruned object
 */
export function pruneKeyWhen<T extends object>(
  obj: T,
  predicate: Predicate,
): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !predicate(key)),
  ) as T;
}
