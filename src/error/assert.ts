/**
 * Throws an error when the condition is not true.
 *
 * @export
 * @param {boolean} condition a condition
 * @param {string} [msg='Assertion failed'] a message you want to throw
 * @returns {void} throw when the condition is false
 *
 * @example
 *
 * assert(false, 'WTF') // Throw 'WTF'
 * assert(true, 'WTF') // noop
 */
export function assert(
  condition: boolean,
  msg: string = 'Assertion failed',
): asserts condition {
  if (!condition) throw Error(msg);
}
