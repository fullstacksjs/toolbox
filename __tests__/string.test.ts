import {
  isNullOrEmpty,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
  toSpaceCase,
} from '../src/string';

describe('string', () => {
  describe('crlfToLf', () => {
    // TODO: Need tests
  });

  describe('toSpaceCase', () => {
    const testCases = {
      '': '',
      ' ': ' ',
      'foo': 'foo',
      'foo bar': 'foo bar',
      'foo-bar': 'foo bar',
      'fooBar': 'foo bar',
      'foo_bar': 'foo bar',
      'foo bar code': 'foo bar code',
      'foo-bar-code': 'foo bar code',
      'fooBarCode': 'foo bar code',
      'foo_bar_code': 'foo bar code',
      'foo_ -BaRC ode': 'foo_ -BaRC ode',
    };

    Object.entries(testCases).forEach(([value, result]) => {
      it(`should return ${result} for ${value} as input`, () => {
        expect(toSpaceCase(value)).toBe(result);
      });
    });
  });

  describe('toCamelCase', () => {
    const testCases = {
      '': '',
      ' ': ' ',
      'foo': 'foo',
      'foo bar': 'fooBar',
      'foo-bar': 'fooBar',
      'fooBar': 'fooBar',
      'foo_bar': 'fooBar',
      'foo bar code': 'fooBarCode',
      'foo-bar-code': 'fooBarCode',
      'fooBarCode': 'fooBarCode',
      'foo_bar_code': 'fooBarCode',
      'foo_ -BaRC ode': 'foo_ -BaRC ode',
    };
    Object.entries(testCases).forEach(([value, result]) => {
      it(`should return ${result} for ${value} as input`, () => {
        expect(toCamelCase(value)).toBe(result);
      });
    });
  });

  describe('toPascalCase', () => {
    const testCases = {
      '': '',
      ' ': ' ',
      'foo': 'Foo',
      'foo bar': 'FooBar',
      'foo-bar': 'FooBar',
      'fooBar': 'FooBar',
      'foo_bar': 'FooBar',
      'foo bar code': 'FooBarCode',
      'foo-bar-code': 'FooBarCode',
      'fooBarCode': 'FooBarCode',
      'foo_bar_code': 'FooBarCode',
      'foo_ -BaRC ode': 'foo_ -BaRC ode',
    };
    Object.entries(testCases).forEach(([value, result]) => {
      it(`should return ${result} for ${value} as input`, () => {
        expect(toPascalCase(value)).toBe(result);
      });
    });
  });

  describe('toSnakeCase', () => {
    const testCases = {
      '': '',
      ' ': ' ',
      'foo': 'foo',
      'foo bar': 'foo_bar',
      'foo-bar': 'foo_bar',
      'fooBar': 'foo_bar',
      'foo_bar': 'foo_bar',
      'foo bar code': 'foo_bar_code',
      'foo-bar-code': 'foo_bar_code',
      'fooBarCode': 'foo_bar_code',
      'foo_bar_code': 'foo_bar_code',
      'foo_ -BaRC ode': 'foo_ -BaRC ode',
    };

    Object.entries(testCases).forEach(([value, result]) => {
      it(`should return ${result} for ${value} as input`, () => {
        expect(toSnakeCase(value)).toBe(result);
      });
    });
  });
  describe('toKebabCase', () => {
    const testCases = {
      '': '',
      ' ': ' ',
      'foo': 'foo',
      'foo bar': 'foo-bar',
      'foo-bar': 'foo-bar',
      'fooBar': 'foo-bar',
      'foo_bar': 'foo-bar',
      'foo bar code': 'foo-bar-code',
      'foo-bar-code': 'foo-bar-code',
      'fooBarCode': 'foo-bar-code',
      'foo_bar_code': 'foo-bar-code',
      'foo_ -BaRC ode': 'foo_ -BaRC ode',
    };
    Object.entries(testCases).forEach(([value, result]) => {
      it(`should return ${result} for ${value} as input`, () => {
        expect(toKebabCase(value)).toBe(result);
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