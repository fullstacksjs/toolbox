import { describe, expect, it } from 'vitest';

import { isLowerCase } from './isLowerCase';

describe('isLowerCase', () => {
  it.each([
    { x: '', expected: false },
    { x: 'test', expected: true },
    { x: 'TEST', expected: false },
    { x: 'Test', expected: false },
    { x: '123', expected: false },
    { x: 'snake_case', expected: true },
  ])(`$x => $expected`, ({ expected, x }) => {
    expect(isLowerCase(x)).toEqual(expected);
  });
});
