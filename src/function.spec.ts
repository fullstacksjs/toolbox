import {
  Mock,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import { callAll, noop, not, sleep, bindArgs } from './function';

describe('function', () => {
  describe('noop', () => {
    it('should return undefined', () => {
      expect(noop()).toBe(undefined);
    });
  });

  describe('callAll', () => {
    it('should call given functions with an args', () => {
      const fns = [vi.fn(), vi.fn(), vi.fn()];
      const args = [1, 2, 3];
      callAll(...fns)(...args);
      fns.forEach(fn => expect(fn).toHaveBeenCalledWith(...args));
    });

    it('should not throw with not-callable arguments', () => {
      const fns = [vi.fn(), vi.fn()] as const;
      const nonFns = [undefined as any, 'string' as any, null as any, 5 as any];
      const args = [1, 2, 3];
      callAll(fns[0], ...nonFns, fns[1])(...args);
      fns.forEach(fn => expect(fn).toHaveBeenCalledWith(...args));
    });
  });

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

  describe('bindArgs', () => {
    const mockedFn = vi.fn(
      (prefix: 'prefix', message: 'message', count: 1 | 2): 'fail' | 'ok' => {
        [prefix, message, count].join('-');
        return count === 1 ? 'ok' : 'fail';
      },
    );

    let boundFn: (...args: any) => any;

    beforeEach(() => {
      boundFn = bindArgs(mockedFn as any, 'prefix');
    });

    it('should return bound function', () => {
      expect(boundFn).toBeTypeOf('function');
    });

    it('should bind given function with an rest args', () => {
      expect(boundFn('message', 1)).toEqual('ok');
      expect(boundFn('message', 2)).toEqual('fail');
    });
  });
});
