import { describe, expect, it } from 'vitest';
import { isEmpty } from './isEmpty';

describe('isEmpty', () => {
  const cases = [
    { arr: [], expected: true },
    { arr: [1], expected: false },
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
