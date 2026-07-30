import type { ObjectType } from '../types/index.ts';

function isObject(o: unknown): o is ObjectType {
  return Object.prototype.toString.call(o) === '[object Object]';
}

export function isPlainObject(o: unknown): o is ObjectType {
  if (!isObject(o)) return false;

  const ctor = o.constructor;

  if (ctor == null) return true;

  const { prototype } = ctor;
  if (!isObject(prototype)) return false;

  // If constructor does not have an Object-specific method
  if (!prototype.hasOwnProperty('isPrototypeOf')) return false;

  return true;
}
