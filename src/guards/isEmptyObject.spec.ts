import { isEmptyObject } from './isEmptyObject';

describe('isEmptyObject', () => {
  const cases = [
    { x: {}, expected: true },
    { x: [], expected: false },
    { x: 10, expected: false },
    { x: true, expected: false },
    { x: null, expected: false },
    { x: 'bar', expected: false },
    { x: () => {}, expected: false },
    { x: { a: 1 }, expected: false },
    { x: new Map(), expected: false },
    { x: new Set(), expected: false },
    { x: [1, 'foo'], expected: false },
    { x: new Set([1, true]), expected: false },
    { x: new Map([['a', 1]]), expected: false },
  ];

  it.each(cases)('should return $expected for $x', ({ x, expected }) => {
    expect(isEmptyObject(x)).toBe(expected);
  });
});
