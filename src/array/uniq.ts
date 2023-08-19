/**
 * Returns a new array with all duplicate elements removed.For object types, equality is determined by comparing references.
 *
 * @template T
 * @param {T[]} array the input array.
 * @returns {T[]} a new array with only unique elements from the input
 *
 * @example
 *
 * let object = { key: 'value' };
 *
 * uniq([object, object]);        // [{ key: 'value' }]
 * uniq([object, { ...object }]); // [{ key: 'value' }, { key: 'value' }]
 * uniq([1, 1, 2, 3, 4, 4]);      // [1, 2, 3, 4]
 * uniq([1, 2, 3, 4]);            // [1, 2, 3, 4]
 */
export function uniq<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}
