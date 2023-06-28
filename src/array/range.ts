/**
 * Create an array of specific length with a step and an offset.
 *
 * @param {number} length The length of array
 * @param {number} [offset=0] The start value of range
 * @param {number} [step=1] The value to increment or decrement by
 * @returns {number[]} an array with length start from offset
 *
 * @example
 *
 * range(0);                // []
 * range(5);                // [0,1,2,3,4]
 * range(3, 5);             // [5,6,7]
 * range(3, -2, 10);        // [-2, 8, 18]
 * range(3, 2, -4);         // [2, -2, -6]
 * range(3, -2, -1);        // [-2, -3, -4]
 */
export function range(
  length: number,
  offset: number = 0,
  step: number = 1,
): number[] {
  return Array.from({ length }, (_, i) => i * step + offset);
}
