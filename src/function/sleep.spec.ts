import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { sleep } from './sleep.ts';

describe('sleep', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(globalThis, 'setTimeout');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should call the inner timeout function', () => {
    sleep(1000);

    expect(globalThis.setTimeout).toBeCalledTimes(1);
  });

  it('should resolve after the timeout', () => {
    const v = sleep(1000);
    vi.advanceTimersByTime(1000);

    expect(v).resolves.toBe(undefined);
  });
});
