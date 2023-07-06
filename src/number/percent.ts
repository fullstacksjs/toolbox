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
 * percent(0, 10)   // 0
 * percent(1, 10)   // 10
 * percent(-1, 10)  // 0
 * percent(20, 10)  // 100
 * percent(NaN, 10) // 0
 * percent(10, NaN) // 0
 * percent(1, 3)    // 33.33333333333333
 */
export function percent(value: number, max: number): number {
  return clamp(divide(value, max, 0), 0, 1) * 100;
}
