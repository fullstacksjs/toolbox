import type { ObjectType } from '../types/types.ts';

import { isPlainObject } from '../guards/isPlainObject.ts';
import { getTypeOf } from '../types/getTypeOf.ts';

type ComparedMap = Map<object, object[]>;

function getSymbols(object: any) {
  return Object.getOwnPropertySymbols(object).filter(symbol =>
    Object.prototype.propertyIsEnumerable.call(object, symbol),
  );
}

function isComplexType(tag: ReturnType<typeof getTypeOf>) {
  return ['array', 'map', 'object', 'set'].includes(tag);
}

function isComparedBefore(
  a: object,
  b: object,
  comparedObjects: ComparedMap,
): boolean {
  const aComparedList = comparedObjects.get(a);
  const bComparedList = comparedObjects.get(b);

  return !!(aComparedList && bComparedList && aComparedList.includes(b));
}

function markAsCompared(a: object, b: object, comparedObjects: ComparedMap) {
  const aComparedList = comparedObjects.get(a) ?? [];
  const bComparedList = comparedObjects.get(b) ?? [];

  aComparedList.push(b);
  bComparedList.push(a);

  comparedObjects.set(a, aComparedList);
  comparedObjects.set(b, bComparedList);
}

function isPrimitiveEqual(a: unknown, b: unknown): boolean {
  return a === b || Object.is(a, b);
}

function isDateEqual(a: Date, b: Date): boolean {
  return Object.is(a.valueOf(), b.valueOf());
}

function isRegExpEqual(a: RegExp, b: RegExp): boolean {
  return a.source === b.source && a.flags === b.flags;
}

function isObjectEqual(
  a: ObjectType,
  b: ObjectType,
  comparedObjects: ComparedMap,
): boolean {
  const fromSameInstance =
    isEqualImpl(a.constructor, b.constructor, comparedObjects) ||
    (isPlainObject(a) && isPlainObject(b));
  if (!fromSameInstance) return false;

  const aKeys = [...Object.keys(a), ...getSymbols(a)];
  const bKeys = [...Object.keys(b), ...getSymbols(b)];

  if (aKeys.length !== bKeys.length) return false;

  for (const key of aKeys)
    if (!Object.hasOwn(b, key) || !isEqualImpl(a[key], b[key], comparedObjects))
      return false;

  return true;
}

function isMapEqual(
  a: Map<unknown, unknown>,
  b: Map<unknown, unknown>,
  comparedObjects: ComparedMap,
): boolean {
  if (a.size !== b.size) return false;

  for (const [key, value] of a.entries())
    if (!b.has(key) || !isEqualImpl(value, b.get(key), comparedObjects))
      return false;

  return true;
}

function isArrayEqual(
  a: unknown[],
  b: unknown[],
  comparedObjects: ComparedMap,
): boolean {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++)
    if (!isEqualImpl(a[i], b[i], comparedObjects)) return false;

  return true;
}

function isSetEqual(
  a: Set<unknown>,
  b: Set<unknown>,
  comparedObjects: ComparedMap,
): boolean {
  if (a.size !== b.size) return false;

  const aValues = Array.from(a);
  const bValues = Array.from(b);

  for (const aVal of aValues) {
    const index = bValues.findIndex(bVal =>
      isEqualImpl(aVal, bVal, comparedObjects),
    );
    if (index === -1) return false;
    bValues.splice(index, 1);
  }

  return true;
}

function isEqualImpl(
  a: unknown,
  b: unknown,
  comparedObjects: ComparedMap,
): boolean {
  if (isPrimitiveEqual(a, b)) return true;

  const aTag = getTypeOf(a);
  const bTag = getTypeOf(b);

  if (aTag !== bTag) return false;

  if (isComplexType(aTag)) {
    if (isComparedBefore(a as object, b as object, comparedObjects))
      return true;
    markAsCompared(a as object, b as object, comparedObjects);
  }

  switch (aTag) {
    case 'object':
      return isObjectEqual(a as ObjectType, b as ObjectType, comparedObjects);

    case 'map':
      return isMapEqual(
        a as Map<unknown, unknown>,
        b as Map<unknown, unknown>,
        comparedObjects,
      );

    case 'array':
      return isArrayEqual(a as unknown[], b as unknown[], comparedObjects);

    case 'set':
      return isSetEqual(a as Set<unknown>, b as Set<unknown>, comparedObjects);

    case 'date':
      return isDateEqual(a as Date, b as Date);

    case 'regexp':
      return isRegExpEqual(a as RegExp, b as RegExp);

    default:
      return isPrimitiveEqual(a, b);
  }
}

/**
 * Compares two values for equality.
 *
 * @param {unknown} a - First value.
 * @param {unknown} b - Second value.
 * @return {boolean} `true` if the values are equal, `false` otherwise.
 *
 * @example
 *
 * // Primitive types
 * console.log(isEqual('abc', 'abc')); // true
 * console.log(isEqual(1, 1)); // true
 * console.log(isEqual(null, null)); // true
 *
 * // Deep object comparison
 * const obj = { a: { b: { c: 1 } } };
 * const clonedObj = clone(obj);
 * console.log(isEqual(obj, clonedObj)); // true
 *
 * // Deep array comparison
 * const array = [1, 2, [3, [4, 5, [6, 7]]]];
 * const clonedArray = clone(array);
 * console.log(isEqual(array, clonedArray)); // true
 *
 * // Date comparison
 * const date1 = new Date('2026-01-01');
 * const date2 = new Date('2026-01-01');
 * console.log(isEqual(date1, date2)); // true
 *
 * // RegExp comparison
 * const regex1 = new RegExp('abc', 'g');
 * const regex2 = new RegExp('abc', 'g');
 * console.log(isEqual(regex1, regex2)); // true
 *
 * // Map comparison
 * const map = new Map([['a', 1], ['b', { c: [1, 2] }]]);
 * const clonedMap = clone(map);
 * console.log(isEqual(map, clonedMap)); // true
 *
 * // Set comparison
 * const set = new Set([1, 2, 'a']);
 * const clonedSet = clone(set);
 * console.log(isEqual(set, clonedSet)); // true
 */
export function isEqual(a: unknown, b: unknown): boolean {
  const comparedObjects = new Map();
  return isEqualImpl(a, b, comparedObjects);
}
