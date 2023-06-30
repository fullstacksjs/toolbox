import type { Nullable } from '../types/types.ts';

export function fallbackString<T = string>(
  value: Nullable<string>,
  defaultValue: T,
): T | string {
  return value == null || value === '' ? defaultValue : value;
}
