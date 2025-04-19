import { isNegative } from './isNegative';

describe('isNegative', () => {
  it('should return true for negative numbers', () => {
    expect(isNegative(-0.1)).toBe(true);
    expect(isNegative(-1)).toBe(true);
    expect(isNegative(-10)).toBe(true);
  });

  it('should return false for zero', () => {
    expect(isNegative(0)).toBe(false);
  });

  it('should return false for positive numbers', () => {
    expect(isNegative(0.1)).toBe(false);
    expect(isNegative(1)).toBe(false);
    expect(isNegative(10)).toBe(false);
  });
});
