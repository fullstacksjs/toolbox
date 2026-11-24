import { isInRange } from './isInRange.ts';

describe(isInRange, () => {
  it('should return false when value is greater than max', () => {
    expect(isInRange(51, 0, 50)).toBe(false);
  });

  it('should return false when value is less than min', () => {
    expect(isInRange(-1, 0, 100)).toBe(false);
  });

  it('should return false when value is below a non-zero min', () => {
    expect(isInRange(5, 10, 50)).toBe(false);
  });

  it('should return false when value is above a non-zero max', () => {
    expect(isInRange(55, 10, 50)).toBe(false);
  });

  it('should return true for max', () => {
    expect(isInRange(100, 0, 100)).toBe(true);
  });

  it('should return true for min', () => {
    expect(isInRange(0, 0, 100)).toBe(true);
  });

  it('should return true for value between min and max', () => {
    expect(isInRange(50, 0, 100)).toBe(true);
    expect(isInRange(25, 10, 50)).toBe(true);
  });
});
