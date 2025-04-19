/**
 * Check whether the given number is negative or not.
 *
 * @param {number} n - number.
 * @returns {boolean} true when given number is negative
 *
 * @example
 * isNegative(-0.1)  // true
 * isNegative(-1)    // true
 * isNegative(-10)   // true
 * isNegative(1)   // false
 * isNegative(0)   // false
 */

export function isNegative(n: number): boolean {
  return n < 0;
}
