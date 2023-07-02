/**
 * Check whether NodeJS Env is production.
 *
 * @returns {boolean} is NODE_ENV === 'production'
 *
 * @example
 *
 * NODE_ENV=production node
 * isProd() // true
 *
 * NODE_ENV=development node
 * isProd() // false
 *
 * NODE_ENV="" node
 * isProd() // false
 */
export function isProd(): boolean {
  return process.env['NODE_ENV'] === 'production';
}
