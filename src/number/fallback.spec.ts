import { describe, expect, it } from 'vitest';
import { fallback } from './fallback.ts';

describe('divide', () => {
  const cases = [
    { x: 0, defaultValue: 1, expected: 0 },
    { x: null, defaultValue: 1, expected: 1 },
    { x: undefined, defaultValue: 1, expected: 1 },
    { x: Infinity, defaultValue: 1, expected: 1 },
    { x: -Infinity, defaultValue: 1, expected: 1 },
    { x: -0, defaultValue: 1, expected: -0 },
    { x: NaN, defaultValue: 1, expected: 1 },
    { x: -1, defaultValue: 1, expected: -1 },
    { x: 1, defaultValue: -1, expected: 1 },
  ];

  it.each(cases)(
    '($x, $fallback) -> $expected',
    ({ expected, defaultValue, x }) => {
      expect(fallback(x, defaultValue)).toBe(expected);
    },
  );
});
