const envs = {
  prod: 'production',
  dev: 'development',
  test: 'test',
};

/**
 * give NODE_ENV value or given fallback value
 * @param {string} [fallback="development"] fallback value if NODE_ENV is not present (default to "development")
 * @returns {string} NODE_ENV || fallback
 */
export const get = <T = string>(fallback: string | T = envs.dev): string | T => process.env.NODE_ENV || fallback;

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
  const env = get(null)?.toLocaleLowerCase();
  return env?.startsWith(value.toLowerCase()) ?? false;
}

/**
 * check env matchs 'development'
 * @returns {boolean} true if env matches "development"
 */
export const matchDev = (): boolean => match(envs.dev);

/**
 * check env matchs 'production'
 * @returns {boolean} true if env matches "production"
 */
export const matchProd = (): boolean => match(envs.prod);

/**
 * check env matchs 'test'
 * @returns {boolean} true if env matches "test"
 */
export const matchTest = (): boolean => match(envs.test);

// shortcuts
export const isDev = matchDev();
export const isProd = matchProd();
export const isTest = matchTest();
