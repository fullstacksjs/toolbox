import { isNullOrEmptyString } from './isNullOrEmptyString.ts';

describe('isNullOrEmptyString', () => {
  const cases = [
    { x: null, expected: true },
    { x: undefined, expected: true },
    { x: '', expected: true },
    { x: 'f', expected: false },
  ];

  it.each(cases)(
    'should return $expected for $x as input',
    ({ x, expected }) => {
      expect(isNullOrEmptyString(x)).toBe(expected);
    },
  );
});
