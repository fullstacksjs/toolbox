/**
 * Expression form of throw
 *
 * @param {any} err
 * @returns {never}
 *
 * @example
 *
 * throwErr('oops')              // throw 'oops'
 * throwErr(Error('oops'))       // throw Error('oops')
 * throwErr(CustomError('oops')) // throw CustomError('oops')
 */
export function throwErr(err: unknown): never {
  throw err;
}
