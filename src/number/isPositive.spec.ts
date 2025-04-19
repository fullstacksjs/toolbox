import { isPositive } from './isPositive';

describe('isPositive', () => {
  it('should return true for positive numbers', () => {
    expect(isPositive(0.1)).toBe(true);
    expect(isPositive(1)).toBe(true);
    expect(isPositive(10)).toBe(true);
  });

  it('should return false for zero', () => {
    expect(isPositive(0)).toBe(false);
  });

  it('should return false for negative numbers', () => {
    expect(isPositive(-0.1)).toBe(false);
    expect(isPositive(-1)).toBe(false);
    expect(isPositive(-10)).toBe(false);
  });
});
