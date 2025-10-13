import { pipe } from './pipe';

describe('pipe', () => {
  it('applies functions sequentially', () => {
    const result = pipe(
      2,
      (x: number) => x + 2,
      (x: number) => x * 3,
    );
    expect(result).toBe(12); // (2+2)*3
  });
});
