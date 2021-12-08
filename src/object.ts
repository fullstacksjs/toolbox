import { isNullOrEmpty } from './string.js';

/**
 * returns clean object
 */
export const pruneNullOrEmpty = <T>(obj: T) =>
  Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]: [string, any]) => !isNullOrEmpty(value),
    ),
  );
