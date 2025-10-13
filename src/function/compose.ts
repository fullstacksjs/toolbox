type UnknownFunction = (...params: unknown[]) => unknown;

export function compose<A extends unknown[], B>(
  ab: (...a: A) => B,
): (...args: A) => B;

export function compose<A extends unknown[], B, C>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
): (...args: A) => C;

export function compose<A extends unknown[], B, C, D>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
): (...args: A) => D;

export function compose<A extends unknown[], B, C, D, E>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
): (...args: A) => E;

export function compose<A extends unknown[], B, C, D, E, F>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
): (...args: A) => F;

export function compose<A extends unknown[], B, C, D, E, F, G>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
): (...args: A) => G;

export function compose(...fns: UnknownFunction[]): UnknownFunction {
  return (...initialParams: unknown[]): unknown =>
    fns.reduce<unknown>((value, fn, index) => {
      const params = index === 0 ? (value as unknown[]) : [value];
      return fn(...params);
    }, initialParams);
}
