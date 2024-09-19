import { secondsToTime } from './secondsToTime.ts';

describe('secondToTime', () => {
  it('should return zero when pass 0 seconds', () => {
    const format = 'mm:ss';
    const sec = 0;

    expect(secondsToTime({ sec, format })).toBe('00:00');
  });

  it.todo('should throw an error when pass invalid format', () => {
    const inValidFormat = 'ss:ss:ss';
    const sec = 120;

    // @ts-expect-error : not assignable type, ignored in order to have a test
    expect(secondsToTime({ sec, format: inValidFormat })).toThrow();
  });

  it.each([
    [{ sec: 3661, format: 'hh:mm:ss' as const }, '01:01:01'],
    [{ sec: 3661, format: 'hh:mm' as const }, '01:01'],
    [{ sec: 61, format: 'mm:ss' as const }, '01:01'],
  ])('should format seconds to %s for input %o', (input, expected) => {
    expect(secondsToTime(input)).toBe(expected);
  });
});
