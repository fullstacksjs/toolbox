type UnknownFunction = (...args: unknown[]) => unknown;

export function pipe<A extends unknown[], B>(
  ab: (...a: A) => B,
): (...a: A) => B;
export function pipe<A extends unknown[], B, C>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
): (...a: A) => C;
export function pipe<A extends unknown[], B, C, D>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
): (...a: A) => D;
export function pipe<A extends unknown[], B, C, D, E>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
): (...a: A) => E;
export function pipe<A extends unknown[], B, C, D, E, F>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
): (...a: A) => F;
export function pipe<A extends unknown[], B, C, D, E, F, G>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
): (...a: A) => G;

export function pipe(...fns: UnknownFunction[]): UnknownFunction {
  return fns.reduce(
    (acc, fn) =>
      (...args: unknown[]) =>
        fn(acc(...args)),
  );
}
