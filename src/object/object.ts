import { isNull } from '../guards/isNull.js';

/**
 * remove null and empty property from an object
 */
export const pruneNullOrEmpty = <T extends object>(obj: T): T =>
  Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => !isNull(value) && value !== ''),
  ) as T;

/**
 * remove undefined and empty property from an object
 */
export const pruneUndefinedOrEmpty = <T extends object>(obj: T): T =>
  Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) => value !== undefined && value !== '',
    ),
  ) as T;
