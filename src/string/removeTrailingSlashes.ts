/**
 * Removes trailing slashes from a string
 *
 * @param {string} str a string
 * @returns {string} a string without trailing slashes
 *
 * @example
 *
 * removeTrailingSlashes('')                          // ''
 * removeTrailingSlashes('/')                         // ''
 * removeTrailingSlashes('string')                    // 'string'
 * removeTrailingSlashes('string/')                   // 'string'
 * removeTrailingSlashes('string//')                  // 'string'
 * removeTrailingSlashes('/string//')                 // '/string'
 * removeTrailingSlashes('https://domain.com/path/')  // 'https://domain.com/path'
 * removeTrailingSlashes('https://domain.com/path//') // 'https://domain.com/path'
 */
export function removeTrailingSlashes(str: string): string {
  return str.replace(/\/+$/g, '');
}
