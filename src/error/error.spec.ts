import { describe, expect, it } from 'vitest';

import { assert, throwErr } from './error';

describe('error', () => {
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

    describe('assert', () => {
      it('should throw error when condition is false', () => {
        expect(() => assert(false, 'WTF')).toThrow('WTF');
      });

      it('should not throw error when condition is true', () => {
        expect(() => assert(true, 'WTF')).not.toThrow('WTF');
      });
    });
  });
});
