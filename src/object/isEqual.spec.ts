import { clone } from './clone.ts';
import { isEqual } from './isEqual.ts';

describe(isEqual, () => {
  it('should be able to compare primitives', () => {
    expect(isEqual('abc', 'abc')).toBe(true);
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual(10n, 10n)).toBe(true);
    expect(isEqual(false, false)).toBe(true);
    expect(isEqual(Symbol('test'), Symbol('test'))).toBe(false);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, undefined)).toBe(true);
    expect(isEqual(isEqual, isEqual)).toBe(true);
    expect(isEqual(isEqual, clone)).toBe(false);
  });

  it('should handle special cases', () => {
    expect(isEqual(NaN, NaN)).toBe(true);
    expect(isEqual(+0, -0)).toBe(true);
  });

  it('should be able to compare similar Date objects', () => {
    const a = new Date();
    const b = new Date(a);

    expect(isEqual(a, b)).toBe(true);

    b.setMinutes(b.getMinutes() + 1);

    expect(isEqual(a, b)).toBe(false);
  });

  it('should be able to compare similar RegExp objects', () => {
    const a = /^abc$/i;
    const b = /^abc$/i;

    expect(isEqual(a, b)).toBe(true);

    expect(isEqual(a, /^abc$/g)).toBe(false);
    expect(isEqual(a, /^abd$/i)).toBe(false);
  });

  it('should be able to compare objects/arrays deeply', () => {
    const a = {
      name: 'John',
      age: 68,
      children: [
        {
          name: 'Alex',
          age: 28,
          child: {
            name: 'Sara',
            age: 8,
          },
        },
        {
          name: 'Beth',
          age: 28,
          child: {
            name: 'Alice',
            age: 8,
          },
        },
      ],
    };

    const b = clone(a);

    expect(isEqual(a, b)).toBe(true);

    b.children[1].child.age = 10;

    expect(isEqual(a, b)).toBe(false);
  });

  it('should be able to compare similar Map objects', () => {
    const a = new Map();
    a.set('a', 1);
    a.set('10', 'b');

    const innerM = new Map();
    innerM.set('a', 2);
    innerM.set('10', 'c');

    a.set('inner', innerM);

    const b = clone(a);

    expect(isEqual(a, b)).toBe(true);
  });

  it('should be able to compare similar Set objects', () => {
    const a = new Set();

    a.add(1);
    a.add(2);
    a.add(3);
    a.add([1, 2, 3]);
    a.add({ name: 'John' });

    const b = clone(a);

    expect(isEqual(a, b)).toBe(true);

    b.delete(2);

    expect(isEqual(a, b)).toBe(false);
  });

  it('should be able to handle objects with circular references', () => {
    const shared = {};

    const a = {
      x: shared,
      y: shared,
    };

    const b = {
      x: {},
      y: {},
    };

    expect(isEqual(a, b)).toBe(true);

    (b.y as { parent: object }).parent = b;

    expect(isEqual(a, b)).toBe(false);
  });

  it('should be able to handle arrays with circular references', () => {
    const a: any[] = [1, 2];
    a[2] = a;

    const b: any[] = [1, 2];
    b[2] = b;

    expect(isEqual(a, b)).toBe(true);
  });
});
