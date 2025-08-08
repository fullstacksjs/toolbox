import { toSpaceCase } from './toSpaceCase.ts';

describe('toSpaceCase', () => {
  const cases = [
    { x: '', expected: '' },
    { x: ' ', expected: '' },
    { x: 'foo', expected: 'foo' },
    { x: 'foo bar', expected: 'foo bar' },
    { x: 'foo-bar', expected: 'foo bar' },
    { x: 'fooBar', expected: 'foo bar' },
    { x: 'foo_bar', expected: 'foo bar' },
    { x: 'foo bar code', expected: 'foo bar code' },
    { x: 'foo-bar-code', expected: 'foo bar code' },
    { x: 'fooBarCode', expected: 'foo bar code' },
    { x: 'foo_bar_code', expected: 'foo bar code' },
    { x: 'FOO_BAR_CODE', expected: 'foo bar code' },
    { x: 'FOO BAR CODE', expected: 'foo bar code' },
    { x: 'foo_ -BaRC ode', expected: 'foo ba rc ode' },
    { x: 'IDCard', expected: 'id card' },
    {
      x: 'ThisIs-fullstacksjs radio__and--I-loveCoding',
      expected: 'this is fullstacksjs radio and i love coding',
    },
  ];

  it.each(cases)('$x -> $expected', ({ x, expected }) => {
    expect(toSpaceCase(x)).toBe(expected);
  });
});
