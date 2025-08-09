import { formatSeconds } from './formatSeconds.ts';

describe('secondToTime', () => {
  it('should return zero when pass 0 seconds', () => {
    const format = 'mm:ss';
    const sec = 0;

    expect(formatSeconds(sec, { format })).toBe('00:00');
  });

  it('should throw an error when pass invalid format', () => {
    const inValidFormat = 'ss:ss:ss';
    const sec = 120;

    // @ts-expect-error : not assignable type, ignored in order to have a test
    expect(() => formatSeconds(sec, { format: inValidFormat })).toThrow(
      "Invalid format: 'ss:ss:ss'. Accepted formats are 'hh:mm:ss', 'hh:mm', or 'mm:ss'",
    );
  });

  it.each([
    [3661, { format: 'hh:mm:ss' }, '01:01:01'],
    [3661, { format: 'hh:mm' }, '01:01'],
    [61, { format: 'mm:ss' }, '01:01'],
    [120.5, { format: 'hh:mm:ss' }, '00:02:00'],
    [120.5, { format: 'hh:mm' }, '00:02'],
    [120.5, { format: 'mm:ss' }, '02:00'],
    [61, { format: '(hh):mm:ss' }, '01:01'],
    [3661.5, { format: '(hh):mm:ss' }, '01:01:01'],
  ] satisfies [
    Parameters<typeof formatSeconds>[0],
    Parameters<typeof formatSeconds>[1],
    ReturnType<typeof formatSeconds>,
  ][])(
    'should format seconds to %s for input %o',
    (durationInSeconds, options, expected) => {
      expect(formatSeconds(durationInSeconds, options)).toBe(expected);
    },
  );
});
