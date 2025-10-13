import { compose } from './compose';

const one = () => 1;
const inc = (n: number) => n + 1;
const double = (n: number) => n * 2;
const diff = (a: number, b: number) => a - b;
const toString = (n: number) => n.toString();
const padStart = (s: string) => s.padStart(2, '0');

describe('compose', () => {
  it('works when first function has 0 params', () => {
    expect(compose(one, inc)()).toBe(2);
  });

  it('compose 6 functions', () => {
    expect(compose(inc, double, inc, double, inc, double)(1)).toBe(22);
  });

  it('works with different input types', () => {
    expect(compose(diff, inc, toString, padStart)(5, 4)).toBe('02');
  });
});
