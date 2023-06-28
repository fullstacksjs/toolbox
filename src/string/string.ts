import { isWordOrWords } from '../internals/isWordOrWords.js';
import type { Nullish, Sensitivity } from '../types/types.js';

/**
 * check if value is null, undefined or empty string or array
 */
export function isNullOrEmpty<T extends any[] | string>(
  x: Nullish | T | '' | [],
): x is Nullish | (T extends any[] ? [] : '') {
  return x == null || x.length === 0;
}

/**
 * return initial chars of words
 * @param {string} name - value to get initials from
 * @param {string} [fallback='?'] - return value if operation failed
 * @returns {string} initials chars of a words || fallback
 * @example getInitials('frontend monsters'); //-> FM
 */
export function getInitials(name: string, fallback: string = '?'): string {
  return typeof name === 'string' && isWordOrWords(name.trim())
    ? name
        .replace(/\s+/g, ' ')
        .split(' ')
        .map(v => (isNullOrEmpty(v) ? '' : v.slice(0, 1).toUpperCase()))
        .join('')
    : fallback;
}

/**
 * removing trailing slashes from a string
 */
export function removeTrailingSlashes(str: string): string {
  return str.replace(/\/+$/g, '');
}

/**
 * removing leading slashes from a string
 */
export function removeLeadingSlashes(s: string): string {
  return s.replace(/^\/+/, '');
}

/**
 * join path parts with / and without trailing and leading slashes
 */
export function joinPath(...paths: string[]): string {
  const result = paths.map(el =>
    removeLeadingSlashes(removeTrailingSlashes(el)),
  );
  return result.join('/');
}

/**
 * Compare two path without trailing and leading slashes
 * @param {string} path1: first path
 * @param {string} path2: second path
 * @return {boolean} is they are equal
 */
export function comparePaths(
  path1: string,
  path2: string,
  { sensitivity = 'accent' }: { sensitivity?: Sensitivity } = {},
): number {
  const normalPath1 = removeLeadingSlashes(removeTrailingSlashes(path1));
  const normalPath2 = removeLeadingSlashes(removeTrailingSlashes(path2));
  return normalPath1.localeCompare(normalPath2, undefined, {
    sensitivity,
  });
}
