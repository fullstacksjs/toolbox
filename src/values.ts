import { isNull } from './guards.ts';
import { isNullOrEmpty } from './string.ts';
import type { Nullish } from './types.ts';

export const required = <T>(
  value: Nullish | T,
  name: string = 'value',
): NonNullable<T> => {
  if (isNull(value)) throw Error(`${name} is required`);
  return value as NonNullable<T>;
};

export const fallback = <T, U = T>(value: T, defaultValue: U): T | U =>
  isNull(value) ? defaultValue : value;

export const fallbackNumber = <T = number>(
  value: number,
  defaultValue: T,
): T | number => (Number.isFinite(value) ? value : defaultValue);

export const fallbackString = <T = string>(
  value: Nullish | string,
  defaultValue: T,
): T | string => (isNullOrEmpty(value) ? defaultValue : value);
