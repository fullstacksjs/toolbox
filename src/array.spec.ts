import { describe, expect, it } from 'vitest';

import {
  compact,
  concatNullableArrays,
  copyArray,
  ensureArray,
  getRandom,
  isEmpty,
  isLastIndex,
  range,
  shuffle,
  toArray,
} from './array.ts';

describe('array', () => {
  describe('ensureArray', () => {
    const cases = [
      { x: null, expected: [null] },
      { x: undefined, expected: [undefined] },
      { x: 'string', expected: ['string'] },
      { x: {}, expected: [{}] },
    ];

    it.each(cases)('should wrap $x with an array', ({ x, expected }) => {
      expect(ensureArray(x)).toStrictEqual(expected);
    });

    it("should return the argument if it's already an array", () => {
      expect(ensureArray(['array'])).toStrictEqual(['array']);
    });
  });

  describe('range', () => {
    it('should create an empty array for zero-length', () => {
      expect(range(0)).toStrictEqual([]);
    });

    it('should create an array of length n from zero-offset with a one-step', () => {
      expect(range(10)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should create an array with from specified offset', () => {
      expect(range(3, { offset: 5, step: 1 })).toStrictEqual([5, 6, 7]);
    });

    it('should create an array with specified offset and step', () => {
      expect(range(3, { offset: -2, step: 10 })).toStrictEqual([-2, 8, 18]);
    });
  });

  describe('toArray', () => {
    it('should return an empty array for null', () => {
      expect(toArray(null)).toStrictEqual([]);
    });

    it('should return an empty array for undefined', () => {
      expect(toArray(undefined)).toStrictEqual([]);
    });

    it('should wrap string value with an array', () => {
      expect(toArray('string')).toStrictEqual(['string']);
    });

    it("should return the argument if it's already an array", () => {
      expect(toArray(['array'])).toStrictEqual(['array']);
    });

    it('should spread iterables', () => {
      expect(
        toArray({
          *[Symbol.iterator]() {
            yield 'foo';
          },
        }),
      ).toStrictEqual(['foo']);
    });
  });

  describe('concatNullableArrays', () => {
    it('should return empty array with no args', () => {
      expect(concatNullableArrays()).toEqual([]);
    });

    it('should return empty array with undefined argument', () => {
      expect(concatNullableArrays(undefined)).toEqual([]);
    });

    it('should return empty array with multiple undefined, null argument', () => {
      expect(concatNullableArrays(null, undefined)).toEqual([]);
    });

    it('should return empty array with empty array as argument', () => {
      expect(concatNullableArrays([])).toEqual([]);
    });

    it('should return array with if pass undefined before and after it', () => {
      expect(concatNullableArrays(undefined, [1, 2], null)).toEqual([1, 2]);
    });

    it('should merge multiple arrays even with some undefined arguments', () => {
      expect(concatNullableArrays(undefined, [1, 2], null, [3, 4])).toEqual([
        1, 2, 3, 4,
      ]);
    });

    it('should merge multiple arrays', () => {
      expect(concatNullableArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });

    it('should act as identity for single array argument', () => {
      expect(concatNullableArrays([1, 2])).toEqual([1, 2]);
    });
  });

  describe('shuffle', () => {
    it('should return empty array with empty array arg', () => {
      expect(shuffle([])).toEqual([]);
    });

    it('should return one an array with one item', () => {
      expect(shuffle([1])).toEqual([1]);
    });

    it('should return array with same items', () => {
      const arr = [1, 2, 3];

      expect(shuffle(arr)).toEqual(expect.arrayContaining(arr));
    });

    it('should return shuffled version of array', () => {
      const arr = range(501);

      // This assertion has ~1.0E-164% probability of false negative.
      expect(shuffle(arr)).not.toEqual(arr);
    });
  });

  describe('copyArray', () => {
    it('return value should be new object', () => {
      const array = [1];
      const copy = copyArray(array);
      copy[0]++;

      expect(array[0]).toBe(1);
      expect(copy[0]).toBe(2);
    });

    it('should return same array', () => {
      const array = [1];
      const copy = copyArray(array);

      expect(array).toEqual(copy);
    });
  });

  describe('getRandom', () => {
    it('should return undefined when given empty array', () => {
      expect(getRandom([])).toEqual(undefined);
    });

    it('should return first element for array with one element', () => {
      expect(getRandom([1])).toEqual(1);
    });

    it('should return one random element of array', () => {
      expect([1, 2, 3]).toContain(getRandom([1, 2, 3]));
    });
  });

  describe('compact', () => {
    it('should return empty array with empty array arg', () => {
      expect(compact([])).toEqual([]);
    });

    it('should return 1 for array with one item being 1', () => {
      expect(compact([1])).toEqual([1]);
    });

    it('should return array with same items', () => {
      expect(compact([1, 2, 3])).toEqual(expect.arrayContaining([1, 2, 3]));
    });

    it('should remove null values', () => {
      expect(compact([1, 'yo', null, false, NaN, {}, undefined])).toEqual(
        expect.arrayContaining([1, 'yo', false, NaN, {}]),
      );
    });

    it('should not remove null values in nested cases', () => {
      expect(compact([1, 2, 3, [undefined]])).toEqual([1, 2, 3, [undefined]]);
    });
  });

  describe('isEmpty', () => {
    const cases = [
      { arr: [], expected: true },
      { arr: [1], expected: false },
      { arr: [[], [], []], expected: false },
      { arr: [undefined], expected: false },
      { arr: [null], expected: false },
      { arr: [,], expected: false }, // eslint-disable-line no-sparse-arrays
      { arr: [, null], expected: false }, // eslint-disable-line no-sparse-arrays
      { arr: [, undefined], expected: false }, // eslint-disable-line no-sparse-arrays
    ];

    it.each(cases)('%j', ({ expected, arr }) => {
      expect(isEmpty(arr)).toBe(expected);
    });
  });

  describe('isLastIndex', () => {
    const cases = [
      { arr: [], index: 0, expected: false },
      { arr: [1], index: 0, expected: true },
      { arr: [1, 2], index: 1, expected: true },
      { arr: [], index: -1, expected: false },
      { arr: [[], [], []], index: 0, expected: false },
      { arr: [[], [], []], index: 2, expected: true },
      { arr: [undefined], index: 0, expected: true },
      { arr: [null], index: 0, expected: true },
      { arr: [,], index: 0, expected: true }, // eslint-disable-line no-sparse-arrays
      { arr: [, null], index: 1, expected: true }, // eslint-disable-line no-sparse-arrays
      { arr: [, undefined], index: 1, expected: true }, // eslint-disable-line no-sparse-arrays
    ];

    it.each(cases)('%o', ({ expected, arr, index }) => {
      expect(isLastIndex(arr, index)).toBe(expected);
    });
  });
});
