import { clamp } from './clamp.ts';
import { divide } from './divide.ts';

/**
 * Returns percentage value of a number from a maximum number
 *
 * @param {number} value value
 * @param {number} max max
 * @returns {number} percentage of the value
 *
 * @example
 *
 * clamp(0, 10)   // 0
 * clamp(1, 10)   // 10
 * clamp(-1, 10)  // 0
 * clamp(20, 10)  // 100
 * clamp(NaN, 10) // 0
 * clamp(10, NaN) // 0
 * clamp(1, 3)    // 33.33333333333333
 */
export function percent(value: number, max: number): number {
  return clamp(divide(value, max, 0), 0, 1) * 100;
}
