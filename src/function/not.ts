/**
 * Returns the complement of its argument.
 *
 * @export
 * @param {any} b any value
 * @returns {boolean} complement of the value
 *
 * @example
 *
 * not(true)  // false
 * not(false) // true
 * not(0)     // true
 * not(1)     // false
 */
export function not(b: any): boolean {
  return !b;
}
