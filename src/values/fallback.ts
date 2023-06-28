export function fallback<T, U = T>(value: T, defaultValue: U): T | U {
  return value == null ? defaultValue : value;
}
