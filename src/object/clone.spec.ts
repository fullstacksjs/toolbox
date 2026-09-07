import { clone } from './clone.ts';

describe('clone', () => {
  it('the date should not change if its clone changes', () => {
    const date = new Date();
    const clonedDate = clone(date);

    clonedDate.setDate(date.getDate() + 1);

    expect(clonedDate).not.toBe(date);
  });

  it('the object should not change if its clone changes', () => {
    const object = {
      foo: {
        bar: {
          a: 1,
        },
      },
    };
    const clonedObject = clone(object);

    clonedObject.foo.bar.a = 0;

    expect(clonedObject.foo.bar.a).not.toBe(object.foo.bar.a);
  });

  it('the array should not change if its clone changes', () => {
    const array: any[] = [0, 'foo', [2, 3, [4, 5]]];
    const clonedArray = clone(array);

    clonedArray[2][2][0] = 'bar';

    expect(clonedArray).not.toBe(array);
  });

  it('the map collection should not change if its clone changes', () => {
    const mapCollection = new Map<string, any>([
      ['a', 1],
      ['b', true],
      ['c', { foo: true, bar: { baz: true } }],
    ]);
    const clonedMapCollection = clone(mapCollection);
    const cValue = mapCollection.get('c');
    const clonedCValue = clonedMapCollection.get('c');

    clonedCValue.foo = false;
    clonedCValue.bar.baz = false;
    clonedMapCollection.set('a', 0);
    clonedMapCollection.delete('b');

    expect(clonedCValue.foo).not.toBe(cValue.foo);
    expect(clonedCValue.bar.baz).not.toBe(cValue.bar.baz);
    expect(clonedMapCollection.get('a')).not.toBe(mapCollection.get('a'));
    expect(clonedMapCollection.get('b')).not.toBe(mapCollection.get('b'));
  });

  it('the set collection should not change if its clone changes', () => {
    const setCollection = new Set<unknown>([1, 2, 'foo', true]);
    const clonedSetCollection = clone(setCollection);

    clonedSetCollection.add(['bar', false]);

    expect(clonedSetCollection).not.toBe(setCollection);
  });

  it('should clone an object holding a reference to itself', () => {
    const object: any = { foo: 1 };
    object.self = object;
    const clonedObject = clone(object);

    expect(clonedObject).not.toBe(object);
    expect(clonedObject.self).toBe(clonedObject);
    expect(clonedObject.foo).toBe(1);
  });

  it('should clone an array holding a reference to itself', () => {
    const array: any[] = ['foo'];
    array.push(array);
    const clonedArray = clone(array);

    expect(clonedArray).not.toBe(array);
    expect(clonedArray[1]).toBe(clonedArray);
    expect(clonedArray[0]).toBe('foo');
  });

  it('should clone a map holding a reference to itself', () => {
    const mapCollection = new Map<string, any>([['foo', 1]]);
    mapCollection.set('self', mapCollection);
    const clonedMapCollection = clone(mapCollection);

    expect(clonedMapCollection).not.toBe(mapCollection);
    expect(clonedMapCollection.get('self')).toBe(clonedMapCollection);
    expect(clonedMapCollection.get('foo')).toBe(1);
  });

  it('should clone a set holding a reference to itself', () => {
    const setCollection = new Set<unknown>(['foo']);
    setCollection.add(setCollection);
    const clonedSetCollection = clone(setCollection);

    expect(clonedSetCollection).not.toBe(setCollection);
    expect(clonedSetCollection.has(clonedSetCollection)).toBe(true);
    expect(clonedSetCollection.has(setCollection)).toBe(false);
  });

  it('should clone a mutually referencing pair of objects', () => {
    const foo: any = {};
    const bar: any = {};
    foo.bar = bar;
    bar.foo = foo;
    const clonedFoo = clone(foo);

    expect(clonedFoo.bar.foo).toBe(clonedFoo);
    expect(clonedFoo.bar).not.toBe(bar);
  });

  it('should clone a repeated reference once and share it', () => {
    const shared = { foo: 1 };
    const object = { a: shared, b: shared };
    const clonedObject = clone(object);

    expect(clonedObject.a).toBe(clonedObject.b);
    expect(clonedObject.a).not.toBe(shared);
  });

  it('should preserve non-string map keys', () => {
    const key = { id: 1 };
    const mapCollection = new Map<any, any>([[key, 'foo']]);
    const clonedMapCollection = clone(mapCollection);

    expect(clonedMapCollection.get(key)).toBe('foo');
  });
});
