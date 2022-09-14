import { describe, expect, it } from 'vitest';

import { noop } from './function';
import {
  isFunction,
  isIterable,
  isNotNull,
  isNull,
  isObject,
  isString,
  isTruthy,
} from './guards';

describe('guards', () => {
  describe('isNull', () => {
    const cases = [
      { x: undefined, expected: true },
      { x: null, expected: true },
      { x: 'null', expected: false },
      { x: 0, expected: false },
      { x: [], expected: false },
      { x: {}, expected: false },
      { x: false, expected: false },
    ];

    it.each(cases)('should return $expected for $x', ({ x, expected }) => {
      expect(isNull(x)).toBe(expected);
    });
  });

  describe('isNotNull', () => {
    const cases = [
      { x: undefined, expected: false },
      { x: null, expected: false },
      { x: 'null', expected: true },
      { x: 0, expected: true },
      { x: [], expected: true },
      { x: {}, expected: true },
      { x: false, expected: true },
    ];

    it.each(cases)('should return $expected for $x', ({ x, expected }) => {
      expect(isNotNull(x)).toBe(expected);
    });
  });

  describe('isTruthy', () => {
    const cases = [
      { x: undefined, expected: false },
      { x: NaN, expected: false },
      { x: false, expected: false },
      { x: 0, expected: false },
      { x: null, expected: false },
      { x: 'null', expected: true },
      { x: 1, expected: true },
      { x: [], expected: true },
      { x: {}, expected: true },
    ];

    it.each(cases)('should return $expected for $x', ({ x, expected }) => {
      expect(isTruthy(x)).toBe(expected);
    });
  });

  describe('isString', () => {
    const cases = [
      { x: '', expected: true },
      { x: undefined, expected: false },
      { x: null, expected: false },
      { x: 1, expected: false },
      { x: ['1'], expected: false },
    ];

    it.each(cases)('should return $expected for $x', ({ x, expected }) => {
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

  describe('isObject', () => {
    const cases = [
      { x: '', expected: false },
      { x: 'hello world', expected: false },
      { x: null, expected: false },
      { x: true, expected: false },
      { x: undefined, expected: false },
      { x: NaN, expected: false },
      { x: 0, expected: false },
      { x: noop, expected: false },
      { x: false, expected: false },
      { x: [], expected: false },
      { x: [2], expected: false },
      { x: {}, expected: true },
      { x: { a: 2 }, expected: true },
      { x: { 2: 'a' }, expected: true },
    ];

    it.each(cases)(
      'should return $expected for $x as input',
      ({ x, expected }) => {
        expect(isObject(x)).toBe(expected);
      },
    );
  });
});
