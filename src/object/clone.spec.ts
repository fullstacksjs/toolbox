import { clone } from './clone';

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
    const setCollection = new Set<unknown>([1, 2, true, 'foo']);
    const clonedSetCollection = clone(setCollection);

    clonedSetCollection.add(['bar', false]);

    expect(clonedSetCollection).not.toBe(setCollection);
  });
});
