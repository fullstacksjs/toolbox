import { asNonEmptyArray } from './nonEmptyArray';

describe('asNonEmptyArray', () => {
  it('creates a non-empty array', () => {
    const arr = asNonEmptyArray(1, 2, 3);
    expect(arr).toHaveLength(3);
    expect(arr[0]).toBe(1);
  });

  // @ts-expect-error - should not allow zero elements
  asNonEmptyArray();
});
