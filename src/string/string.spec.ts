import { describe, expect, it } from 'vitest';

import {
  comparePaths,
  getInitials,
  isNullOrEmpty,
  joinPath,
  removeLeadingSlashes,
  removeTrailingSlashes,
} from './string';

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

  describe('joinPath', () => {
    const cases = [
      { args: ['a', 'b'], expected: 'a/b' },
      { args: ['a', '/b'], expected: 'a/b' },
      { args: ['a', 'b/'], expected: 'a/b' },
      { args: ['a', '/b/'], expected: 'a/b' },
      { args: ['a/', 'b'], expected: 'a/b' },
      { args: ['a/', '/b'], expected: 'a/b' },
      { args: ['a/', 'b/'], expected: 'a/b' },
      { args: ['a/', '/b/'], expected: 'a/b' },
      { args: ['/a', 'b'], expected: 'a/b' },
      { args: ['/a', '/b'], expected: 'a/b' },
      { args: ['/a', 'b/'], expected: 'a/b' },
      { args: ['/a', '/b/'], expected: 'a/b' },
      { args: ['https://a.com', 'b'], expected: 'https://a.com/b' },
      { args: ['https://a.com', '/b'], expected: 'https://a.com/b' },
      { args: ['https://a.com', 'b/'], expected: 'https://a.com/b' },
      { args: ['https://a.com/', '/b/'], expected: 'https://a.com/b' },
      { args: ['https://a.com/', '?b=a'], expected: 'https://a.com/?b=a' },
      {
        args: ['https://a.com/', '/b/', '?query'],
        expected: 'https://a.com/b/?query',
      },
      {
        args: ['https://a.com/', '?query', '&a=query'],
        expected: 'https://a.com/?query/&a=query',
      },
    ];

    it.each(cases)(
      'should return $expected for $args as an input',
      ({ args, expected }) => {
        expect(joinPath(...args)).toBe(expected);
      },
    );
  });

  describe('comparePaths', () => {
    it('should return 0 if paths are the same', () => {
      expect(comparePaths('/path1/', '/path1/')).toBe(0);
    });

    it('should return 1 if path1 is bigger', () => {
      expect(comparePaths('b', 'a')).toBe(1);
    });

    it('should return 1 if path1 is smaller', () => {
      expect(comparePaths('a', 'b')).toBe(-1);
    });

    it('should return 0 if path1 is equal to path2 but with different case', () => {
      expect(comparePaths('path', 'PAth')).toBe(0);
    });

    it('should return non-zero if path1 is equal to path2 but with different accent', () => {
      expect(comparePaths('reserve', 'réservé')).not.toBe(0);
    });

    it('should ignore trailing slashes', () => {
      expect(comparePaths('reserve', 'reserve//')).toBe(0);
      expect(comparePaths('reserve//', 'reserve/')).toBe(0);
    });

    it('should ignore leading slashes', () => {
      expect(comparePaths('//reserve', 'reserve')).toBe(0);
      expect(comparePaths('/reserve', '//reserve')).toBe(0);
    });
  });
});
