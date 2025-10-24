import { describe, expect, it, vi } from 'vitest';

import { asyncNullableTryCatch } from './asyncNullableTryCatch';

describe('nullable async try catch', () => {
  it('should call the passed function to it', async () => {
    const execute = vi.fn();
    await asyncNullableTryCatch(execute);

    expect(execute).toBeCalledWith();
  });

  it('should return the function return value', async () => {
    const execute = () => Promise.resolve(1);
    const value = await asyncNullableTryCatch(execute);

    expect(value).toBe(1);
  });

  it('should return null if there is an error', async () => {
    const execute = () => Promise.reject('custom error message');

    await expect(asyncNullableTryCatch(execute)).resolves.toBeNull();
  });
});
