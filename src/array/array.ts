import { isEmpty } from './isEmpty';

/**
 * is an index is the last index in an array
 */
export const isLastIndex = (arr: unknown[], index: number): boolean =>
  isEmpty(arr) ? false : index === arr.length - 1;
