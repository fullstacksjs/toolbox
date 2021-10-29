import {
  isFunction,
  isIterable,
  isNotNull,
  isNull,
  isString,
  isTruthy,
} from '../src/guards';

describe('guards', () => {
  describe('isNull', () => {
    it.each`
      x            | expected
      ${undefined} | ${true}
      ${null}      | ${true}
      ${'null'}    | ${false}
      ${0}         | ${false}
      ${[]}        | ${false}
      ${{}}        | ${false}
      ${false}     | ${false}
    `('should return $expected for $x', ({ x, expected }) => {
      expect(isNull(x)).toBe(expected);
    });
  });

  describe('isNotNull', () => {
    it.each`
      x            | expected
      ${undefined} | ${false}
      ${null}      | ${false}
      ${'null'}    | ${true}
      ${0}         | ${true}
      ${[]}        | ${true}
      ${{}}        | ${true}
      ${false}     | ${true}
    `('should return $expected for $x', ({ x, expected }) => {
      expect(isNotNull(x)).toBe(expected);
    });
  });

  describe('isTruthy', () => {
    it.each`
      x            | expected
      ${undefined} | ${false}
      ${NaN}       | ${false}
      ${false}     | ${false}
      ${0}         | ${false}
      ${null}      | ${false}
      ${'null'}    | ${true}
      ${1}         | ${true}
      ${[]}        | ${true}
      ${{}}        | ${true}
    `('should return $expected for $x', ({ x, expected }) => {
      expect(isTruthy(x)).toBe(expected);
    });
  });

  describe('isString', () => {
    it.each`
      x            | expected
      ${''}        | ${true}
      ${undefined} | ${false}
      ${null}      | ${false}
      ${1}         | ${false}
      ${['1']}     | ${false}
    `('should return $expected for $x', ({ x, expected }) => {
      expect(isString(x)).toBe(expected);
    });
  });

  describe('isIterable', () => {
    it('should return false for undefined', () => {
      expect(isIterable(undefined)).toBe(false);
    });

    it('should return true for array', () => {
      expect(isIterable([])).toBe(true);
    });

    it('should return true for Map', () => {
      expect(isIterable(new Map())).toBe(true);
    });

    it('should return true for user-defined iterables', () => {
      expect(
        isIterable({
          *[Symbol.iterator]() {
            yield 'foo';
          },
        }),
      ).toBe(true);
    });

    it('should return true for string', () => {
      expect(isIterable('some')).toBe(true);
    });

    it('should return false for object', () => {
      expect(isIterable({})).toBe(false);
    });
  });

  describe('isFunction', () => {
    it('should return false for undefined', () => {
      expect(isFunction(undefined)).toBe(false);
    });

    it('should return false for boolean', () => {
      expect(isFunction(true)).toBe(false);
    });

    it('should return false for string', () => {
      expect(isFunction('string')).toBe(false);
    });

    it('should return true for function', () => {
      expect(isFunction(() => 1)).toBe(true);
    });
  });
});
