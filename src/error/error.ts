/**
 * throws an error when the condition is false.
 */
export function assert(
  condition: boolean,
  msg: string = 'Assertion failed',
): asserts condition {
  if (!condition) throw Error(msg);
}
