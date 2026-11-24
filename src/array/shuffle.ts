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
  const result = arr.slice() as T;

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
