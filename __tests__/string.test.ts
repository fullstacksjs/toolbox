import { describe, expect, it } from 'vitest';

import {
  crlfToLf,
  getInitials,
  isNullOrEmpty,
  removeLeadingSlashes,
  removeTrailingSlashes,
  toCamelCase,
  toCapitalCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
  toSpaceCase,
} from '../src/string';

describe('string', () => {
  describe('getInitials', () => {
    it.each([
      { x: '', expected: '?' },
      { x: ' ', expected: '?' },
      { x: 'frontend', expected: 'F' },
      { x: 'frontend monsters', expected: 'FM' },
      { x: 'frontend monster rides a dinosaur in office', expected: 'FMRADIO' },
      { x: '2', expected: '2' },
      { x: '1 2 3 4', expected: '1234' },
      { x: 'x @# % * ))__() 1', expected: 'X@%*)1' },
    ])('should return $expected for $x as input', ({ x, expected }) => {
      expect(getInitials(x)).toBe(expected);
    });

    it(`should return ? for null as input`, () => {
      expect(getInitials(null as any as string)).toBe('?');
    });

    it(`should return ? for objects as input`, () => {
      expect(getInitials({ str: 'string' } as any as string)).toBe('?');
    });
  });

  describe('crlfToLf', () => {
    const cases = [
      { x: '', expected: '' },
      { x: ' ', expected: ' ' },
      { x: 'hello world', expected: 'hello world' },
      { x: 'hello world\n', expected: 'hello world\n' },
      { x: 'hello world\r\n', expected: 'hello world\n' },
      { x: 'hello world\r\n\n', expected: 'hello world\n\n' },
      {
        x: 'hello world\r\nbut how is world\r\n',
        expected: 'hello world\nbut how is world\n',
      },
      { x: 'hello world\r', expected: 'hello world\r' },
      { x: 'hello world\r\r\r\n', expected: 'hello world\r\r\n' },
    ];

    it.each(cases)(
      'should return $expected for $x as input',
      ({ x, expected }) => {
        expect(crlfToLf(x)).toBe(expected);
      },
    );
  });

  describe('toSpaceCase', () => {
    it.each([
      { x: '', expected: '' },
      { x: ' ', expected: ' ' },
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
      { x: 'foo_ -BaRC ode', expected: 'foo_ -BaRC ode' },
    ])('should return $expected for $x as input', ({ x, expected }) => {
      expect(toSpaceCase(x)).toBe(expected);
    });
  });

  describe('toCamelCase', () => {
    const cases = [
      { x: '', expected: '' },
      { x: ' ', expected: ' ' },
      { x: 'foo', expected: 'foo' },
      { x: 'foo bar', expected: 'fooBar' },
      { x: 'foo-bar', expected: 'fooBar' },
      { x: 'fooBar', expected: 'fooBar' },
      { x: 'foo_bar', expected: 'fooBar' },
      { x: 'foo bar code', expected: 'fooBarCode' },
      { x: 'foo-bar-code', expected: 'fooBarCode' },
      { x: 'fooBarCode', expected: 'fooBarCode' },
      { x: 'foo_bar_code', expected: 'fooBarCode' },
      { x: 'FOO_BAR_CODE', expected: 'fooBarCode' },
      { x: 'foo_ -BaRC ode', expected: 'foo_ -BaRC ode' },
    ];

    it.each(cases)(
      'should return $expected for $x as input',
      ({ x, expected }) => {
        expect(toCamelCase(x)).toBe(expected);
      },
    );
  });

  describe('toPascalCase', () => {
    const cases = [
      { x: '', expected: '' },
      { x: ' ', expected: ' ' },
      { x: 'foo', expected: 'Foo' },
      { x: 'foo bar', expected: 'FooBar' },
      { x: 'foo-bar', expected: 'FooBar' },
      { x: 'fooBar', expected: 'FooBar' },
      { x: 'foo_bar', expected: 'FooBar' },
      { x: 'foo bar code', expected: 'FooBarCode' },
      { x: 'foo-bar-code', expected: 'FooBarCode' },
      { x: 'fooBarCode', expected: 'FooBarCode' },
      { x: 'foo_bar_code', expected: 'FooBarCode' },
      { x: 'FOO_BAR_CODE', expected: 'FooBarCode' },
      { x: 'foo_ -BaRC ode', expected: 'foo_ -BaRC ode' },
    ];
    it.each(cases)(
      'should return $expected for $x as input',
      ({ x, expected }) => {
        expect(toPascalCase(x)).toBe(expected);
      },
    );
  });

  describe('toSnakeCase', () => {
    const cases = [
      { x: '', expected: '' },
      { x: ' ', expected: ' ' },
      { x: 'foo', expected: 'foo' },
      { x: 'foo bar', expected: 'foo_bar' },
      { x: 'foo-bar', expected: 'foo_bar' },
      { x: 'fooBar', expected: 'foo_bar' },
      { x: 'foo_bar', expected: 'foo_bar' },
      { x: 'foo bar code', expected: 'foo_bar_code' },
      { x: 'foo-bar-code', expected: 'foo_bar_code' },
      { x: 'fooBarCode', expected: 'foo_bar_code' },
      { x: 'foo_bar_code', expected: 'foo_bar_code' },
      { x: 'FOO_BAR_CODE', expected: 'foo_bar_code' },
      { x: 'foo_ -BaRC ode', expected: 'foo_ -BaRC ode' },
    ];
    it.each(cases)(
      'should return $expected for $x as input',
      ({ x, expected }) => {
        expect(toSnakeCase(x)).toBe(expected);
      },
    );
  });

  describe('toKebabCase', () => {
    const cases = [
      { x: '', expected: '' },
      { x: ' ', expected: ' ' },
      { x: 'foo', expected: 'foo' },
      { x: 'foo bar', expected: 'foo-bar' },
      { x: 'foo-bar', expected: 'foo-bar' },
      { x: 'fooBar', expected: 'foo-bar' },
      { x: 'foo_bar', expected: 'foo-bar' },
      { x: 'foo bar code', expected: 'foo-bar-code' },
      { x: 'foo-bar-code', expected: 'foo-bar-code' },
      { x: 'fooBarCode', expected: 'foo-bar-code' },
      { x: 'foo_bar_code', expected: 'foo-bar-code' },
      { x: 'FOO_BAR_CODE', expected: 'foo-bar-code' },
      { x: 'foo_ -BaRC ode', expected: 'foo_ -BaRC ode' },
    ];

    it.each(cases)(
      'should return $expected for $x as input',
      ({ x, expected }) => {
        expect(toKebabCase(x)).toBe(expected);
      },
    );
  });

  describe('toCapitalCase', () => {
    const cases = [
      { x: '', expected: '' },
      { x: ' ', expected: ' ' },
      { x: 'foo', expected: 'Foo' },
      { x: 'Foo', expected: 'Foo' },
      { x: 'FOOBAR', expected: 'Foobar' },
    ];

    it.each(cases)(
      'should return $expected for $x as input',
      ({ x, expected }) => {
        expect(toCapitalCase(x)).toBe(expected);
      },
    );
  });

  describe('isNullOrEmpty', () => {
    const cases = [
      { x: null, expected: true },
      { x: undefined, expected: true },
      { x: '', expected: true },
      { x: [], expected: true },
      { x: [1], expected: false },
      { x: 'f', expected: false },
    ];

    it.each(cases)(
      'should return $expected for $x as input',
      ({ x, expected }) => {
        expect(isNullOrEmpty(x)).toBe(expected);
      },
    );
  });

  describe('removeTrailingSlash', () => {
    const cases = [
      { x: '', expected: '' },
      { x: '/', expected: '' },
      { x: 'string', expected: 'string' },
      { x: 'string/', expected: 'string' },
      { x: 'string//', expected: 'string' },
      { x: '/string//', expected: '/string' },
      { x: 'https://domain.com/path/', expected: 'https://domain.com/path' },
      { x: 'https://domain.com/path//', expected: 'https://domain.com/path' },
    ];

    it.each(cases)(
      'should return $expected for $x as input',
      ({ x, expected }) => {
        expect(removeTrailingSlashes(x)).toBe(expected);
      },
    );
  });

  describe('removeLeadingSlash', () => {
    const cases = [
      { x: '', expected: '' },
      { x: '/', expected: '' },
      { x: 'string', expected: 'string' },
      { x: '/string', expected: 'string' },
      { x: '//string', expected: 'string' },
      { x: '//string/', expected: 'string/' },
      { x: '//string/a', expected: 'string/a' },
    ];

    it.each(cases)(
      'should return $expected for $x as input',
      ({ x, expected }) => {
        expect(removeLeadingSlashes(x)).toBe(expected);
      },
    );
  });
});
