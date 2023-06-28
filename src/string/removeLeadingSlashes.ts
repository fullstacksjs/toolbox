/**
 * Removes leading slashes from a string
 *
 * @param {string} str a string
 * @returns {string} a string without leading slashes
 *
 * @example
 *
 * removeLeadingSlashes('')           // ''
 * removeLeadingSlashes('/')          // ''
 * removeLeadingSlashes('string')     // 'string'
 * removeLeadingSlashes('/string')    // 'string'
 * removeLeadingSlashes('//string')   // 'string'
 * removeLeadingSlashes('//string/')  // 'string/'
 * removeLeadingSlashes('//string/a') // 'string/a'
 */
export function removeLeadingSlashes(str: string): string {
  return str.replace(/^\/+/, '');
}
