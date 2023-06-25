/**
 * Generate a random integer number between two values
 *
 * @param {number} [min=0]
 * @param {number} [max=Number.MAX_SAFE_INTEGER]
 * @returns {number} random number
 *
 * @example
 *
 * randomInt()      // Random between 0, MAX_SAFE_INTEGER
 * randomInt(10)    // Random between 10, MAX_SAFE_INTEGER
 * randomInt(-1, 1) // -1 | 0 | 1
 */
export function randomInt(
  min: number = 0,
  max: number = Number.MAX_SAFE_INTEGER,
): number {
  return Math.floor(Math.random() * (max - min)) + min;
}
