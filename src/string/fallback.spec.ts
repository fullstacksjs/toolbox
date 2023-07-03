import { describe, expect, it } from 'vitest';
import { fallback } from './fallback.ts';

describe('fallback', () => {
  const cases = [
    { x: '', defaultValue: 'd', expected: 'd' },
    { x: ' ', defaultValue: 'd', expected: ' ' },
    { x: 'x', defaultValue: 'd', expected: 'x' },
    { x: null, defaultValue: 'd', expected: 'd' },
    { x: undefined, defaultValue: 'd', expected: 'd' },
  ];

  it.each(cases)(
    '($x, $fallback) -> $expected',
    ({ expected, defaultValue, x }) => {
      expect(fallback(x, defaultValue)).toBe(expected);
    },
  );
});
