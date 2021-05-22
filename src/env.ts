import { fallback, required } from './values';

/**
 * give NODE_ENV value or given fallback value
 */
export const getEnv = (
  envKey: string,
  defaultValue?: string,
): string | undefined => fallback(process.env[envKey], defaultValue);

/**
 * returns NODE_ENV value or given fallback value
 */
export const getNodeEnv = (defaultValue?: string): string | undefined =>
  getEnv('NODE_ENV', defaultValue);

/**
 * returns NODE_ENV value or given fallback otherwise throws
 */
export const getRequiredEnv = (envKey: string, defaultValue?: string): string =>
  required(getEnv(envKey, defaultValue), envKey);

/**
 * strict check NODE_ENV with given value
 */
const is = (value: string): boolean => process.env.NODE_ENV === value;

/**
 * check NODE_ENV starts with given value (case insensitive)
 */
function match(value: string): boolean {
  const env = getNodeEnv()?.toLocaleLowerCase();
  return env?.startsWith(value.toLowerCase()) ?? false;
}

/**
 * check env matches 'development'
 */
const matchDev = (): boolean => match('dev');

/**
 * check env matches 'production'
 */
const matchProd = (): boolean => match('prod');

/**
 * check env matches 'test'
 */
const matchTest = (): boolean => match('test');

export const Env = {
  is,
  match,
  matchDev,
  matchTest,
  matchProd,
  isDev: matchDev(),
  isProd: matchProd(),
  isTest: matchTest(),
};
