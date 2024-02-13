import { replace } from './replace';

describe('replace', () => {
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
});
