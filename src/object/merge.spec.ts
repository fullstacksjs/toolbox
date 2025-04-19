import { merge } from './merge';

describe('merge', () => {
  it('should have all properties', () => {
    const obj1 = {
      color: 'black',
      offset: [1, 2],
      foo: { offset: [0], left: 10 },
    };
    const obj2 = {
      bar: true,
      color: 'red',
      foo: { offset: [1], right: 5 },
    };

    const merged = merge(obj1, obj2);

    expect(merged).toHaveProperty('bar', true);
    expect(merged).toHaveProperty('color', 'red');
    expect(merged).toHaveProperty('foo.left', 10);
    expect(merged).toHaveProperty('foo.right', 5);
    expect(merged).toHaveProperty('offset', [1, 2]);
    expect(merged).toHaveProperty('foo.offset', [0, 1]);
  });

  describe('default composer', () => {
    it('should return v2 when keys are primitive', () => {
      const obj1 = {
        num: 1,
        str: '1',
        bool: false,
        bingInt: 1n,
        sym: Symbol(1),
      };
      const obj2 = {
        num: 2,
        str: '2',
        bool: true,
        bingInt: 2n,
        sym: Symbol(2),
      };

      const merged = merge(obj1, obj2);

      expect(merged).toStrictEqual(obj2);
    });

    it('should concat arrays when keys are array', () => {
      const obj1 = { arr: [1, 2] };
      const obj2 = { arr: [3, 4] };

      const merged = merge(obj1, obj2);

      expect(merged).toStrictEqual({ arr: [1, 2, 3, 4] });
    });

    it('should merge objects when values are object', () => {
      const obj1 = { obj: { a: 1 } };
      const obj2 = { obj: { b: 2 } };

      const merged = merge(obj1, obj2);

      expect(merged).toStrictEqual({ obj: { a: 1, b: 2 } });
    });

    it('should merge objects when values are map', () => {
      const obj1 = {
        a: new Map<string, any>([['a', { bar: 1, c: 2 }]]),
      };
      const obj2 = {
        a: new Map<string, any>([['b', false]]),
      };

      const merged = merge(obj1, obj2);

      expect(merged).toStrictEqual({
        a: new Map<string, any>([
          ['a', { bar: 1, c: 2 }],
          ['b', false],
        ]),
      });
    });

    it('should merge objects when values are set', () => {
      const obj1 = {
        a: new Set([1, 2, 3]),
      };
      const obj2 = {
        a: new Set([['foo', 'bar', false], 'a', 'b', true]),
      };

      const merged = merge(obj1, obj2);

      expect(merged).toStrictEqual({
        a: new Set([['foo', 'bar', false], 1, 2, 3, 'a', 'b', true]),
      });
    });

    it('should merge nested objects when values are object', () => {
      const obj1 = { obj: { a: { b: [1] } } };
      const obj2 = { obj: { a: { b: [1] } } };

      const merged = merge(obj1, obj2);

      expect(merged).toStrictEqual({ obj: { a: { b: [1, 1] } } });
    });
  });

  describe('custom composer', () => {
    const obj1 = {
      a: { a: { foo: true } },
    };
    const obj2 = {
      a: { a: { bar: 1 }, b: 'baz' },
    };

    const merged = merge(obj1, obj2, args => {
      if (args.key === 'b') return 1;
      if (args.path === 'obj.a.a.bar') return false;

      return merge.defaultComposer(args);
    });

    it('should use custom composer with key and path', () => {
      expect(merged).toStrictEqual({
        a: { a: { foo: true, bar: false }, b: 1 },
      });
    });
  });
});
