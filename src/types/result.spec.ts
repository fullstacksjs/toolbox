import type { Result } from './result';

import { Err, Ok } from './result';

describe('result, Ok, Err, AsyncResult', () => {
  it('ok wraps value correctly', () => {
    const ok = Ok(123);

    expect(ok).toEqual({ ok: true, value: 123 });
  });

  it('err wraps error correctly', () => {
    const err = Err('oops');

    expect(err).toEqual({ ok: false, error: 'oops' });
  });

  it('asyncResult resolves to Result', async () => {
    const promise: Promise<Result<string, never>> = Promise.resolve(Ok('done'));
    const res = await promise;

    expect(res.ok).toBe(true);
    expect((res as Ok<string>).value).toBe('done');
  });
});
