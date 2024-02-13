import type { ObjectType } from '../types';

function isObject(o: unknown): o is ObjectType {
  return Object.prototype.toString.call(o) === '[object Object]';
}

export function isPlainObject(o: unknown): o is ObjectType {
  if (!isObject(o)) return false;

  const ctor = o.constructor;

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (ctor == null) return true;

  const prototype = ctor.prototype;
  if (!isObject(prototype)) return false;

  // If constructor does not have an Object-specific method
  if (!prototype.hasOwnProperty('isPrototypeOf')) return false;

  return true;
}
