import type { Nullable } from '../types';

/**
 * Safely pass a nullable value to composition of functions
 *
 * @template T U
 * @param {Nullable<T>} x a nullable value
 * @param {...Function[]} fns list of functions
 * @returns {Nullable<U>} mapped version of nullable value
 *
 * @example
 *
 * bind(undefined ,f)     // undefined
 * bind(null,f)           // null
 * bind(1, f)             // f(1)
 * bind(2, f, g, h)       // h(g(f(2)))
 * bind(null, f, g, h, j) // null
 */
export function bind(x: Nullable, ...fns: any[]): Nullable;
export function bind<A, B>(
  x: Nullable<A>,
  f: (x: A) => Nullable<B>,
): Nullable<B>;
export function bind<A, B, C>(
  f: (x: A) => Nullable<B>,
  g: (x: B) => Nullable<C>,
): Nullable<C>;
export function bind<A, B, C, D>(
  x: Nullable<A>,
  f: (x: A) => Nullable<B>,
  g: (x: B) => Nullable<C>,
  h: (x: C) => Nullable<D>,
): Nullable<D>;
export function bind<A, B, C, D, E>(
  x: Nullable<A>,
  f: (x: A) => Nullable<B>,
  g: (x: B) => Nullable<C>,
  h: (x: C) => Nullable<D>,
  j: (x: D) => Nullable<E>,
): Nullable<E>;
export function bind<A, B, C, D, E, F>(
  x: Nullable<A>,
  f: (x: A) => Nullable<B>,
  g: (x: B) => Nullable<C>,
  h: (x: C) => Nullable<D>,
  j: (x: D) => Nullable<E>,
  k: (x: E) => Nullable<F>,
): Nullable<F>;
export function bind<A, B, C, D, E, F, G>(
  x: Nullable<A>,
  f: (x: A) => Nullable<B>,
  g: (x: B) => Nullable<C>,
  h: (x: C) => Nullable<D>,
  j: (x: D) => Nullable<E>,
  k: (x: E) => Nullable<F>,
  l: (x: F) => Nullable<G>,
): Nullable<G>;
export function bind<A>(x: Nullable<A>, ...fns: any[]) {
  return fns.reduce((v, f) => (v == null ? v : f(v)), x);
}
