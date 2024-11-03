/**
 * Pads a number with leading zeros.
 *
 * @param {number} value - The number to pad.
 * @returns {string} - The padded number as a string.
 */

function formatToTwoDigits(value: number): string {
  return String(value).padStart(2, '0');
}

/**
 * Splits a duration in seconds into hours, minutes, and seconds.
 *
 * @param {number} durationInSeconds - The total seconds.
 * @returns {{ hours: number, minutes: number, seconds: number }} - The time components.
 */

function splitTime(durationInSeconds: number): {
  hours: number;
  minutes: number;
  seconds: number;
} {
  return {
    hours: Math.trunc(durationInSeconds / 3600),
    minutes: Math.trunc((durationInSeconds % 3600) / 60),
    seconds: durationInSeconds % 60,
  };
}

/**
 * Formats seconds into the specified time format.
 *
 * @param {number} durationInSeconds - The total number of seconds to be converted.
 * @param {{ format: 'hh:mm:ss' | 'hh:mm' | 'mm:ss' }} options - The options for formatting.
 * @returns {string} - The formatted time string.
 *
 * @example
 *
 * formatSeconds(3661, { format: 'hh:mm:ss' }) // '01:01:01'
 * formatSeconds(3661, { format: 'hh:mm' })    // '01:01'
 * formatSeconds(61, { format: 'mm:ss' })      // '01:01'
 */

export function formatSeconds(
  durationInSeconds: number,
  {
    format,
  }: {
    format: 'hh:mm:ss' | 'hh:mm' | 'mm:ss';
  },
): number | string {
  const { hours, minutes, seconds } = splitTime(durationInSeconds);

  switch (format) {
    case 'hh:mm:ss':
      return `${formatToTwoDigits(hours)}:${formatToTwoDigits(minutes)}:${formatToTwoDigits(seconds)}`;
    case 'hh:mm':
      return `${formatToTwoDigits(hours)}:${formatToTwoDigits(minutes)}`;
    case 'mm:ss':
      return `${formatToTwoDigits(minutes)}:${formatToTwoDigits(seconds)}`;
    default:
      throw new Error(
        `Invalid format: '${format as string}'. Accepted formats are 'hh:mm:ss', 'hh:mm', or 'mm:ss'.`,
      );
  }
}
