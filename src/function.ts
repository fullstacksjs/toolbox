import { isFunction } from './guards';

/**
 * noop ¯\_(ツ)_/¯
 */
export const noop = (): void => undefined;

/**
 * call given functions with an args safely
 */
export const callAll =
  (...fns: Function[]) =>
  (...args: any) =>
    fns.forEach(fn => {
      if (isFunction(fn)) fn(...args);
    });

/**
 * returns the "NOT" of its argument
 */
export const not = (b: unknown): boolean => !b;

/**
 * @template T
 * @callback Predicate
 * @param {T} a
 * @returns {boolean}
 */
type Predicate<T> = (a: T) => boolean;
/**
 * @template T
 * @param {number} min minimum predicates that should be passed
 * @param {Predicate[]} ps list of predicates
 * @param {T} a the value to apply the predicates
 * @returns {boolean} true if specified minimum predicates pass the given value otherwise false
 */
export const passesMin = <T>(min: number, ps: Predicate<T>[], a: T) =>
  ps.reduce((m, f) => (f(a) ? m - 1 : m), min) <= 0;
