import { isFunction } from './guards.ts';
import type { Predicate } from './types.ts';

/**
 * noop ¯\_(ツ)_/¯
 */
export const noop = (): void => undefined;

/**
 * call given functions with an args safely
 */
export const callAll =
  (...fns: (Function | null | undefined)[]) =>
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
 * @param {number} min minimum predicates that should be passed
 * @param {Predicate[]} ps list of predicates
 * @param {T} a the value to apply the predicates
 * @returns {boolean} true if specified minimum predicates pass the given value otherwise false
 * @example
 * const isDivisibleBy3 = x => x % 3 === 0
 * const isDivisibleBy5 = x => x % 5 === 0
 * const isLargerThan25 = x => x > 25
 *
 * const isValidNumber = x =>
 *  passesMin(2, [isDivisibleBy3, isDivisibleBy5, isSmallerThan25], x);
 *
 * isValidNumber(15) // returns true because its divisible by 5 and 3
 * isValidNumber(3)  // returns false because its only divisible by 3
 * isValidNumber(26) // returns false because its only larger than 25
 * isValidNumber(30) // returns true because its passes minimum 2 cases (being divisible by 5 and 3 and larger than 25)
 */
export const passesMin = <T>(min: number, ps: Predicate<T>[], a: T): boolean =>
  ps.reduce((m, f) => (f(a) ? m - 1 : m), min) <= 0;

/**
 * @param {number} ms timeout in milliseconds
 * @returns {Promise<void>} a Promise that resolves after timeout
 */
export const sleep = (ms: number): Promise<void> =>
  new Promise<void>(resolve => {
    setTimeout(() => resolve(), ms);
  });
