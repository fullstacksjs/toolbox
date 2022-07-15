import { describe, expect, it } from 'vitest';

import type { Nullable } from '../src/nullable';
import { chain } from '../src/nullable';

describe('nullable', () => {
  describe('chain', () => {
    const getNull = () => null;
    const fromNullToNum = (n: null) => 100;
    const f = (x: string) => 2;
    const g = (x: number): Nullable<number[]> => [1, 3];
    const h = (x: number[]) => ({ msg: 2 });
    const j = (x: Record<string, unknown>): Nullable<boolean> => false;
    const k = (x: Nullable<boolean>) => x;
    const l = (x: (number | string)[]) => 50;

    const cases = [
      { x: 'normal', fns: [f], expected: 2 },
      { x: 'normal', fns: [f, g], expected: [1, 3] },
      { x: 'normal', fns: [f, g, h], expected: { msg: 2 } },
      { x: 'normal', fns: [f, g, h, j], expected: false },
      { x: 'normal', fns: [f, g, h, j, k], expected: false },
      { x: 'normal', fns: [f, g, h, j, k, l], expected: 50 },
    ];

    it.each(cases)(
      'should compose %# functions given $x',
      ({ x, fns, expected }) => {
        expect(chain(x, ...(fns as [any]))).toStrictEqual(expected);
      },
    );
    it('should return null if first arg is null', () => {
      expect(chain(null, f, g, h, j, k)).eq(null);
    });

    it('should return null if any composed function returned null', () => {
      expect(chain(null, f, g, h, j, k)).eq(null);
    });

    it('should return null if any composed function returned null', () => {
      expect(chain('normal', f, g, getNull, h, j)).eq(null);
    });

    it('should return null if any composed function returned null and should stop calling the next function', () => {
      expect(chain('normal', f, g, getNull, fromNullToNum)).eq(null);
    });
  });
});
