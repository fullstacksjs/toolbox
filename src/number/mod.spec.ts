import { mod } from './mod.ts';

describe('mod', () => {
  it.each([
    { value: 10, divisor: 10, expected: 0 },
    { value: 11, divisor: 10, expected: 1 },
    { value: 20, divisor: 10, expected: 0 },
    { value: -1, divisor: 10, expected: 9 },
    { value: -9, divisor: 10, expected: 1 },
    { value: -10, divisor: 10, expected: 0 },
    { value: -11, divisor: 10, expected: 9 },
  ])('$value mod $divisor = $expected', ({ value, divisor, expected }) => {
    expect(mod(value, divisor)).toBe(expected);
  });

  it.each([
    { value: NaN, divisor: 10 },
    { value: 10, divisor: NaN },
    { value: NaN, divisor: NaN },
  ])('$value mod $divisor = NaN', ({ value, divisor }) => {
    expect(mod(value, divisor)).toBeNaN();
  });

  it('should throw an error if the divisor is less than or equal to 0', () => {
    expect(() => mod(10, 0)).toThrow('Divisor must be greater than 0');
    expect(() => mod(10, -1)).toThrow('Divisor must be greater than 0');
  });
});
