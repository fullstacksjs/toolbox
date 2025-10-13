export type Result<Ok, Err> =
  | { ok: false; error: Err }
  | { ok: true; value: Ok };

export type AsyncResult<Ok, Err> = Promise<Result<Ok, Err>>;

export function Ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}

export function Err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}
