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
