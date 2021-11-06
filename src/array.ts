import { isIterable, isNull, isString } from './guards.js';
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

export const concatNullableArrays = (...args: any[]) =>
  args?.map(arr => arr ?? [])?.reduce((curr, arr) => curr.concat(arr), []) ??
  [];

/**
 * get an array and return a shuffled version of it
 * @input : [1,2,3]
 * @output : [2,3,1]
 */
export const shuffle = (arr: Array<any>): Array<any> => {
  if (!Array.isArray(arr)) {
    throw Error('shuffle only works on arrays');
  }

  const copyOfArr: Array<any> = [...arr];
  const sortRandom = (): number => {
    const randomNumber = Math.floor(Math.random() * 2);
    const negativeOrPositive = randomNumber ? 1 : -1;
    return negativeOrPositive;
  };
  return copyOfArr.sort(sortRandom);
};
