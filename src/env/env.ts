/* eslint-disable @typescript-eslint/padding-line-between-statements */
import { isBoolean } from '../guards/isBoolean.js';
import { isNullOrEmpty } from '../string/string.js';
import type { NodeEnv, Nullish } from '../types/types.js';
import { fallbackString, required } from '../values/values.js';

export type EnvKey = 'NODE_ENV';

/**
 * give NODE_ENV value or given fallback value
 */

export function getEnv<TKey extends string = string>(
  key: TKey,
): string | undefined;
export function getEnv<
  TKey extends string = string,
  TValue extends Nullish | string = string,
>(key: TKey, defaultValue: TValue): TValue;
export function getEnv<
  TKey extends string = string,
  TValue extends Nullish | string = string,
>(key: TKey, defaultValue?: TValue): Nullish | TValue {
  const value = process.env[key];
  return fallbackString(value, defaultValue) as TValue;
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
export const getRequiredEnv = <TKey extends string = string>(
  envKey: TKey,
): string => required(getEnv(envKey, null), envKey);

/**
 * parse environment to a boolean or throw error
 * if env does not exist, returns fallback value.
 */
export function getBooleanEnv<TKey extends string = string>(
  key: TKey,
  defaultValue?: boolean,
): boolean | undefined {
  const value = getEnv(key);
  if (isNullOrEmpty(value)) return defaultValue;

  try {
    const boolean = JSON.parse(value);
    if (!isBoolean(boolean)) throw Error('Not a boolean');
    return boolean;
  } catch {
    throw Error(`Invalid boolean environment for ${key}, received ${value}`);
  }
}

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
