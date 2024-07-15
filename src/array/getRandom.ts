import {randomInt} from '../number/randomInt.ts';

/**
 * Returns a random item from an array
 *
 * @template T
 * @param {T[]} arr an array
 * @returns {T} random item of array
 *
 * @example
 *
 * getRandom([])        // undefined
 * getRandom([1])       // 1
 * getRandom([1, 2, 3]) // 1 | 2 | 3
 */
export function getRandom<T>(arr: T[]): T {
  const randomIndex = randomInt(0, arr.length - 1);
  return arr[randomIndex]!;
}
