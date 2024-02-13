import type { Nullable } from '../types';

/**
 * Asserts a value is not null or undefined
 *
 * @param {Nullable<T>} value any value
 * @param {string} [error='Value is required'] error message when the value is not null
 * @returns {undefined}
 *
 * @example
 *
 * assertNotNull(null, 'WTF')      // Throw 'WTF'
 * assertNotNull(undefined, 'WTF') // Throw 'WTF'
 * assertNotNull(true)             // noop
 */
export function assertNotNull<T>(
  value: Nullable<T>,
  error: string = 'Value is required',
): asserts value is NonNullable<T> {
  if (value == null) throw Error(error);
}
