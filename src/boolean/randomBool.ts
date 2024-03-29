import { randomInt } from '../number/randomInt.ts';

/**
 * Generate a random boolean.
 *
 * @returns {boolean} random boolean
 *
 * @example
 *
 * randomBool()     // Returns true or false
 */
export function randomBool(): boolean {
  return !!randomInt(0, 1);
}
