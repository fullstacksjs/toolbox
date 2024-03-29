const types = [
  'map',
  'set',
  'date',
  'null',
  'array',
  'regexp',
  'bigint',
  'number',
  'object',
  'string',
  'symbol',
  'weakset',
  'weakmap',
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
 * getTypeOf(new Date())              // 'date'
 * getTypeOf(null)                    // 'null'
 * getTypeOf([])                      // 'array'
 * getTypeOf(Symbol('bar'))           // 'symbol'
 * getTypeOf(1)                       // 'number'
 * getTypeOf({})                      // 'object'
 * getTypeOf(new Error())             // 'object'
 * getTypeOf([].values())             // 'object'
 * getTypeOf(Promise.resolve(true))   // 'object'
 * getTypeOf(new RegExp('foo'))       // 'regexp'
 * getTypeOf(10n)                     // 'bigint'
 * getTypeOf('foo')                   // 'string'
 * getTypeOf(new WeakMap())           // 'weakmap'
 * getTypeOf(new WeakSet())           // 'weakset'
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
