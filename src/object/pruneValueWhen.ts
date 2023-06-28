import type { Predicate } from '../types/types.js';

/**
 * Remove property from an object when predicate is true
 *
 * @template T
 * @param {T} obj an object
 * @param {Predicate} predicate a predicate that specifies when value should be removed.
 * @returns {T} pruned object
 */
export function pruneValueWhen<T extends object>(
  obj: T,
  predicate: Predicate,
): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => !predicate(value)),
  ) as T;
}
