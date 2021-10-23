import { isIterable, isNull, isString } from './guards.js';
import { randomInt } from './number.js';

/**
 * wrap value with array if value is not an array itself.
 */
export const ensureArray = <T>(x: T): T extends Array<any> ? T : [T] =>
  Array.isArray(x) ? (x as any) : [x];

/**
 * create array of length n with from offset with an step
 */
export const range = (
  length: number,
  { offset, step }: { offset: number; step: number } = { offset: 0, step: 1 },
): number[] => Array.from({ length }, (_, i) => i * step + offset);

interface ToArray {
  (value: null | undefined): never[];
  (value: string): [string];
  <T>(value: Array<T> | Iterable<T> | T): T[];
  <T>(value: T): [T];
}

/**
 * returns array representation of a value
 */
export const toArray: ToArray = <T>(
  value: Array<T> | Iterable<T> | T | string | null | undefined,
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
export const concatNullableArrays = (
  ...args: (Array<any> | null | undefined)[]
) =>
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

export const getRandom = <T>(arr: T[]) => {
  const randomIndex = randomInt({ max: arr.length - 1 });
  return arr[randomIndex];
};
