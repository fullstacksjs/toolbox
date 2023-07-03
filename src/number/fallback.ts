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
 * fallback(0, 1)         // 0
 * fallback(Infinity, 1)  // 1
 * fallback(-Infinity, 1) // 1
 * fallback(-0, 1)        // -0
 * fallback(NaN, 1)       // 1
 * fallback(-1, 1)        // -1
 * fallback(1, -)         // 1
 */
export function fallback<T extends number = number>(
  value: Nullable<T>,
  fallbackValue: T,
): NonNullable<T> {
  return Number.isFinite(value) ? (value as T) : fallbackValue;
}
