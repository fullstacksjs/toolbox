import { describe, expect, it } from 'vitest';
import { isNotNull } from './isNotNull';

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
