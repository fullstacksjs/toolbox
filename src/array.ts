/**
 * convert any value to array if value is not an array itself.
 * @param {*} x - any value
 * @returns array of given value
 */
export const forceArray = (x: any) => (Array.isArray(x) ? x : [x]);

/**
 * create array of length n with from offset
 * @param {number} len
 * @param {number} [offset=0]
 * @param {number} [step=1]
 * @returns {number[]}
 */
export const range = (len: number, offset: number = 0, step: number = 1) =>
  [...Array(len).keys()].map(i => i * step + offset);

/**
 * returns array representation of a value
 * @param {any} value
 * @returns {any []}
 */
export const toArray = (value: any): any[] => {
  if (value == null) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === 'string') {
    return [value];
  }

  if (typeof value[Symbol.iterator] === 'function') {
    return [...value];
  }

  return [value];
};
