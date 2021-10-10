import { isNull } from './guards';
import { isNullOrEmpty } from './string';

export const required = <T>(
  value: T | null | undefined,
  name: string = 'value',
): T => {
  if (isNull(value)) throw Error(`${name} is required`);
  return value;
};

export const fallback = <T, U = T>(value: T, defaultValue: U): T | U =>
  isNull(value) ? defaultValue : value;

export const fallbackNumber = <T = number>(
  value: number,
  defaultValue: T,
): T | number => (Number.isFinite(value) ? value : defaultValue);

export const fallbackString = <T = string>(
  value: string,
  defaultValue: T,
): T | string => (isNullOrEmpty(value) ? defaultValue : value);
