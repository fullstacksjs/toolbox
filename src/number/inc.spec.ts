import { inc } from './inc';

describe('inc', () => {
  it('should increment by 1 when no step is provided', () => {
    expect(inc(0)).toBe(1);
    expect(inc(5)).toBe(6);
  });

  it('should increment by the given step', () => {
    expect(inc(0, 2)).toBe(2);
    expect(inc(5, 3)).toBe(8);
  });

  it('should handle negative steps correctly', () => {
    expect(inc(5, -2)).toBe(3);
  });
});
