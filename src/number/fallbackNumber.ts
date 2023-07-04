import type { Nullable } from '../types/types';

/**
 * Given a number and fallback value, returns the value when it is finite otherwise the fallback value.
 *
 * @param {number | undefined | null} value a number
 * @param {number} fallbackValue value to fallback when the number is not finite
 * @returns {number} value or default value
 *
 * @example
 *
 * fallbackNumber(0, 1)         // 0
 * fallbackNumber(Infinity, 1)  // 1
 * fallbackNumber(-Infinity, 1) // 1
 * fallbackNumber(-0, 1)        // -0
 * fallbackNumber(NaN, 1)       // 1
 * fallbackNumber(-1, 1)        // -1
 * fallbackNumber(1, -)         // 1
 */
export function fallbackNumber<T extends number = number>(
  value: Nullable<T>,
  fallbackValue: T,
): NonNullable<T> {
  return Number.isFinite(value) ? (value as T) : fallbackValue;
}
