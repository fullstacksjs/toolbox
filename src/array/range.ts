/**
 * Create an array of specific length with a step and an offset.
 *
 * @param {number} length The length of array
 * @param {number} [offset=0] The start value of range
 * @param {number} [step=1] The value to increment or decrement by
 * @returns {number[]}
 */
export function range(
  length: number,
  offset: number = 0,
  step: number = 1,
): number[] {
  return Array.from({ length }, (_, i) => i * step + offset);
}
