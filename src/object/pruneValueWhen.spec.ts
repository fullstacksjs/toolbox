import { describe, expect, it } from 'vitest';
import { pruneValueWhen } from './pruneValueWhen';

describe('pruneValueWhen', () => {
  it('should return empty object', () => {
    expect(
      pruneValueWhen(
        { name: null, age: '', nickname: undefined },
        value => !value,
      ),
    ).toEqual({});
  });

  it("should return object with just one property 'name'", () => {
    expect(
      pruneValueWhen(
        {
          name: 'John',
          age: null,
          status: '',
          nickname: undefined,
        },
        value => !value,
      ),
    ).toEqual({ name: 'John' });
  });

  it('should not prune nested object', () => {
    expect(pruneValueWhen({ foo: { bar: null } }, value => !value)).toEqual({
      foo: { bar: null },
    });
  });
});
