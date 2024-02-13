import { clone } from './clone';
import type { ObjectType, RemoveDeepReadonly, Replace } from '../types';

/**
 * Replaces a value in an object or array at the given path.
 *
 * @param {T} obj - The object or array in which to replace the value.
 * @param {P} path - The path to the value to be replaced.
 * @param {V} value - The new value to replace the existing value with.
 * @return {RemoveDeepReadonly<Replace<T, P, V>>} - The object with the replaced value.
 *
 * @example
 *
 * const object = replace({ a: { a: { a: true } }, b: true }, 'a.a.a', 'foo')
 * // { a: { a: { a: 'foo' } }, b: true }
 *
 * const array = replace([1, 2, [3, ['x', 'bar', 'baz'], 4], 5, 6], '2.1.0', 'foo')
 * // [1, 2, [3, ['foo', 'bar', 'baz'], 4], 5, 6]
 */
export function replace<
  const T extends ObjectType | unknown[] | readonly unknown[],
  P extends string,
  V,
>(obj: T, path: P, value: V): RemoveDeepReadonly<Replace<T, P, V>> {
  const pathSegments = path.split('.');
  const clonedObject = clone(obj);

  pathSegments.reduce<any>((currentObject, key, index) => {
    if (index === pathSegments.length - 1 && currentObject[key]) {
      currentObject[key] = value;
    }

    return currentObject[key];
  }, clonedObject);

  return clonedObject as RemoveDeepReadonly<Replace<T, P, V>>;
}
