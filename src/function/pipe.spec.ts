import { pipe } from './pipe';

describe('pipe', () => {
  it('should pipe value through functions from left to right', () => {
    const add = (x: number) => x + 1;
    const multiply = (x: number) => x * 2;
    const result = pipe(5, add, multiply);

    expect(result).toBe(12);
  });

  it('should handle single function', () => {
    const square = (x: number) => x * x;
    const result = pipe(4, square);

    expect(result).toBe(16);
  });

  it('should work with same-type functions', () => {
    const trim = (s: string) => s.trim();
    const toUpper = (s: string) => s.toUpperCase();
    const result = pipe('  hey  ', trim, toUpper);

    expect(result).toBe('HEY');
  });

  it('should work with different types', () => {
    const toNumber = (s: string) => Number.parseInt(s, 10);
    const double = (n: number) => n * 2;
    const toString = (n: number) => n.toString();
    const result = pipe('5', toNumber, double, toString);

    expect(result).toBe('10');
  });

  it('should pipe through 3+ functions', () => {
    const add1 = (x: number) => x + 1;
    const multiply2 = (x: number) => x * 2;
    const subtract3 = (x: number) => x - 3;
    const result = pipe(5, add1, multiply2, subtract3);

    expect(result).toBe(9); // ((5 + 1) * 2) - 3 = 9
  });

  it('should preserve type safety across transformations', () => {
    const split = (s: string) => s.split(',');
    const count = (arr: string[]) => arr.length;
    const isEven = (n: number) => n % 2 === 0;

    expect(pipe('a,b,c', split, count, isEven)).toBe(false);
    expect(pipe('a,b,c,d', split, count, isEven)).toBe(true);
  });
});
