import type { Nullable } from '../types/types.ts';

export function required<T>(
  value: Nullable<T>,
  name: string = 'value',
): NonNullable<T> {
  if (value == null) throw Error(`${name} is required`);
  return value as NonNullable<T>;
}
