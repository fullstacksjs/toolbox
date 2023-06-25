/**
 * Returns a shallow copy version an array
 *
 * @template T
 * @param {T} array
 * @returns {T}
 *
 * @example
 * copy([])  // []
 * copy([1]) // [1]
 */
export function copy<T extends any[]>(arr: T): T {
  return arr.slice() as T;
}
