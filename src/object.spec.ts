import { describe, expect, it } from 'vitest';

import { pruneNullOrEmpty } from './object';

describe('Objects', () => {
  describe('pruneNullOrEmpty', () => {
    it('should return empty object', () => {
      expect(
        pruneNullOrEmpty({ name: null, age: '', nickname: undefined }),
      ).toEqual({});
    });

    it("should return object with just one property 'name'", () => {
      expect(
        pruneNullOrEmpty({
          name: 'John',
          age: null,
          status: '',
          nickname: undefined,
        }),
      ).toEqual({ name: 'John' });
    });

    it('should not prune nested object', () => {
      expect(pruneNullOrEmpty({ foo: { bar: null } })).toEqual({
        foo: { bar: null },
      });
    });

    it('should not remove empty object', () => {
      expect(pruneNullOrEmpty({ name: {} })).toEqual({ name: {} });
    });

    it('should not remove empty array', () => {
      expect(pruneNullOrEmpty({ name: [] })).toEqual({ name: [] });
    });
  });
});
