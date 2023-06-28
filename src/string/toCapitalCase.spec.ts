import { describe, expect, it } from 'vitest';
import { toCapitalCase } from './toCapitalCase';

describe('toCapitalCase', () => {
  const cases = [
    { x: '', expected: '' },
    { x: ' ', expected: ' ' },
    { x: 'foo', expected: 'Foo' },
    { x: 'foo bar', expected: 'Foo Bar' },
    { x: 'foo-bar', expected: 'Foo Bar' },
    { x: 'fooBar', expected: 'Foo Bar' },
    { x: 'foo_bar', expected: 'Foo Bar' },
    { x: 'foo bar code', expected: 'Foo Bar Code' },
    { x: 'foo-bar-code', expected: 'Foo Bar Code' },
    { x: 'fooBarCode', expected: 'Foo Bar Code' },
    { x: 'foo_bar_code', expected: 'Foo Bar Code' },
    { x: 'FOO_BAR_CODE', expected: 'Foo Bar Code' },
    // {
    //   x: 'MyName-is_peter parker__and--I-amCool',
    //   expected: 'My Name Is Peter Parker And I Am Cool',
    // },
  ];

  it.each(cases)('$x -> $expected', ({ x, expected }) => {
    expect(toCapitalCase(x)).toBe(expected);
  });
});
