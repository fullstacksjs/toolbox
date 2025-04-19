import { randomBool } from './randomBool';

describe('randomBool', () => {
  it('should return an boolean', () => {
    for (let i = 0; i < 100; i++) {
      const boolean = randomBool();

      expect(boolean).toBeTypeOf('boolean');
    }
  });

  it('should select the first item', () => {
    let i = 0;

    for (; i < 100; i++) if (randomBool()) break;

    expect(i).toBeLessThan(100);
  });

  it('should select the last item', () => {
    let i = 0;

    for (; i < 100; i++) if (!randomBool()) break;

    expect(i).toBeLessThan(100);
  });
});
