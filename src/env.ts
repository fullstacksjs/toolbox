import type { NodeEnv } from './types.js';
import { fallback, required } from './values.js';

/**
 * give NODE_ENV value or given fallback value
 */
export function getEnv<TKey extends string = string>(
  key: TKey,
): string | undefined;
export function getEnv<
  TKey extends string = string,
  TValue extends string | undefined = string,
>(key: TKey, defaultValue: TValue): TValue;
export function getEnv<
  TKey extends string = string,
  TValue extends string | undefined = string,
>(key: TKey, defaultValue?: TValue): TValue | undefined {
  return fallback(process.env[key] as TValue, defaultValue);
}

/**
 * returns NODE_ENV value or given fallback value
 */
export const getNodeEnv = <T extends string = never>(
  defaultValue?: T,
): NodeEnv<T> => getEnv<'NODE_ENV', NodeEnv<T>>('NODE_ENV', defaultValue);

/**
 * returns NODE_ENV value or given fallback otherwise throws
 */
export const getRequiredEnv = <
  TKey extends string = string,
  TValue extends string = string,
>(
  envKey: TKey,
): TValue => required(getEnv(envKey) as TValue, envKey);

/**
 * strict check NODE_ENV with given value
 */
const is = <T extends string>(value: NodeEnv<T>): boolean =>
  process.env['NODE_ENV'] === value;

export const Env = {
  is,
  isDev: is('development'),
  isProd: is('production'),
  isTest: is('test'),
};
