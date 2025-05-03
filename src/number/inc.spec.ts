import { inc } from './inc';

describe('inc', () => {
  it('should increment by 1', () => {
    expect(inc(0)).toBe(1);
    expect(inc(5)).toBe(6);
  });
});
