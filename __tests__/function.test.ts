import { callAll, noop } from '../src/function';

describe('function', () => {
  describe('noop', () => {
    it('should return undefined', () => {
      expect(noop()).toBe(undefined);
    });
  });

  describe('callAll', () => {
    it('should call given functions with an args', () => {
      const fns = [jest.fn(), jest.fn(), jest.fn()];
      const args = [1, 2, 3];
      callAll(...fns)(...args);
      fns.forEach(fn => expect(fn).toHaveBeenCalledWith(...args));
    });

    it('should not throw with not-callable arguments', () => {
      const fns = [jest.fn(), jest.fn()];
      const nonFns = [undefined as any, 'string' as any, null as any, 5 as any];
      const args = [1, 2, 3];
      callAll(fns[0], ...nonFns, fns[1])(...args);
      fns.forEach(fn => expect(fn).toHaveBeenCalledWith(...args));
    });
  });
});
