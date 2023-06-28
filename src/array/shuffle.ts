/**
 * Return a shuffled version of an array
 *
 * @template T
 * @param {T} arr an array
 * @returns {T} a copy version of array with random item order
 *
 * @example
 *
 * shuffle([])        // []
 * shuffle([1])       // [1]
 * shuffle([1, 2, 3]) // Who knows?
 */
export function shuffle<T extends any[]>(arr: T): T {
  return (arr.slice() as T).sort(() => (Math.random() < 0.5 ? 1 : -1));
}
