import { getTypeOf } from './getTypeOf';

describe('getTypeOf', () => {
  const cases = [
    {
      value: class Foo {
        a = 1;
      },
      expected: 'function',
    },
    { value: [], expected: 'array' },
    { value: 1, expected: 'number' },
    { value: {}, expected: 'object' },
    { value: null, expected: 'null' },
    { value: 10n, expected: 'bigint' },
    { value: 'foo', expected: 'string' },
    { value: true, expected: 'boolean' },
    { value: new Map(), expected: 'map' },
    { value: new Set(), expected: 'set' },
    { value: new Date(), expected: 'object' },
    { value: new Error(), expected: 'object' },
    { value: [].values(), expected: 'object' },
    { value: () => true, expected: 'function' },
    { value: undefined, expected: 'undefined' },
    { value: Symbol('bar'), expected: 'symbol' },
    { value: new WeakMap(), expected: 'object' },
    { value: new RegExp('foo'), expected: 'object' },
    { value: Promise.resolve(true), expected: 'object' },
  ];

  it.each(cases)(
    'the typeof $value should be $expected',
    ({ value, expected }) => expect(getTypeOf(value)).toBe(expected),
  );
});
