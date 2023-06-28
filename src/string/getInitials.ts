import { isWordOrWords } from '../internals/isWordOrWords';

/**
 * Returns initial characters of spaces separated words
 *
 * @param {string} name - value to get initials from
 * @param {string} [fallback='?'] - return value if operation failed
 * @returns {string} initials chars of a words || fallback
 *
 * @example
 * getInitials('')                  // '?'
 * getInitials(' ', 'FB')           // 'FB'
 * getInitials('frontend')          // 'F'
 * getInitials('frontend monsters') // 'FM'
 * getInitials('2')                 // '2'
 * getInitials('1 2 3 4')           // '1234'
 * getInitials('x @# % * ))__() 1') // 'X@%*)1'
 * getInitials('frontend monster rides a dinosaur in office') // 'FMRADIO'
 */
export function getInitials(name: string, fallback: string = '?'): string {
  if (!isWordOrWords(name.trim())) return fallback;

  return name
    .replace(/\s+/g, ' ')
    .split(' ')
    .map(v => (v == null || v === '' ? '' : v.slice(0, 1).toUpperCase()))
    .join('');
}
