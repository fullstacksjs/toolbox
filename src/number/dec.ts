/**
 * Decrements a number by 1 or a specified step.
 *
 * @param {number} n - The number to decrement.
 * @param {number} [step=1] - The step size to decrement by. Defaults to 1.
 * @returns {number} The decremented number.
 *
 * @example
 * dec(3)       // 2
 * dec(3, 2)    // 1
 */
export function dec(n: number, step: number = 1): number {
  return n - step;
}
