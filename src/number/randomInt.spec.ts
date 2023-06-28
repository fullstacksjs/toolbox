import { describe, expect, it } from 'vitest';
import { randomInt } from './randomInt';

describe('randomInt', () => {
  it('should return an integer between the range of min and max', () => {
    for (let i = 0; i < 100; i++) {
      const number = randomInt(1, 2);

      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThan(3);
    }
  });

  it('should select the first item', () => {
    let i = 0;

    for (; i < 100; i++) if (randomInt(0, 1) === 0) break;

    expect(i).toBeLessThan(100);
  });

  it('should select the last item', () => {
    let i = 0;

    for (; i < 100; i++) if (randomInt(0, 1) === 1) break;

    expect(i).toBeLessThan(100);
  });
});
