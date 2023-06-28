/* eslint-disable func-style */
/* eslint-disable @typescript-eslint/padding-line-between-statements */
import { isBoolean } from '../guards/isBoolean.js';
import type { NodeEnv, Nullable } from '../types/types.js';
import { fallbackString } from '../values/fallbackString.js';
import { required } from '../values/required.js';

export type EnvKey = 'NODE_ENV';

/**
 * give NODE_ENV value or given fallback value
 */

export function getEnv<TKey extends string = string>(
  key: TKey,
): string | undefined;
export function getEnv<
  TKey extends string = string,
  TValue extends Nullable<string> = string,
>(key: TKey, defaultValue: TValue): TValue;
export function getEnv<
  TKey extends string = string,
  TValue extends Nullable<string> = string,
>(key: TKey, defaultValue?: TValue): Nullable | TValue {
  const value = process.env[key];
  return fallbackString(value, defaultValue) as TValue;
}

/*
 * returns NODE_ENV value or given fallback value
 */
export const getNodeEnv = <T extends string = never>(
  defaultValue?: T,
): NodeEnv<T> => getEnv<'NODE_ENV', NodeEnv<T>>('NODE_ENV', defaultValue);

/*
 * returns NODE_ENV value or given fallback otherwise throws
 */
export const getRequiredEnv = <TKey extends string = string>(
  envKey: TKey,
): string => required(getEnv(envKey, null), envKey);

/*
 * parse environment to a boolean or throw error
 * if env does not exist, returns fallback value.
 */
export function getBooleanEnv<TKey extends string = string>(
  key: TKey,
  defaultValue?: boolean,
): boolean | undefined {
  const value = getEnv(key);
  if (value == null || value === '') return defaultValue;

  try {
    const boolean = JSON.parse(value);
    if (!isBoolean(boolean)) throw Error('Not a boolean');
    return boolean;
  } catch {
    throw Error(`Invalid boolean environment for ${key}, received ${value}`);
  }
}

/*
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
