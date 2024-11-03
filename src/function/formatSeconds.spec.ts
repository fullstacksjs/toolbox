import { formatSeconds } from './formatSeconds.ts';

describe('secondToTime', () => {
  it('should return zero when pass 0 seconds', () => {
    const format = 'mm:ss';
    const sec = 0;

    expect(formatSeconds(sec, { format })).toBe('00:00');
  });

  it.todo('should throw an error when pass invalid format', () => {
    const inValidFormat = 'ss:ss:ss';
    const sec = 120;

    // @ts-expect-error : not assignable type, ignored in order to have a test
    expect(formatSeconds({ sec, format: inValidFormat })).toThrow();
  });

  it.each([
    [3661, { format: 'hh:mm:ss' as const }, '01:01:01'],
    [3661, { format: 'hh:mm' as const }, '01:01'],
    [61, { format: 'mm:ss' as const }, '01:01'],
  ])(
    'should format seconds to %s for input %o',
    (durationInSeconds, options, expected) => {
      expect(formatSeconds(durationInSeconds, options)).toBe(expected);
    },
  );
});
