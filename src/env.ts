import { fallback, required } from './values.js';

export type NodeEnv<T = undefined> =
  | T
  | 'development'
  | 'production'
  | undefined;

/**
 * give NODE_ENV value or given fallback value
 */
export const getEnv = <T extends string | undefined>(
  envKey: string,
  defaultValue?: T,
): T extends string ? string : T =>
  fallback(process.env[envKey], defaultValue) as any;

/**
 * returns NODE_ENV value or given fallback value
 */
export const getNodeEnv = <T extends string | undefined>(
  defaultValue?: T,
): T extends string ? string : T => getEnv('NODE_ENV', defaultValue);

/**
 * returns NODE_ENV value or given fallback otherwise throws
 */
export const getRequiredEnv = (envKey: string): string =>
  required(getEnv(envKey), envKey);

/**
 * strict check NODE_ENV with given value
 */
const is = <T>(value: NodeEnv<T>): boolean => process.env['NODE_ENV'] === value;

export const Env = {
  is,
  isDev: is('development'),
  isProd: is('production'),
  isTest: is('test'),
};
