import { dec } from './dec';

describe('dec', () => {
  it('should decrement by 1 when no step is provided', () => {
    expect(dec(2)).toBe(1);
    expect(dec(5)).toBe(4);
  });

  it('should decrement by the given step', () => {
    expect(dec(4, 2)).toBe(2);
    expect(dec(8, 3)).toBe(5);
  });

  it('should handle negative steps correctly', () => {
    expect(dec(5, -2)).toBe(7);
  });
});
