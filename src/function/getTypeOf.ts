/**
 * Returns the type of the value.
 *
 * @param {unknown} value - The value whose type needs to be determined.
 * @return {string} The type of the value.
 *
 * @example
 *
 * getTypeOf([])            // 'array'
 * getTypeOf({})            // 'object'
 * getTypeOf(null)          // 'null'
 * getTypeOf(new Map())     // 'map'
 * getTypeOf(new Date())    // 'date'
 * getTypeOf(new Error())   // 'error'
 */
export function getTypeOf(value: unknown): string {
  return Object.prototype.toString
    .call(value)
    .replace(/\[object\s|\]/g, '')
    .toLowerCase();
}
