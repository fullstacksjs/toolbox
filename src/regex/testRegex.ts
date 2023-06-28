/**
 * Tests regex without worrying about mutation on global regex
 *
 * @export
 * @param {RegExp} regex regex
 * @param {string} str string
 * @returns {boolean} test result
 */
export function testRegex(regex: RegExp, str: string): boolean {
  regex.lastIndex = 0;
  const result = regex.test(str);
  regex.lastIndex = 0;
  return result;
}
