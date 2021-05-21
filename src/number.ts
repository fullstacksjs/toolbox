import { fallbackNumber } from './values';

interface Range {
  min: number;
  max: number;
}

/**
 * divide two numbers returns fallback if result is not a finite number
 */
export const safeDivide = <T = number>(dividend: number, divisor: number, fallback: any = 0 as any): T | number =>
  fallbackNumber(dividend / divisor, fallback);

/**
 * clamp a number between two values
 */
export const clamp = (value: number, { min, max }: Range = { min: 0, max: 1 }): number =>
  Math.max(Math.min(value, max), min);

/**
 * returns percentage value of a number from a maximum number
 */
export const percent = (value: number, max: number): number => clamp(safeDivide(value, max)) * 100;

/**
 * generate random int between two value
 */
export const randomInt = ({ min = 0, max = Number.MAX_SAFE_INTEGER }: Partial<Range> = {}): number =>
  Math.floor(Math.random() * (max - min)) + min;

/**
 * Checks if num is between min and max (and including borders).
 */
export const isInRange = (num: number, { min, max }: Range): boolean => num - min * num - max <= 0;
