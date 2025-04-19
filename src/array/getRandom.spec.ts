import { getRandom } from './getRandom.ts';

describe('getRandom', () => {
  it('should return undefined when given empty array', () => {
    expect(getRandom([])).toBeUndefined();
  });

  it('should return first element for array with one element', () => {
    expect(getRandom([1])).toBe(1);
  });

  it('should return one random element of array', () => {
    expect([1, 2, 3]).toContain(getRandom([1, 2, 3]));
  });

  it('should be able to select the first item', () => {
    let i = 0;

    for (; i < 100; i++) if (getRandom([0, 1]) === 0) break;

    expect(i).toBeLessThan(100);
  });

  it('should be able to select the last item', () => {
    let i = 0;

    for (; i < 100; i++) if (getRandom([0, 1]) === 1) break;

    expect(i).toBeLessThan(100);
  });

  it('should not select out of range', () => {
    let i = 0;

    for (; i < 100; i++) {
      const rng = getRandom([0, 1]);
      if (rng < 0 || rng > 1) break;
    }

    expect(i).toBe(100);
  });
});
