import { isMap } from './isMap';

describe('isMap', () => {
  const cases = [
    { x: new Map([['a', 1]]), expected: true },
    { x: new Map(), expected: true },
    { x: new Set([1, 2]), expected: false },
    { x: new Set(), expected: false },
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
    { x: undefined, expected: false },
  ];

  it.each(cases)(
    'should return $expected for $x as input',
    ({ x, expected }) => {
      expect(isMap(x)).toBe(expected);
    },
  );
});
