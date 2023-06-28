/**
 * Generate a random integer number between two values. (max is not included)
 *
 * @param {number} [min=0] lower bond
 * @param {number} [max=Number.MAX_SAFE_INTEGER] upper bound
 * @returns {number} random number
 *
 * @example
 *
 * randomInt()     // Random between 0, MAX_SAFE_INTEGER
 * randomInt(10)   // Random between 10, MAX_SAFE_INTEGER
 * randomInt(0, 1) // Always 0
 * randomInt(0, 2) // 0 | 1
 */
export function randomInt(
  min: number = 0,
  max: number = Number.MAX_SAFE_INTEGER,
): number {
  return Math.floor(Math.random() * (max - min)) + min;
}
