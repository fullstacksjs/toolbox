import { isIterable, isNotNull, isNull, isString } from '../guards/guards.js';
import { randomInt } from '../number/number.js';
import type { FilterNullish } from '../types/types.js';

interface ToArray {
  (value: null | undefined): never[];
  (value: string): [string];
  <T>(value: Iterable<T> | T | T[]): T[];
  <T>(value: T): [T];
}

/**
 * returns array representation of a value
 */
export const toArray: ToArray = <T>(
  value: Iterable<T> | T | T[] | string | null | undefined,
) => {
  if (isNull(value)) return [] as any;
  if (Array.isArray(value)) return value;
  if (isString(value)) return [value] as [string];
  if (isIterable<T>(value)) return [...value] as T[];
  return [value];
};

/**
 * Gets some nullable arrays and returns concatenation of present arrays
 */
export const concatNullableArrays = (...args: (any[] | null | undefined)[]) =>
  args?.map(arr => arr ?? [])?.reduce((curr, arr) => curr.concat(arr), []) ??
  [];

/**
 * Gets an array and return shallow copy version of it
 */
export const copyArray = <T extends any[]>(arr: T) => arr.slice() as T;

/**
 * Gets an array and return a shuffled version of it
 */
export const shuffle = <T extends any[]>(arr: T): T =>
  copyArray(arr).sort(() => (Math.random() < 0.5 ? 1 : -1));

/**
 * Returns a random item from an array
 */
export const getRandom = <T>(arr: T[]) => {
  const randomIndex = randomInt({ max: arr.length - 1 });
  return arr[randomIndex];
};

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
