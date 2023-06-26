import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { not, sleep } from './function';

describe('function', () => {
  describe('not', () => {
    it('should negate boolean', () => {
      const t = true;
      const f = false;

      expect(not(t)).toBe(false);
      expect(not(f)).toBe(true);
    });

    it('should return true for falsy values', () => {
      const falsies = [false, 0, '', undefined, null, NaN];
      const allTrue = falsies.map(() => true);

      expect(falsies.map(not)).toEqual(allTrue);
    });

    it('should return false for truthy values', () => {
      const trues = [true, 1, 'S', {}, [], () => void 0, Infinity, -Infinity];
      const allTrue = trues.map(() => false);

      expect(trues.map(not)).toEqual(allTrue);
    });
  });

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
});
