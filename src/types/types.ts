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

export type MaybePromise<T> = Promise<T> | T;

export type VoidFn = () => MaybePromise<void>;

export type EnsureArray<T> = T extends any[] ? T : [T];

export type EnvironmentVariable<T extends string = string> = T | undefined;

export type NodeEnv<T extends string = never> = EnvironmentVariable<
  'development' | 'production' | T
>;

export type ObjectPath<T extends object> = {
  [Key in keyof T & (number | string)]: T[Key] extends object
    ? `${Key}.${ObjectPath<T[Key]>}` | `${Key}`
    : `${Key}`;
}[keyof T & (number | string)];

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredBy<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

type FilterNullishReadonlyArray<T extends readonly unknown[]> =
  T[number] extends infer R ? readonly NonNullable<R>[] : never;

type FilterNullishReadonlyTuple<T extends readonly unknown[]> =
  T extends readonly []
    ? []
    : T extends readonly [infer H, ...infer R]
      ? H extends null | undefined
        ? FilterNullishReadonlyTuple<R>
        : readonly [H, ...FilterNullishReadonlyTuple<R>]
      : readonly [NonNullable<T[0]>];

type FilterNullishTuple<T extends unknown[]> = T extends []
  ? []
  : T extends [infer H, ...infer R]
    ? H extends null | undefined
      ? FilterNullishTuple<R>
      : [H, ...FilterNullishTuple<R>]
    : [NonNullable<T[0]>];

type FilterNullishArray<T extends unknown[]> = T[number] extends infer R
  ? NonNullable<R>[]
  : never;

export type FilterNullish<T extends unknown[] | readonly unknown[]> =
  T extends unknown[]
    ? T extends (number extends T['length'] ? [] : any[])
      ? FilterNullishTuple<T>
      : FilterNullishArray<T>
    : T extends (number extends T['length'] ? readonly [] : readonly any[])
      ? FilterNullishReadonlyTuple<T>
      : FilterNullishReadonlyArray<T>;

type TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : TupleOf<T, N, [T, ...R]>;

export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : TupleOf<T, N, []>
  : never;

export type Sensitivity = 'accent' | 'base' | 'case' | 'variant';

export type IdFn = <T>(x: T) => T;

export type Nullable<T = never> = T | null | undefined;

export type Optional<T> = T | undefined;

export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

export type ObjectType = Record<number | string | symbol, unknown>;

export type NullishCoalescing<T, U> = U extends null | undefined ? T : U;

export type Merge<T, U> = T | U extends ObjectType
  ? {
      [P in keyof T | keyof U]: Merge<
        P extends keyof T ? T[P] : undefined,
        P extends keyof U ? U[P] : undefined
      >;
    }
  : T | U extends [...infer ArrayValues]
    ? ArrayValues[number][]
    : T | U extends Set<infer SetValues>
      ? Set<SetValues>
      : T | U extends Map<infer MapKeys, infer MapValues>
        ? Map<MapKeys, MapValues>
        : NullishCoalescing<T, U>;

export type AsyncVoidFn = () => Promise<void>;

export type Replace<T, P, V> = [T] extends [never]
  ? T
  : {
      [Key in keyof T]: P extends `${infer Head}.${infer Tail}`
        ? Head extends Key
          ? Replace<T[Key], Tail, V>
          : T[Key]
        : P extends Key
          ? V
          : T[Key];
    };

export type RemoveDeepReadonly<T> = keyof T extends never
  ? T
  : {
      -readonly [P in keyof T]: RemoveDeepReadonly<T[P]>;
    };
