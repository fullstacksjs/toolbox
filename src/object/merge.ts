import { isMap, isSet, isPlainObject } from '../guards/index.js';
import type { Merge, ObjectType } from '../types/types';

interface ComposerArguments {
  v1: unknown;
  v2: unknown;
  key: string;
  path: string;
  obj1: ObjectType;
  obj2: ObjectType;
  extract: (v1: ObjectType, v2: ObjectType, path: string) => ObjectType;
}

type Composer = (args: ComposerArguments) => unknown;

function defaultComposer({
  v1,
  v2,
  path,
  extract,
}: ComposerArguments): unknown {
  if (isPlainObject(v1) && isPlainObject(v2)) return extract(v1, v2, path);
  else if (Array.isArray(v1) && Array.isArray(v2)) return [...v1, ...v2];
  else if (isSet(v1) && isSet(v2)) return new Set([...v1, ...v2]);
  else if (isMap(v1) && isMap(v2)) return new Map([...v1, ...v2]);
  else return v2 ?? v1;
}

/**
 * Merges two objects deeply.
 *
 * @param {T} obj1 - The object to merge.
 * @param {U} obj2 - The object to merge.
 * @param {Composer} composer - An optional function used to merge the values based on key or path..
 * @returns {Merge<T, U>} - The merged object resulting from combining obj1 and obj2.
 *
 * @example
 *
 *  const obj1 = { a: { b: { bar: 1 } }, g: true };
 *  const obj2 = { a: { b: { c: 2 }, d: false } };
 *
 *  const merged = merge(obj1, obj2);
 *  // { a: { b: { bar: 1, c: 2 }, d: false }, g: true }
 *
 *  const mergedWithComposer = merge(obj1, obj2, (args) => {
 *    if (args.path === 'obj.a.b.c') return 'foo';
 *    return merge.defaultComposer(args);
 *  });
 *  // { a: { b: { bar: 1, c: 'foo' }, d: false }, g: true }
 */

export function merge<T extends ObjectType, U extends ObjectType>(
  obj1: T,
  obj2: U,
  composer: Composer,
): unknown;
export function merge<T extends ObjectType, U extends ObjectType>(
  obj1: T,
  obj2: U,
): Merge<T, U>;

export function merge<T extends ObjectType, U extends ObjectType>(
  obj1: T,
  obj2: U,
  composer: Composer = defaultComposer,
): Merge<T, U> {
  function extract(oV1: ObjectType, oV2: ObjectType, path = 'obj') {
    return Object.keys({ ...oV1, ...oV2 }).reduce((state, key) => {
      const v1 = oV1[key];
      const v2 = oV2[key];

      return {
        ...state,
        [key]: composer({
          v1,
          v2,
          key,
          obj1,
          obj2,
          extract,
          path: `${path}.${key}`,
        }),
      };
    }, {});
  }

  return extract(obj1, obj2) as Merge<T, U>;
}

merge.defaultComposer = defaultComposer;
