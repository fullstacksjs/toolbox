import { describe, expect, it } from 'vitest';
import { throwErr } from './throwErr';

describe('throwErr', () => {
  it('should throw Error instance', () => {
    expect(() => throwErr(new Error('error'))).toThrowError('error');
  });

  it('should throw extended Error instance', () => {
    class MyError extends Error {}

    expect(() => throwErr(new MyError('myError'))).toThrowError('myError');
  });

  it('should throw with strings', () => {
    expect(() => throwErr('string error')).toThrowError('string error');
  });
});
