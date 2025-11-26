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

  it('should work with same-type functions', () => {
    const trim = (s: string) => s.trim();
    const toUpper = (s: string) => s.toUpperCase();
    const normalize = pipe(trim, toUpper);

    expect(normalize('  hey  ')).toBe('HEY');
  });

  it('should work with different types', () => {
    const toNumber = (s: string) => Number.parseInt(s, 10);
    const double = (n: number) => n * 2;
    const toString = (n: number) => n.toString();
    const transform = pipe(toNumber, double, toString);

    expect(transform('5')).toBe('10');
  });

  it('should handle multiple arguments in first function', () => {
    const add = (a: number, b: number) => a + b;
    const square = (x: number) => x * x;
    const addThenSquare = pipe(add, square);

    expect(addThenSquare(3, 4)).toBe(49); // (3 + 4) ^ 2 = 49
  });

  it('should compose 3+ functions', () => {
    const add1 = (x: number) => x + 1;
    const multiply2 = (x: number) => x * 2;
    const subtract3 = (x: number) => x - 3;
    const composed = pipe(add1, multiply2, subtract3);

    expect(composed(5)).toBe(9); // ((5 + 1) * 2) - 3 = 9
  });

  it('should preserve type safety across transformations', () => {
    const split = (s: string) => s.split(',');
    const count = (arr: string[]) => arr.length;
    const isEven = (n: number) => n % 2 === 0;
    const check = pipe(split, count, isEven);

    expect(check('a,b,c')).toBe(false);
    expect(check('a,b,c,d')).toBe(true);
  });
});
