export type Nullable<T> = T | null;

export function chain<A, B>(
  x: Nullable<A>,
  f: (x: A) => Nullable<B>,
): Nullable<B>;
export function chain<A, B, C>(
  x: Nullable<A>,
  f: (x: A) => Nullable<B>,
  g: (x: B) => Nullable<C>,
): Nullable<C>;

export function chain<A, B, C, D>(
  x: Nullable<A>,
  f: (x: A) => Nullable<B>,
  g: (x: B) => Nullable<C>,
  h: (x: C) => Nullable<D>,
): Nullable<D>;
export function chain<A, B, C, D, E>(
  x: Nullable<A>,
  f: (x: A) => Nullable<B>,
  g: (x: B) => Nullable<C>,
  h: (x: C) => Nullable<D>,
  j: (x: D) => Nullable<E>,
): Nullable<E>;
export function chain<A, B, C, D, E, F>(
  x: Nullable<A>,
  f: (x: A) => Nullable<B>,
  g: (x: B) => Nullable<C>,
  h: (x: C) => Nullable<D>,
  j: (x: D) => Nullable<E>,
  k: (x: E) => Nullable<F>,
): Nullable<F>;
export function chain<A, B, C, D, E, F, G>(
  x: Nullable<A>,
  f: (x: A) => Nullable<B>,
  g: (x: B) => Nullable<C>,
  h: (x: C) => Nullable<D>,
  j: (x: D) => Nullable<E>,
  k: (x: E) => Nullable<F>,
  l: (x: F) => Nullable<G>,
): Nullable<G>;
export function chain<A>(x: A, ...fns: any[]) {
  return fns.reduce((v, f) => (v === null ? null : f(v)), x);
}
