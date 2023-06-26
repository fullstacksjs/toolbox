import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { sleep } from './sleep';

describe('sleep', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(global, 'setTimeout');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should call the inner timeout function', () => {
    sleep(1000);

    expect(global.setTimeout).toBeCalledTimes(1);
  });

  it('should resolve after the timeout', () => {
    const v = sleep(1000);
    vi.advanceTimersByTime(1000);

    expect(v).resolves.toBe(undefined);
  });
});
