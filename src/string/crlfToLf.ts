/**
 * Converts crlf to lf
 *
 * @export
 * @param {string} str any string
 * @returns {string} the lf version of the string
 *
 * @example
 *
 * crlfToLf('hello world\r\n')   // 'hello world\n'
 * crlfToLf('hello world\r\n\n') // 'hello world\n\n'
 * crlfToLf('hello world\n')     // 'hello world\n'
 * crlfToLf('hello world')       // 'hello world'
 * crlfToLf('')                  // ''
 * crlfToLf(' ')                 // ' '
 */
export function crlfToLf(str: string): string {
  return str.replace(/\r\n/g, '\n');
}
