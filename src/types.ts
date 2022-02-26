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

export type VoidFn = () => MaybePromise<void>;

export type EnvironmentVariable<T extends string = string> = T | undefined;

export type NodeEnv<T extends string = never> = EnvironmentVariable<
  T | 'development' | 'production'
>;

// ObjectPath is coming from https://twitter.com/diegohaz/status/1309489079378219009
type PathDots<T, Key extends keyof T> = Key extends string
  ? T[Key] extends Record<string, any>
    ?
        | `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}`
        | `${Key}.${PathDots<T[Key], Exclude<keyof T[Key], keyof any[]>> &
            string}`
    : never
  : never;

type Path<T> = PathDots<T, keyof T> | keyof T;

export type ObjectPath<T> = Path<T> extends string | keyof T
  ? Path<T>
  : keyof T;
