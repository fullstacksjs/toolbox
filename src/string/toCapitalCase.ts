import { capitalize } from '../internals/capitalize.ts';
import { changeCase } from '../internals/changeCase.ts';

/**
 * Converts the starting letter of every word into an upper case
 * and will leave the remaining letters as lower case ones.
 *
 * @param {string} str any string
 * @returns {string} capital case version fo input
 *
 * @example
 *
 * toCapitalCase('')              // ''
 * toCapitalCase(' ')             // ''
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
 * toCapitalCase('ThisIs-fullstacksjs radio__and--I-loveCoding') // This Is Fullstacksjs Radio And I Love Coding
 */
export function toCapitalCase(str: string): string {
  return changeCase(str, { map: capitalize });
}
