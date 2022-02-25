export type Truthy<T> = T extends '' | 0 | false | null | undefined ? never : T;

export type CamelCase<S extends string> =
  S extends `${infer P1}_${infer P2}${infer P3}`
    ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
    : Lowercase<S>;

/**
 * @template T
 * @callback Predicate
 * @param {T} a
 * @returns {boolean}
 */
export type Predicate<T = any> = (a: T) => boolean;

export type Nullish = null | undefined;

export type MaybePromise<T> = Promise<T> | T;

export type VoidFn<TArgs extends any[] = any[]> = (
  ...args: TArgs
) => MaybePromise<void>;
