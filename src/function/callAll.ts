import type { Nullable } from '../types/types';

/**
 * a HOC function that can call all given functions.
 *
 * @param {...Function} fns list of functions
 * @returns {Function} a function that calls all the given function
 *
 * @example
 *
 * callAll(foo, bar, baz)(1);                         // void(foo(1), bar(1), baz(1))
 * callAll(bar, 'string', 5, null, undefined, baz)(); // void (bar(), baz());
 */
export function callAll<T extends any[]>(
  ...fns: Nullable<(...args: T) => unknown>[]
) {
  return (...args: T) =>
    fns.forEach(fn => {
      if (typeof fn === 'function') fn(...args);
    });
}
