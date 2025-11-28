type UnknownFunction = (arg: unknown) => unknown;

/**
 * Pipes a value through a series of functions, applying each function to the result of the previous one.
 * The value flows from left to right through the function pipeline.
 *
 * @template A - The type of the initial value
 * @template B - The type after the first transformation
 * @param {A} value - The initial value to pipe through the functions
 * @param {...Function} fns - The functions to apply in sequence
 * @returns {B} The final transformed value
 *
 * @example
 *
 * const add = (x: number) => x + 1;
 * const double = (x: number) => x * 2;
 * const toString = (x: number) => x.toString();
 *
 * const result = pipe(5, add, double, toString);
 * console.log(result); // ((5 + 1) * 2).toString() => "12"
 *
 * @example
 *
 * const split = (str: string) => str.split(' ');
 * const getLength = (arr: string[]) => arr.length;
 * const isEven = (num: number) => num % 2 === 0;
 *
 * const hasEvenWordCount = pipe('hello world from typescript', split, getLength, isEven);
 * console.log(hasEvenWordCount); // true (4 words)
 */
export function pipe<A, B>(value: A, ab: (a: A) => B): B;
export function pipe<A, B, C>(value: A, ab: (a: A) => B, bc: (b: B) => C): C;
export function pipe<A, B, C, D>(
  value: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
): D;
export function pipe<A, B, C, D, E>(
  value: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
): E;
export function pipe<A, B, C, D, E, F>(
  value: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
): F;
export function pipe<A, B, C, D, E, F, G>(
  value: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
): G;

export function pipe(value: unknown, ...fns: UnknownFunction[]): unknown {
  return fns.reduce((acc, fn) => fn(acc), value);
}
