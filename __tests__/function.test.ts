import { callAll, noop, not } from '../src/function';

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
});
