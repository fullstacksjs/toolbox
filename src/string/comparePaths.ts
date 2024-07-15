import type {Sensitivity} from '../types/types.ts';
import {removeLeadingSlashes} from './removeLeadingSlashes.ts';
import {removeTrailingSlashes} from './removeTrailingSlashes.ts';

/**
 * Compare two path without trailing and leading slashes
 *
 * @param {string} path1: first path
 * @param {string} path2: second path
 * @return {boolean} is they are equal
 *
 * @example
 *
 * comparePaths('b', 'a')                // 1
 * comparePaths('a', 'b')                // -1
 * comparePaths('path', 'PAth')          // 0
 * comparePaths('reserve', 'réservé')    // 0
 * comparePaths('/path1/', '/path1/')    // 0
 * comparePaths('reserve', 'reserve//')  // 0
 * comparePaths('//reserve', 'reserve')  // 0
 * comparePaths('reserve//', 'reserve/') // 0
 * comparePaths('/reserve', '//reserve') // 0
 */
export function comparePaths(
  path1: string,
  path2: string,
  {sensitivity = 'accent'}: {sensitivity?: Sensitivity} = {},
): number {
  const normalPath1 = removeLeadingSlashes(removeTrailingSlashes(path1));
  const normalPath2 = removeLeadingSlashes(removeTrailingSlashes(path2));
  return normalPath1.localeCompare(normalPath2, undefined, {
    sensitivity,
  });
}
