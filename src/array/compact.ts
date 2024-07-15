import type {FilterNullish} from '../types/types.ts';

/**
 * Filters nullish items from an array
 *
 * @template T
 * @param {T} xs an array
 * @returns {T} a new array that has not nullish value
 *
 * @example
 *
 * compact([])                                    // []
 * compact([1])                                   // [1]
 * compact([0, '', null, false, NaN, undefined]) // [0, '', false, NaN, {}]
 */
export function compact<T extends readonly any[]>(xs: T): FilterNullish<T> {
  return xs.filter(x => x != null) as FilterNullish<T>;
}
