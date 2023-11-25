import { isObject } from '../guards';
import type { DeepMerge, ObjectType } from '../types/types';

/**
 * Merges two objects deeply, combining their properties and nesting objects where necessary.
 * 
 * @param {T} obj1 - The object to merge.
 * @param {U} obj2 - The object to merge.
 * @param {Function} composer - An optional function to provide custom merging.
 * @returns {DeepMerge<T,U,Composer>} The merged object resulting from combining obj1 and obj2.
 * 
 * @example
 * 
 * const obj1 = {
 *  border: "1px solid black",
 *  background: {
 *    color: "blue"
 *    position: "50%"
 *  } 
 * } 
 * 
 * const obj2 = {
 *  background: {
 *    position: "20%"
 *  } 
 * }
 * 
 * const result = merge(obj1, obj2) // {
 *  border: "1px solid black",
 *  background: {
 *    color: "blue"
 *    position: "20%",
 *  } 
 * } 
 * 
 * const result = merge(obj1, obj2, (v1, v2, key) => {
 *  if (key === "position") { [key]: { x: v1, y: v2 } }
 *  return {}
 * }) // {
 *  border: "1px solid black",
 *  background: {
 *    color: "blue"
 *    position:  {
 *      x: "50%",
 *      y: "20%",
 *    },
 *  } 
 * } 
 * 

*/

export function merge<
  T extends ObjectType,
  U extends ObjectType,
  Composer extends ObjectType = {},
>(
  obj1: T,
  obj2: U,
  composer?: (
    value1: any,
    value2: any,
    key: string,
    obj1: ObjectType,
    obj2: ObjectType,
  ) => Composer,
): DeepMerge<T, U, Composer> {
  function defaultComposer(objV1: ObjectType, objV2: ObjectType) {
    let state = { ...objV1, ...objV2 };

    // eslint-disable-next-line guard-for-in
    for (const key in state) {
      const v1 = objV1[key];
      const v2 = objV2[key];
      let result = v2 ?? v1;

      if (Array.isArray(v1) && Array.isArray(v2)) {
        result = v1.concat(v2);
      } else if (isObject(v1) && isObject(v2)) {
        result = defaultComposer(v1, v2);
      }

      state = {
        ...state,
        [key]: result,
        ...composer?.(v1, v2, key, objV1, objV2),
      };
    }

    return state;
  }

  return defaultComposer(obj1, obj2) as DeepMerge<T, U, Composer>;
}
