import type { ObjectType } from '../types/types.ts';

import { isPlainObject } from '../guards/isPlainObject.ts';
import { getTypeOf } from '../types/getTypeOf.ts';

type HelperTags = keyof typeof cloneFns;
type Helper<T> = (arg: T, cache: Cache) => T;
type Cache = WeakMap<object, unknown>;

const cloneFns = {
  map: cloneMap,
  set: cloneSet,
  date: cloneDate,
  array: cloneArray,
  object: clonePlainObject,
};

function clonePlainObject<T extends ObjectType>(input: T, cache: Cache): T {
  if (!isPlainObject(input)) return input;

  const result: ObjectType = {};
  cache.set(input, result);

  Object.keys(input).forEach(key => {
    result[key] = cloneValue(input[key], cache);
  });

  return result as T;
}

function cloneArray<T extends any[]>(input: T, cache: Cache): T {
  const result: any[] = [];
  cache.set(input, result);

  input.forEach((value, index) => {
    result[index] = cloneValue(value, cache);
  });

  return result as T;
}

function cloneMap<T extends Map<any, any>>(input: T, cache: Cache): T {
  const result = new Map();
  cache.set(input, result);

  input.forEach((value, key) => {
    result.set(key, cloneValue(value, cache));
  });

  return result as T;
}

function cloneSet<T extends Set<unknown>>(input: T, cache: Cache): T {
  const result = new Set();
  cache.set(input, result);

  input.forEach(value => {
    result.add(cloneValue(value, cache));
  });

  return result as T;
}

function cloneDate<T extends Date>(input: T): T {
  return new Date(input) as T;
}

function cloneValue<T>(value: T, cache: Cache): T {
  const tag = getTypeOf(value);

  if (!(tag in cloneFns)) return value;

  if (cache.has(value as object)) return cache.get(value as object) as T;

  const helper = cloneFns[tag as HelperTags] as Helper<T>;

  return helper(value, cache);
}

/**
 * Clones the Object | Array | Date | Map | Set.
 *
 * Circular references are preserved: a value that appears more than once in
 * the input is cloned once and shared by every reference in the output.
 *
 * @param {T} value - The value to be cloned.
 * @return {T} The cloned value.
 *
 * @example
 *
 * const obj = { a: { b: { c: 1 } } };
 * const clonedObj = clone(obj);
 * console.log(obj === clonedObj); // false
 * console.log(obj.a.b === clonedObj.a.b); // false
 *
 * const array = [1, 2, [3, [4, 5, [6, 7]]]];
 * const clonedArray = clone(array);
 * console.log(array === clonedArray); // false
 * console.log(array[2][1][2] === clonedArray[2][1][2]); // false
 *
 * const date = new Date();
 * const clonedDate = clone(array);
 * console.log(date === clonedDate); // false
 *
 * const map = new Map([['a', 1], ['b', { c: [1, 2] }]]);
 * const clonedMap = clone(map);
 * console.log(map === clonedMap); // false
 * console.log(map.get('b').c === clonedMap.get('b').c); // false
 *
 * const set = new Set([1, 2, 'a']);
 * const clonedSet = clone(set);
 * console.log(set === clonedSet); // false
 *
 * const circular = { self: null };
 * circular.self = circular;
 * const clonedCircular = clone(circular);
 * console.log(clonedCircular.self === clonedCircular); // true
 */
export function clone<T>(value: T): T {
  return cloneValue(value, new WeakMap());
}
