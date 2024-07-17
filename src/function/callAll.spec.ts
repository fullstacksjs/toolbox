import { vi } from 'vitest';
import { callAll } from './callAll.ts';

describe('callAll', () => {
  it('should call given functions with an args', () => {
    const args = [1, 2, 3];
    const fns = [vi.fn(() => args), vi.fn(() => args), vi.fn(() => args)];
    callAll(...fns)(...(args as []));
    fns.forEach(fn => expect(fn).toHaveBeenCalledWith(...args));
  });

  it('should not throw with not-callable arguments', () => {
    const args = [1, 2, 3];
    const fns = [vi.fn(() => args), vi.fn(() => args)] as const;
    const nonFns = [undefined, 'string' as any, null, 5 as any];
    callAll(fns[0], ...nonFns, fns[1])(...(args as []));
    fns.forEach(fn => expect(fn).toHaveBeenCalledWith(...args));
  });
});
