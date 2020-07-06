/**
 * wrap value with array if value is not an array itself.
 * @param {*} x - any value
 * @returns {any[]} - [value]
 */
export const forceArray = (x: any): any[] => [].concat(x);

/**
 * create array of length n with from offset
 * @param {number} len - total number count
 * @param {number} [offset=0] - first number
 * @param {number} [step=1] - step
 * @returns {number[]} - range
 */
export const range = (len: number, offset = 0, step = 1): number[] =>
  [...Array(len).keys()].map(i => i * step + offset);

/**
 * returns array representation of a value
 * @param {any} value - any value
 * @returns {any []} - array representation of value
 */
export const toArray = (value: any): any[] => {
  if (value == null) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') return [value];
  if (typeof value[Symbol.iterator] === 'function') return [...value];
  return [value];
};
