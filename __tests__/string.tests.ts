import { isNullOrEmpty, toCamelCase, toSpaceCase } from '../src/string';

describe('string', () => {
  describe('crlfToLf', () => {
    // TODO: Need tests
  });

  describe('toCamelCase', () => {
    const testCases = {
      '': '',
      'foo bar': 'fooBar',
      'foo-bar': 'fooBar',
      'fooBar': 'fooBar',
      'foo_bar': 'fooBar',
      'FOO-barCode': 'fooBarCode',
      'foo -bar _BAZ': 'fooBarBaz',
    };
    Object.entries(testCases).forEach(([value, result]) => {
      it(`should return ${result} for ${value} as input`, () => {
        expect(toCamelCase(value)).toBe(result);
      });
    });
  });

  describe('toSpaceCase', () => {
    const testCases = {
      '': '',
      'foo bar': 'foo bar',
      'foo-bar': 'foo bar',
      'fooBar': 'foo bar',
      'foo_bar': 'foo bar',
      'FOO-barCode': 'foo bar code',
      'foo -bar __BAZ': 'foo -bar _baz',
    };

    Object.entries(testCases).forEach(([value, result]) => {
      it(`should return ${result} for ${value} as input`, () => {
        expect(toSpaceCase(value)).toBe(result);
      });
    });
  });

  describe('toCapitalCase', () => {
    // TODO: Need tests
  });

  describe('isNullOrEmpty', () => {
    it('should return true for null', () => {
      expect(isNullOrEmpty(null as any)).toBe(true);
    });

    it('should return true for undefined', () => {
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
