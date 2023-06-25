import { isNotNull } from '../guards/guards.js';
import type { FilterNullish } from '../types/types.js';

/**
 * filters nullish from an array/tuple
 */
export const compact = <T extends readonly unknown[]>(
  xs: T,
): FilterNullish<T> => xs.filter(isNotNull) as FilterNullish<T>;

/**
 * return whether an array is empty or not
 */
export const isEmpty = (x: unknown[]): boolean => x.length === 0;

/**
 * is an index is the last index in an array
 */
export const isLastIndex = (arr: unknown[], index: number): boolean =>
  isEmpty(arr) ? false : index === arr.length - 1;
