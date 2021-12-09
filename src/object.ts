import { isNull } from './guards.js';

/**
 * remove null and empty property from an object
 */
export const pruneNullOrEmpty = <T extends Record<string, unknown>>(
  obj: T,
): T =>
  Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => !isNull(value) && value !== ''),
  ) as T;
