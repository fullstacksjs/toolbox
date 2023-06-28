import { describe, expect, it } from 'vitest';
import { joinPath } from './joinPaths';

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
