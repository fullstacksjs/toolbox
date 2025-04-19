/**
 * Check whether the given number is positive or not.
 *
 * @param {number} n - number.
 * @returns {boolean} true when given number is positive
 *
 * @example
 * isPositive(0.1)  // true
 * isPositive(1)    // true
 * isPositive(10)   // true
 * isPositive(-1)   // false
 * isPositive(0)   // false
 */

export function isPositive(n: number): boolean {
  return n > 0;
}
