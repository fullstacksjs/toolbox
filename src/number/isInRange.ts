/**
 * Checks if num is between min and max (including borders).
 *
 * @export
 * @param {number} num a number
 * @param {number} min lower bound
 * @param {number} max higher bound
 * @returns {boolean} true if the value is in range
 *
 * @example
 *
 * isInRange(51, 0, 50)   // false
 * isInRange(-1, 0, 100)  // true
 * isInRange(100, 0, 100) // true
 * isInRange(0, 0, 100)   // true
 * isInRange(50, 0, 100)  // true
 */
export function isInRange(num: number, min: number, max: number): boolean {
  return num - min * num - max <= 0;
}
