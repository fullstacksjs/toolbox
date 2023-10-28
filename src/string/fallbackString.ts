import type { Nullable } from '../types/types.ts';

/**
 * Returns the provided fallback value if the given value is null, undefined, or an empty string; otherwise, it returns the original value.
 *
 * @param {string | undefined | null} value a string
 * @param {string} fallbackValue value to fallback when the string is not truthy
 * @returns {string} value or fallback value
 *
 * @example
 *
 * fallback('', 'd')        // 'd'
 * fallback(' ', 'd')       // ' '
 * fallback('x', 'd')       // 'x'
 * fallback(null, 'd')      // 'd'
 * fallback(undefined, 'd') // 'd'
 */
export function fallbackString<T extends string = string>(
  value: Nullable<T>,
  fallbackValue: T,
): NonNullable<T> {
  return value == null || value === '' ? fallbackValue : value;
}
