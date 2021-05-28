import { isNullOrEmpty } from '../src/string';

describe('string', () => {
  describe('isNullOrEmpty', () => {
    it('should return true for null', () => {
      expect(isNullOrEmpty(null as any)).toBe(true);
    });

    it('should return true for undefiend', () => {
      expect(isNullOrEmpty(undefined as any)).toBe(true);
    });

    it('should return true for empty string', () => {
      expect(isNullOrEmpty('')).toBe(true);
    });

    it('should return true for an empty array', () => {
      expect(isNullOrEmpty([])).toBe(true);
    });

    it('should return false for a number', () => {
      expect(isNullOrEmpty(1 as any)).toBe(false);
    });

    it('should return false for a non-empty array', () => {
      expect(isNullOrEmpty([1, 2, 3])).toBe(false);
    });

    it('should return false for non-empty string', () => {
      expect(isNullOrEmpty('f')).toBe(false);
    });
  });
});
