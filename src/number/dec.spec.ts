import { dec } from './dec';

describe('dec', () => {
  it('should decrement by 1', () => {
    expect(dec(2)).toBe(1);
    expect(dec(5)).toBe(4);
  });
});
