/**
 * Check whether an index is the last index of an array.
 *
 * @example
 *
 *  isLastIndex([1], 0)            // true
 *  isLastIndex([1, 2], 1)         // true
 *  isLastIndex([[], [], []], 2)   // true
 *  isLastIndex([undefined], 0)    // true
 *  isLastIndex([null], 0)         // true
 *  isLastIndex([,], 0)            // true
 *  isLastIndex([,,], 1)            // true
 *  isLastIndex([, null], 1)       // true
 *  isLastIndex([, undefined], 1)  // true
 *  isLastIndex([], 0)             // false
 *  isLastIndex([], -1)            // false
 *  isLastIndex([[], [], []], 0)   // false
 */
export function isLastIndex(arr: unknown[], index: number): boolean {
  return !arr.length ? false : index === arr.length - 1;
}
