/// <reference types="node" />
/**
 * Check whether NodeJS Env is development.
 *
 * @returns {boolean} is NODE_ENV === 'development'
 *
 * @example
 *
 * NODE_ENV=development node
 * isDev() // true
 *
 * NODE_ENV=production node
 * isDev() // false
 *
 * NODE_ENV="" node
 * isDev() // false
 */
export function isDev(): boolean {
  return process.env['NODE_ENV'] === 'development';
}
