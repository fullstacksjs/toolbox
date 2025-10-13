export function pipe<T>(value: T, ...fns: ((input: T) => T)[]): T {
  return fns.reduce((acc, fn) => fn(acc), value);
}
