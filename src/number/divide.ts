import { fallbackNumber } from './fallbackNumber.ts';

/**
 * Divides two numbers returns fallback if result is not a finite number
 *
 * @param {number} dividend dividend
 * @param {number} divisor divisor
 * @param {number} [fallback=NaN] fallback when the result is not finite
 * @returns {number} division result or fallback
 *
 * @example
 *
 * divide(4, 2)     // 2
 * divide(4, 0, 42) // 42
 * divide(4, 0)     // NaN
 */
export function divide(
  dividend: number,
  divisor: number,
  fallback: number = NaN,
): number {
  return fallbackNumber(dividend / divisor, fallback);
}
