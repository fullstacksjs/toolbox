/**
 * Tests regex without worrying about mutation on global regex
 *
 * @export
 * @param {RegExp} regex regex
 * @param {string} str string
 * @returns {boolean} test result
 *
 * @example
 * const regex = /a/g
 * testRegex(regex, 'a') // true
 * regex.lastIndex       // 0
 *
 * const regex = /b/g
 * testRegex(regex, 'a') // false
 * regex.lastIndex       // 0
 */
export function testRegex(regex: RegExp, str: string): boolean {
  regex.lastIndex = 0;
  const result = regex.test(str);
  regex.lastIndex = 0;
  return result;
}
