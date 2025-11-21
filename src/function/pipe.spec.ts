import { pipe } from './pipe';

describe('pipe', () => {
  it('should compose functions from left to right', () => {
    const add = (x: number) => x + 1;
    const multiply = (x: number) => x * 2;
    const addThenMultiply = pipe(add, multiply);

    expect(addThenMultiply(5)).toBe(12);
  });

  it('should handle single function', () => {
    const square = (x: number) => x * x;
    const squarePipe = pipe(square);

    expect(squarePipe(4)).toBe(16);
  });

  it('should handle no functions', () => {
    const identity = pipe();

    expect(identity(7)).toBe(7);
  });

  it('should work with same-type functions only', () => {
    const trim = (s: string) => s.trim();
    const toUpper = (s: string) => s.toUpperCase();
    const normalize = pipe(trim, toUpper);

    expect(normalize('  hey  ')).toBe('HEY');
  });
});
