import { describe, expect, it } from 'vitest';

import { compact, getRandom, isEmpty, isLastIndex, shuffle } from './array';
import { range } from './range';

describe('array', () => {
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
