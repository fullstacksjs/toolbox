/**
 * expression form of throw
 */
export const throwErr = (err: unknown): never => {
  throw err;
};

/**
 * throws an error when the condition is false.
 */
export function assert(
  condition: any,
  msg: string = 'Assertion failed',
): asserts condition {
  if (!condition) throwErr(Error(msg));
}
