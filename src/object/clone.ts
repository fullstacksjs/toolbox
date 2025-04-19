import type { ObjectType } from '../types/types';

import { isPlainObject } from '../guards/isPlainObject.js';
import { getTypeOf } from '../types/getTypeOf.js';

type HelperTags = keyof typeof cloneFns;
type Helper<T> = (arg: T) => T;

const cloneFns = {
  map: cloneMap,
  set: cloneSet,
  date: cloneDate,
  array: cloneArray,
  object: clonePlainObject,
};

function clonePlainObject<T extends ObjectType>(input: T): T {
  if (!isPlainObject(input)) return input;

  return Object.keys(input).reduce(
    (prevState, key) => ({
      ...prevState,
      [key]: clone(input[key]),
    }),
    {},
  ) as T;
}

function cloneArray<T extends any[]>(input: T): T {
  return input.reduce((prevState, value) => [...prevState, clone(value)], []);
}

function cloneMap<T extends Map<any, any>>(input: T): T {
  return new Map(
    Object.entries(clonePlainObject(Object.fromEntries(input))),
  ) as T;
}

function cloneSet<T extends Set<unknown>>(input: T): T {
  const result = new Set();

  input.forEach(value => {
    result.add(clone(value));
  });

  return result as T;
}

function cloneDate<T extends Date>(input: T): T {
  return new Date(input) as T;
}

/**
 * Clones the Object | Array | Date | Map | Set.
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
 */
export function clone<T>(value: T): T {
  const tag = getTypeOf(value);

  if (tag in cloneFns) {
    const helper = cloneFns[tag as HelperTags] as Helper<T>;

    return helper(value);
  }

  return value;
}
