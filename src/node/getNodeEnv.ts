/// <reference types="node" />
/**
 * Get `process.env.NODE_ENV` and return fallback when environment is empty string or undefined.
 *
 * @param {string} fallback fallback when the env is missing
 * @returns {boolean} is NODE_ENV === 'development'
 *
 * @example
 *
 * NODE_ENV=development node
 * getNodeEnv() // "development"
 *
 * NODE_ENV=production node
 * getNodeEnv() // "production"
 *
 * NODE_ENV="" node
 * getNodeEnv('development') // "development"
 */
export function getNodeEnv(fallback?: string): string | undefined {
  const env = process.env['NODE_ENV'];
  return env == null || env === '' ? fallback : env;
}
