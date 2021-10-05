/**
 * expression form of throw
 */
export const throwErr = (err: unknown): never => {
  throw err instanceof Error ? err : String(err);
};
