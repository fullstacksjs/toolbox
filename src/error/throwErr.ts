/**
 * Expression form of throw
 *
 * @param {any} err error to throw
 * @returns {never} never returns!
 *
 * @example
 *
 * throwErr('oops')              // throw 'oops'
 * throwErr(Error('oops'))       // throw Error('oops')
 * throwErr(CustomError('oops')) // throw CustomError('oops')
 */
export function throwErr(err: unknown): never {
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  throw err;
}
