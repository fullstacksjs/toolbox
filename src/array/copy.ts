/**
 * Returns a shallow copy version an array
 *
 * @template T
 * @param {T} arr an array
 * @returns {T} shallow copy of the array
 *
 * @example
 * copy([])  // []
 * copy([1]) // [1]
 */
export function copy<T extends any[]>(arr: T): T {
  return arr.slice() as T;
}
