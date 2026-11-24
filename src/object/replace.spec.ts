import { replace } from './replace.ts';

describe(replace, () => {
  it('should not affect the source', () => {
    const path = 'foo.a.b';
    const source = {
      a: 1,
      foo: {
        a: {
          b: true,
        },
      },
    };

    replace(source, path, 'bar');

    expect(source).not.toHaveProperty(path, 'bar');
  });

  it('should have all properties', () => {
    const path = 'a.bar';
    const source = {
      a: {
        foo: 0,
        bar: 1,
      },
      b: true,
      c: [1, 2, 3],
    };
    const replacedSource = replace(source, path, false);

    expect(replacedSource).toHaveProperty(path, false);
    expect(replacedSource).toHaveProperty('a.foo', 0);
    expect(replacedSource).toHaveProperty('b', true);
    expect(replacedSource).toHaveProperty('c', [1, 2, 3]);
  });

  it('should change the value if the source is an array', () => {
    const path = '1.foo.0';
    const source = [
      true,
      {
        foo: [1, 2],
      },
    ];
    const replacedSource = replace(source, path, { a: true });

    expect(replacedSource).toHaveProperty(path, { a: true });
  });

  it('should change the value if the path is repetitious', () => {
    const path = 'a.a.a.a.a.a';
    const source = {
      a: {
        a: {
          a: {
            a: {
              a: {
                a: 'foo',
              },
            },
            b: 2,
          },
        },
      },
    };

    const replacedSource = replace(source, path, 'bar');

    expect(replacedSource).toHaveProperty(path, 'bar');
  });

  it('should replace falsy leaf values', () => {
    expect(replace({ a: { b: 0 } }, 'a.b', 1)).toEqual({ a: { b: 1 } });
    expect(replace({ a: { b: false } }, 'a.b', true)).toEqual({
      a: { b: true },
    });
    expect(replace({ a: { b: '' } }, 'a.b', 'x')).toEqual({ a: { b: 'x' } });
  });

  it('should not create missing leaf keys', () => {
    expect(replace({ a: {} }, 'a.b', 1)).toEqual({ a: {} });
  });

  it('should not throw when an intermediate path is nullish', () => {
    expect(replace({ a: null }, 'a.b', 1)).toEqual({ a: null });
    expect(replace({ a: undefined }, 'a.b', 1)).toEqual({ a: undefined });
  });

  it('should ignore dangerous prototype pollution paths', () => {
    const source = { a: 1 };
    const polluted = replace(source, '__proto__.polluted', 'yes');
    const plain: Record<string, unknown> = {};

    expect(polluted).toEqual({ a: 1 });
    expect(Object.hasOwn(polluted, 'polluted')).toBe(false);
    expect(plain.polluted).toBeUndefined();
  });
});
