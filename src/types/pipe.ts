type UnknownFunction = (...params: unknown[]) => unknown;

export function pipe<A extends unknown[], B>(
  ab: (...a: A) => B,
): (...args: A) => B;

export function pipe<A extends unknown[], B, C>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
): (...args: A) => C;

export function pipe<A extends unknown[], B, C, D>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
): (...args: A) => D;

export function pipe<A extends unknown[], B, C, D, E>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
): (...args: A) => E;

export function pipe<A extends unknown[], B, C, D, E, F>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
): (...args: A) => F;

export function pipe<A extends unknown[], B, C, D, E, F, G>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
): (...args: A) => G;

export function pipe(...fns: UnknownFunction[]): UnknownFunction {
  return (...initialParams: unknown[]): unknown =>
    fns.reduce<unknown>((value, fn, index) => {
      const params = index === 0 ? (value as unknown[]) : [value];
      return fn(...params);
    }, initialParams);
}

export function pipeWith<A, B>(a: A, ab: (a: A) => B): B;

export function pipeWith<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C;

export function pipeWith<A, B, C, D>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
): D;

export function pipeWith<A, B, C, D, E>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
): E;

export function pipeWith<A, B, C, D, E, F>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
): F;

export function pipeWith<A, B, C, D, E, F, G>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
): G;

export function pipeWith(value: unknown, ...fns: UnknownFunction[]): unknown {
  // @ts-expect-error -- We're intentionally spreading the functions array for the pipe implementation.
  return pipe(...fns)(value);
}
