import { describe, expect, it } from 'vitest';
import { pruneKeyWhen } from './pruneKeyWhen';

describe('pruneKeyWhen', () => {
  it('should return empty object', () => {
    expect(pruneKeyWhen({ name: null, age: '' }, key => key === 'age')).toEqual(
      { name: null },
    );
  });

  it("should return object with just one property 'name'", () => {
    expect(pruneKeyWhen({ name: 'John', age: {} }, () => true)).toEqual({});
  });

  it('should not prune nested object', () => {
    expect(pruneKeyWhen({ foo: { bar: null } }, () => false)).toEqual({
      foo: { bar: null },
    });
  });
});
