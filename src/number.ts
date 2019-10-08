/**
 * return true if given value is numeric.
 * @param {*} x - any value
 * @returns boolean
 */
export const isNumber = (n: any) => typeof n === 'number' && !Number.isNaN(n);

/**
 * divide two numbers and returns fallback
 * for unexpected output
 * @param {number} dividend
 * @param {number} divisor
 * @param {*} [fallback=0]
 * @returns result | fallback
 */
export const safeDivide = (dividend: number, divisor: number, fallback: any = 0) =>
  divisor === 0 ? fallback : dividend / divisor;

/**
 * clamp a number between two values
 * @param {number} value
 * @param {number[]} [[min, max]=[0, 1]]
 * @returns clamped number
 */
export const clamp = (value: number, [min, max]: number[] = [0, 1]) => Math.max(Math.min(value, max), min);

/**
 * returns percentage value of a number from a maximum number
 * @param {number} value
 * @param {number} max
 * @returns [0-100] number
 */
export const percent = (value: number, max: number) => clamp(safeDivide(value, max)) * 100;
