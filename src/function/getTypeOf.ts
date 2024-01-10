const types = [
  'map',
  'set',
  'null',
  'array',
  'bigint',
  'number',
  'object',
  'string',
  'symbol',
  'boolean',
  'function',
  'undefined',
] as const;

type TypeNames = (typeof types)[number];

/**
 * Returns the type of the value.
 *
 * @param {unknown} value - The value whose type needs to be determined.
 * @return {TypeNames} The type of the value.
 *
 * @example
 *
 * getTypeOf(new Map())               // 'map'
 * getTypeOf(new Set())               // 'set'
 * getTypeOf(null)                    // 'null'
 * getTypeOf([])                      // 'array'
 * getTypeOf(Symbol('bar'))           // 'symbol'
 * getTypeOf(1)                       // 'number'
 * getTypeOf({})                      // 'object'
 * getTypeOf(new Date())              // 'object'
 * getTypeOf(new Error())             // 'object'
 * getTypeOf([].values())             // 'object'
 * getTypeOf(new WeakMap())           // 'object'
 * getTypeOf(new RegExp('foo'))       // 'object'
 * getTypeOf(Promise.resolve(true))   // 'object'
 * getTypeOf(10n)                     // 'bigint'
 * getTypeOf('foo')                   // 'string'
 * getTypeOf(true)                    // 'boolean'
 * getTypeOf(() => true)              // 'function'
 * getTypeOf(undefined)               // 'undefined'
 */
export function getTypeOf(value: unknown): TypeNames {
  const inferredType = Object.prototype.toString
    .call(value)
    .replace(/\[object|\]|\s/g, '')
    .toLowerCase();

  return types.find(t => t === inferredType) ?? 'object';
}
