/**
 * Returns the positive modulo of a number.
 *
 * Unlike JavaScript's `%` operator, this function always returns a value in
 * the range `[0, divisor)` when `divisor` is positive.
 *
 * @param value - The value to wrap.
 * @param divisor - The positive divisor (modulus).
 * @returns The positive modulo of `value`.
 *
 * @example
 * mod(10, 10) // 0
 * mod(11, 10) // 1
 * mod(-1, 10) // 9
 */
export function mod(value: number, divisor: number): number {
  if (divisor <= 0) {
    throw new RangeError('Divisor must be greater than 0');
  }
  return ((value % divisor) + divisor) % divisor;
}
