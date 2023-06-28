export function fallbackNumber<T = number>(
  value: number,
  defaultValue: T,
): T | number {
  return Number.isFinite(value) ? value : defaultValue;
}
