import type { Immutable, Mutable } from './mutability';

describe('mutable and Immutable', () => {
  it('mutable allows reassignment', () => {
    interface Sample {
      readonly a: number;
    }
    const mutable: Mutable<Sample> = { a: 5 };
    mutable.a = 10;

    expect(mutable.a).toBe(10);
  });

  it('immutable prevents reassignment', () => {
    expect.assertions(0);

    interface Sample {
      a: number;
    }
    const immutable: Immutable<Sample> = { a: 5 };

    // @ts-expect-error - should not allow reassignment
    immutable.a = 10;
  });
});
