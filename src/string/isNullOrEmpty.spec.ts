import { describe, expect, it } from 'vitest';
import { isNullOrEmpty } from './isNullOrEmpty';

describe('isNullOrEmpty', () => {
  const cases = [
    { x: null, expected: true },
    { x: undefined, expected: true },
    { x: '', expected: true },
    { x: 'f', expected: false },
  ];

  it.each(cases)(
    'should return $expected for $x as input',
    ({ x, expected }) => {
      expect(isNullOrEmpty(x)).toBe(expected);
    },
  );
});
