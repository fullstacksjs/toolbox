import { describe, expect, it } from 'vitest';

import { compact, isEmpty, isLastIndex } from './array';

describe('array', () => {
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
