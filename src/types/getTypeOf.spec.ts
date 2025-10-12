import type { Immutable, Mutable, Result } from './types';

import { getTypeOf } from './getTypeOf';
import { asNonEmptyArray, Err, Ok, pipe } from './types';

describe('getTypeOf', () => {
  const cases = [
    {
      value: class Foo {
        a = 1;
      },
      expected: 'function',
    },
    { value: [], expected: 'array' },
    { value: 1, expected: 'number' },
    { value: {}, expected: 'object' },
    { value: null, expected: 'null' },
    { value: 10n, expected: 'bigint' },
    { value: 'foo', expected: 'string' },
    { value: true, expected: 'boolean' },
    { value: new Map(), expected: 'map' },
    { value: new Set(), expected: 'set' },
    { value: new Date(), expected: 'date' },
    { value: new Error(), expected: 'object' },
    { value: [].values(), expected: 'object' },
    { value: () => true, expected: 'function' },
    { value: undefined, expected: 'undefined' },
    { value: Symbol('bar'), expected: 'symbol' },
    { value: new WeakMap(), expected: 'weakmap' },
    { value: new WeakSet(), expected: 'weakset' },
    { value: /'foo'/, expected: 'regexp' },
    { value: Promise.resolve(true), expected: 'object' },
  ];

  it.each(cases)(
    'the typeof $value should be $expected',
    ({ value, expected }) => expect(getTypeOf(value)).toBe(expected),
  );
});

describe('asNonEmptyArray', () => {
  it('creates a non-empty array', () => {
    const arr = asNonEmptyArray(1, 2, 3);
    expect(arr).toHaveLength(3);
    expect(arr[0]).toBe(1);
  });

  // @ts-expect-error - should not allow zero elements
  asNonEmptyArray();
});

describe('Mutable and Immutable', () => {
  it('Mutable allows reassignment', () => {
    interface Sample {
      readonly a: number;
    }
    const mutable: Mutable<Sample> = { a: 5 };
    mutable.a = 10;
    expect(mutable.a).toBe(10);
  });

  it('Immutable prevents reassignment', () => {
    interface Sample {
      a: number;
    }
    const immutable: Immutable<Sample> = { a: 5 };

    // @ts-expect-error - reassignment should fail
    immutable.a = 10;

    expect(immutable.a).toBe(5);
  });
});

describe('Result, Ok, Err, AsyncResult', () => {
  it('Ok wraps value correctly', () => {
    const ok = Ok(123);
    expect(ok).toEqual({ ok: true, value: 123 });
  });

  it('Err wraps error correctly', () => {
    const err = Err('oops');
    expect(err).toEqual({ ok: false, error: 'oops' });
  });

  it('AsyncResult resolves to Result', async () => {
    const promise: Promise<Result<string, never>> = Promise.resolve(Ok('done'));
    const res = await promise;
    expect(res.ok).toBe(true);
    if (res.ok) expect(res.value).toBe('done');
  });
});

describe('pipe', () => {
  it('applies functions sequentially', () => {
    const result = pipe(
      2,
      (x: number) => x + 2,
      (x: number) => x * 3,
    );
    expect(result).toBe(12); // (2+2)*3
  });
});
