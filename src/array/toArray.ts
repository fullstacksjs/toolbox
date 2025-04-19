import { isIterable } from '../guards/isIterable.ts';

/**
 * returns array representation of a value
 *
 * when the value is already an array it return the value.
 * when the value is `undefined` or `null` it returns [].
 * when the value is iterable it returns array representation of the value.
 * otherwise it wraps the value in an array.
 *
 * @template T
 * @param {(Iterable<T> | T | null | undefined)} value
 * @returns {Array} array representation of the value
 *
 * @example
 *
 * toArray(null)      // []
 * toArray(undefined) // []
 * toArray('str')     // ['s', 't', 'r']
 * toArray([1])       // [1]
 * toArray(2)         // [2]
 */
export function toArray(value: null | undefined): [];
export function toArray<T extends any[]>(value: T): T;
export function toArray<T>(value: Iterable<T> | T[]): T[];
export function toArray<T>(value: T): [T];
export function toArray<T>(value: Iterable<T> | T | T[] | null | undefined) {
  if (value == null) return [];
  if (Array.isArray(value)) return value;
  if (isIterable<T>(value)) return Array.from(value);
  return [value];
}
