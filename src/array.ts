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
 */
export const range = (len: number, offset: number = 0, step: number = 1) =>
  [...Array(len).keys()].map(i => i * step + offset);
