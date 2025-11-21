/**
 * Creates a left-to-right function composition.
 *
 * Each function receives the output of the previous one.
 *
 * @param fns - A list of functions to compose from left to right.
 * @returns A new function that takes an initial value and runs it through all functions.
 *
 * @example
 * const add = (x: number) => x + 1;
 * const multiply = (x: number) => x * 2;
 *
 * const addThenMultiply = pipe(add, multiply);
 *
 * console.log(addThenMultiply(5)); // Output: 12
 */
export function pipe<T>(...fns: ((arg: T) => T)[]) {
  return (initial: T): T => fns.reduce((value, fn) => fn(value), initial);
}
