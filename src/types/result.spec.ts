import type { Result } from './result';

import { Err, Ok } from './result';

describe('Result, Ok, Err, AsyncResult', () => {
  it('Ok wraps value correctly', () => {
    const ok = Ok(123);
    expect(ok).toEqual({ ok: true, value: 123 });
  });

  it('Err wraps error correctly', () => {
    const err = Err('oops');
    expect(err).toEqual({ ok: false, error: 'oops' });
  });

  it('AsyncResult resolves to Result', async () => {
    const promise: Promise<Result<string, never>> = Promise.resolve(Ok('done'));
    const res = await promise;
    expect(res.ok).toBe(true);
    if (res.ok) expect(res.value).toBe('done');
  });
});
