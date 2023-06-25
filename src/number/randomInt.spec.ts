import { describe, expect, it } from 'vitest';
import { randomInt } from './randomInt';

describe('randomInt', () => {
  it('should return an integer between the range of min and max', () => {
    for (let i = 0; i < 100; i++) {
      const number = randomInt(1, 2);

      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThan(2);
    }
  });
});
