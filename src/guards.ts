import type { Truthy } from './types.js';

/**
 * check given value is string or not
 */
export const isString = (s: unknown): s is string => typeof s === 'string';

/**
 * check given value is boolean or not
 */
export const isBoolean = (s: unknown): s is boolean => typeof s === 'boolean';

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
 * check given value is an object
 */
export const isObject = <T>(x: T): x is Record<number | string | symbol, any> =>
  typeof x === 'object' && !Array.isArray(x) && x !== null;
