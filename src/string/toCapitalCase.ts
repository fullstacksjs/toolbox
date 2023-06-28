import { hasInvalidCasing, tokenize } from '../internals/tokenize';

/**
 * Converts the starting letter of every word into an upper case
 * and will leave the remaining letters as lower case ones.
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @example
 *
 * toCapitalCase('')              // ''
 * toCapitalCase(' ')             // ' '
 * toCapitalCase('foo')           // 'Foo'
 * toCapitalCase('foo bar')       // 'Foo Bar'
 * toCapitalCase('foo-bar')       // 'Foo Bar'
 * toCapitalCase('fooBar')        // 'Foo Bar'
 * toCapitalCase('foo_bar')       // 'Foo Bar'
 * toCapitalCase('foo bar code')  // 'Foo Bar Code'
 * toCapitalCase('foo-bar-code')  // 'Foo Bar Code'
 * toCapitalCase('fooBarCode')    // 'Foo Bar Code'
 * toCapitalCase('foo_bar_code')  // 'Foo Bar Code'
 * toCapitalCase('FOO_BAR_CODE')  // 'Foo Bar Code'
 */
export function toCapitalCase(str: string): string {
  if (hasInvalidCasing(str)) return str;

  return tokenize(str).replace(/\b\w/g, match => match.toUpperCase());
}
