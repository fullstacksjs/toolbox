import type { Nullish } from '../types/types.js';

export const required = <T>(
  value: Nullish | T,
  name: string = 'value',
): NonNullable<T> => {
  if (value == null) throw Error(`${name} is required`);
  return value as NonNullable<T>;
};

export const fallback = <T, U = T>(value: T, defaultValue: U): T | U =>
  value == null ? defaultValue : value;

export const fallbackNumber = <T = number>(
  value: number,
  defaultValue: T,
): T | number => (Number.isFinite(value) ? value : defaultValue);

export const fallbackString = <T = string>(
  value: Nullish | string,
  defaultValue: T,
): T | string => (value == null || value === '' ? defaultValue : value);
