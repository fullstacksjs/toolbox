/**
 * Increments a number by 1 or a specified step.
 *
 * @param {number} n - The number to increment.
 * @param {number} [step=1] - The step size to increment by. Defaults to 1.
 * @returns {number} The incremented number.
 *
 * @example
 * inc(3)       // 4
 * inc(3, 2)    // 5
 */
export function inc(n: number, step: number = 1): number {
  return n + step;
}
