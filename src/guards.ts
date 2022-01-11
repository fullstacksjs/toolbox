import type { Truthy } from './types.js';

/**
 * check given value is string or not
 */
export const isString = (s: any): s is string => typeof s === 'string';

/**
 * check given value is iteratable or not
 */
export const isIterable = <T>(x: any): x is Iterable<T> =>
  typeof x?.[Symbol.iterator] === 'function';

/**
 * check given value is a functions or not
 */
export const isFunction = (fn: any): fn is Function => typeof fn === 'function';

/**
 * check given value is nullable (undefined or null)
 */
export const isNull = (x: unknown): x is null | undefined => x == null;

/**
 * check given value is not nullable (undefined or null)
 */
export const isNotNull = <T>(value: T): value is NonNullable<T> =>
  value != null;

/**
 * check given value is truthy
 */
export const isTruthy = <T>(value: T): value is Truthy<T> => Boolean(value);

/**
 * check given value is object
 */
export const isObject = <T>(x: T): x is Record<number | string | symbol, any> =>
  typeof x === 'object' && !Array.isArray(x) && x !== null;
