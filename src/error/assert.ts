/**
 * Throws an error when the condition is not true.
 *
 * @export
 * @param {boolean} condition
 * @param {string} [msg='Assertion failed']
 * @returns {void}
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
