import {
  clamp,
  isInRange,
  randomInt,
  safeDivide,
  toInteger,
} from '../src/number';

describe('number', () => {
  describe('safeDivide', () => {
    it('should return the division of two number', () => {
      expect(safeDivide(4, 2)).toBe(2);
    });

    it('should return 0 when the divisor is zero', () => {
      expect(safeDivide(4, 0)).toBe(0);
    });

    it('default value for fallback should be 0', () => {
      expect(safeDivide(null as any, NaN)).toBe(0);
    });

    it('should return fallback value when the result is not a number', () => {
      expect(safeDivide(null as any, NaN, 10)).toBe(10);
    });
  });

  describe('clamp', () => {
    it('default min range should be 0', () => {
      expect(clamp(-10)).toBe(0);
    });

    it('default max range should be 1', () => {
      expect(clamp(10)).toBe(1);
    });

    it('should return min if the value is greater than min', () => {
      expect(clamp(-10, { min: -5, max: 1 })).toBe(-5);
    });

    it('should return max if the value is greater than max', () => {
      expect(clamp(30, { min: 0, max: 20 })).toBe(20);
    });

    it("should return the value if it's within range", () => {
      expect(clamp(5, { min: -20, max: 20 })).toBe(5);
    });
  });

  describe('randomInt', () => {
    it('should return an integer between the range of min and max', () => {
      const number = randomInt({ min: -10, max: 50 });
      expect(number).toBeGreaterThanOrEqual(-10);
      expect(number).toBeLessThan(50);
    });

    it('default min should be 0', () => {
      const number = randomInt({ max: 50 });
      expect(number).toBeGreaterThanOrEqual(0);
      expect(number).toBeLessThan(50);
    });

    it('default max should be MAX_SAFE_INTEGER', () => {
      const number = randomInt({ min: 50 });
      expect(number).toBeGreaterThanOrEqual(50);
      expect(number).toBeLessThan(Number.MAX_SAFE_INTEGER);
    });
  });

  describe('toInteger', () => {
    it('should convert the string to an integer', () => {
      expect(toInteger('100')).toBe(100);
    });

    it('should truncate decimals', () => {
      expect(toInteger('1.42')).toBe(1);
    });
  });

  describe('isInRange', () => {
    it('should return false for a value greater than max', () => {
      expect(isInRange(100, { min: 0, max: 50 })).toBe(false);
    });

    it('should return true for a value greater than min and equal to max', () => {
      expect(isInRange(100, { min: 0, max: 100 })).toBe(true);
    });

    it('should return true for a number greater than min and less than max', () => {
      expect(isInRange(100, { min: 50, max: 150 })).toBe(true);
    });

    it('should return true for a number less than max and equal to min', () => {
      expect(isInRange(100, { min: 100, max: 150 })).toBe(true);
    });
  });
});
