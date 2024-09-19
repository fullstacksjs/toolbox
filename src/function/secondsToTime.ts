/**
 * Formats seconds into the specified time format.
 *
 * @export
 * @param {Object} params - The input object containing:
 *   @param {number} params.sec - The total number of seconds to be converted.
 *   @param {'hh:mm:ss' | 'hh:mm' | 'mm:ss'} params.format - The desired output format.
 * @returns {string} - The formatted time string.
 *
 * @example
 *
 * secondsToTime({ sec: 3661, format: 'hh:mm:ss' }) // '01:01:01'
 * secondsToTime({ sec: 3661, format: 'hh:mm' })    // '01:01'
 * secondsToTime({ sec: 61, format: 'mm:ss' })      // '01:01'
 */

function formatValue(val: number): string {
  return String(val).padStart(2, '0');
}

function splitTime(sec: number) {
  return {
    hours: Math.trunc(sec / 3600),
    minutes: Math.trunc((sec % 3600) / 60),
    seconds: sec % 60,
  };
}

export function secondsToTime({
  sec,
  format,
}: {
  sec: number;
  format: 'hh:mm:ss' | 'hh:mm' | 'mm:ss';
}): number | string {
  const { hours, minutes, seconds } = splitTime(sec);

  switch (format) {
    case 'hh:mm:ss':
      return `${formatValue(hours)}:${formatValue(minutes)}:${formatValue(seconds)}`;
    case 'hh:mm':
      return `${formatValue(hours)}:${formatValue(minutes)}`;
    case 'mm:ss':
      return `${formatValue(minutes)}:${formatValue(seconds)}`;
    default:
      throw new Error(
        `Invalid format: '${format as string}'. Accepted formats are 'hh:mm:ss', 'hh:mm', or 'mm:ss'.`,
      );
  }
}
