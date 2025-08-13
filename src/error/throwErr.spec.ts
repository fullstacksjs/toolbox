import { throwErr } from './throwErr.ts';

describe('throwErr', () => {
  it('should throw Error instance', () => {
    expect(() => throwErr(new Error('error'))).toThrow('error');
  });

  it('should throw extended Error instance', () => {
    class MyError2 extends Error {}

    expect(() => throwErr(new MyError2('myError'))).toThrow('myError');
  });

  it('should throw with strings', () => {
    expect(() => throwErr('string error')).toThrow('string error');
  });
});
