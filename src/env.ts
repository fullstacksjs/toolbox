import { fallback, required } from './values';

/**
 * give NODE_ENV value or given fallback value
 * @param {string} [defaultValue="development"] fallback value if NODE_ENV is not present (default to "development")
 * @returns {string} environment ?? fallback
 */
export const getEnv = (
  envKey: string,
  defaultValue?: string,
): string | undefined => fallback(process.env[envKey], defaultValue);

/**
 * give NODE_ENV value or given fallback value
 * @param {string} [defaultValue="development"] fallback value if NODE_ENV is not present (default to "development")
 * @returns {string} NODE_ENV ?? fallback
 */
export const getNodeEnv = (defaultValue?: string): string | undefined =>
  getEnv('NODE_ENV', defaultValue);

export const getRequiredEnv = (envKey: string, defaultValue?: string): string =>
  required(getEnv(envKey, defaultValue), envKey);

/**
 * strict check NODE_ENV with given value
 * @param {string} value env string to check
 * @returns {boolean} is given env strict equal to NODE_ENV
 */
export const is = (value: string): boolean => process.env.NODE_ENV === value;

/**
 * check NODE_ENV starts with given value (case insensitive)
 * @param {string} value env string to check
 * @returns {boolean} is given env starts with equal to NODE_ENV
 */
export function match(value: string): boolean {
  const env = getNodeEnv()?.toLocaleLowerCase();
  return env?.startsWith(value.toLowerCase()) ?? false;
}

/**
 * check env matches 'development'
 * @returns {boolean} true if env matches "development"
 */
export const matchDev = (): boolean => match('dev');

/**
 * check env matches 'production'
 * @returns {boolean} true if env matches "production"
 */
export const matchProd = (): boolean => match('prod');

/**
 * check env matches 'test'
 * @returns {boolean} true if env matches "test"
 */
export const matchTest = (): boolean => match('test');

// shortcuts
export const isDev = matchDev();
export const isProd = matchProd();
export const isTest = matchTest();
