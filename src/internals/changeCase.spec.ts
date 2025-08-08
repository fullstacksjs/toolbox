import { changeCase } from './changeCase.ts';

describe('changeCase', () => {
  const defaultCases = [
    { x: '', expected: '' },
    { x: ' ', expected: '' },
    { x: 'foo', expected: 'foo' },
    { x: 'foo bar', expected: 'foo bar' },
    { x: 'foo-bar', expected: 'foo bar' },
    { x: 'fooBar', expected: 'foo bar' },
    { x: 'foo_bar', expected: 'foo bar' },
    { x: 'FOO BAR CODE', expected: 'foo bar code' },
    { x: 'foo_ -BaRC ode', expected: 'foo ba rc ode' },
    { x: 'IDCard', expected: 'id card' },
    {
      x: 'ThisIs-fullstacksjs radio__and--I-loveCoding',
      expected: 'this is fullstacksjs radio and i love coding',
    },
  ];

  it.each(defaultCases)('default ($x) -> $expected', ({ x, expected }) => {
    expect(changeCase(x)).toBe(expected);
  });

  it('supports custom delimiter', () => {
    expect(changeCase('fooBarCode', { delimiter: '-' })).toBe('foo-bar-code');
    expect(changeCase('foo  bar--code', { delimiter: '_' })).toBe(
      'foo_bar_code',
    );
    expect(changeCase('--foo--', { delimiter: '-' })).toBe('foo');
  });

  it('supports custom map', () => {
    const upper = (s: string) => s.toUpperCase();
    expect(changeCase('foo-bar_code', { map: upper })).toBe('FOO BAR CODE');
  });

  it('passes correct (part, index, parts) to map', () => {
    const result = changeCase('FooBar Baz', {
      delimiter: '!',
      map: (part, index, parts) => `${index}-${part}-${parts.length}`,
    });
    expect(result).toBe('0-Foo-3!1-Bar-3!2-Baz-3');
  });
});
