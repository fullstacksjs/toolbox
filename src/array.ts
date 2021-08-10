import { isIterable, isString } from './guards';

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
  if (value == null) return [] as any;
  if (Array.isArray(value)) return value;
  if (isString(value)) return [value] as [string];
  if (isIterable<T>(value)) return [...value] as T[];
  return [value];
};

export const concatNullableArrays = (...args: any[]) =>
  args?.map(arr => arr ?? [])?.reduce((curr, arr) => curr.concat(arr), []) ??
  [];
