import type { EnvironmentVariable, NodeEnv } from './types.js';
import { fallback, required } from './values.js';

/**
 * give NODE_ENV value or given fallback value
 */
export const getEnv = <T extends EnvironmentVariable>(
  envKey: string,
  defaultValue?: T,
): T => fallback(process.env[envKey], defaultValue) as any;

/**
 * returns NODE_ENV value or given fallback value
 */
export const getNodeEnv = <T extends string = never>(
  defaultValue?: T,
): NodeEnv<T> => getEnv('NODE_ENV', defaultValue);

/**
 * returns NODE_ENV value or given fallback otherwise throws
 */
export const getRequiredEnv = (envKey: string): string =>
  required(getEnv(envKey), envKey);

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
