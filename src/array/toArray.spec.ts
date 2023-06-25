import { describe, expect, it } from 'vitest';
import { toArray } from './toArray';

describe('toArray', () => {
  it('should return an empty array for null', () => {
    expect(toArray(null)).toStrictEqual([]);
  });

  it('should return an empty array for undefined', () => {
    expect(toArray(undefined)).toStrictEqual([]);
  });

  it('should wrap string value with an array', () => {
    expect(toArray('string')).toStrictEqual(['s', 't', 'r', 'i', 'n', 'g']);
  });

  it("should return the argument if it's already an array", () => {
    expect(toArray([1])).toStrictEqual([1]);
  });

  it("should return the argument if it's already an array", () => {
    expect(toArray(1)).toStrictEqual([1]);
  });

  it('should spread iterables', () => {
    expect(
      toArray({
        *[Symbol.iterator]() {
          yield 1;
          yield 2;
        },
      }),
    ).toStrictEqual([1, 2]);
  });
});
