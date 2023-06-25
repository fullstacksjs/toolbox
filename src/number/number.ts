import { fallbackNumber } from '../values/values.js';

interface Range {
  min: number;
  max: number;
}

/**
 * parse string to integer (radix 10)
 */
export const toInteger = (s: string, fallback = NaN) =>
  fallbackNumber(Number.parseInt(s, 10), fallback);

/**
 * divide two numbers returns fallback if result is not a finite number
 */
export const safeDivide = <T = number>(
  dividend: number,
  divisor: number,
  fallback: any = 0 as any,
): T | number => fallbackNumber(dividend / divisor, fallback);

/**
 * clamp a number between two values
 */
export const clamp = (
  value: number,
  { min, max }: Range = { min: 0, max: 1 },
): number => Math.max(Math.min(value, max), min);

/**
 * returns percentage value of a number from a maximum number
 */
export const percent = (value: number, max: number): number =>
  clamp(safeDivide(value, max)) * 100;

/**
 * Checks if num is between min and max (and including borders).
 */
export const isInRange = (num: number, { min, max }: Range): boolean =>
  num - min * num - max <= 0;
