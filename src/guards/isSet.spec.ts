import { isSet } from './isSet';

describe('isSet', () => {
  const cases = [
    { x: new Set([1, 2]), expected: true },
    { x: new Set(), expected: true },
    { x: { a: 1 }, expected: false },
    { x: {}, expected: false },
    { x: [], expected: false },
    { x: [1, 2, 3], expected: false },
    { x: Symbol('bar'), expected: false },
    { x: '', expected: false },
    { x: 'foo', expected: false },
    { x: 1, expected: false },
    { x: NaN, expected: false },
    { x: true, expected: false },
    { x: null, expected: false },
    { x: new Map([['a', 1]]), expected: false },
    { x: new Map(), expected: false },
    { x: undefined, expected: false },
  ];

  it.each(cases)(
    'should return $expected for $x as input',
    ({ x, expected }) => {
      expect(isSet(x)).toBe(expected);
    },
  );
});
