/**
 * convert any value to array if value is not an array itself.
 * @param {*} x - any value
 * @returns array of given value
 */
export const forceArray = (x: any) => (Array.isArray(x) ? x : [x]);
