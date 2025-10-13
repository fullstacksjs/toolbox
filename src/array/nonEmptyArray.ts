export type NonEmptyArray<T> = [T, ...T[]];

export function asNonEmptyArray<T>(...items: [T, ...T[]]): NonEmptyArray<T> {
  return items;
}
