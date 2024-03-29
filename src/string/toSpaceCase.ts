import { changeCase } from '../internals/changeCase.ts';

/**
 * Separates words by space and makes them lowercase.
 *
 * @export
 * @param {string} str any string
 * @returns {string} space separated version of the input
 *
 * @example
 *
 * toSpaceCase('')               // ''
 * toSpaceCase(' ')              // ''
 * toSpaceCase('foo')            // 'foo'
 * toSpaceCase('foo bar')        // 'foo bar'
 * toSpaceCase('foo-bar')        // 'foo bar'
 * toSpaceCase('fooBar')         // 'foo bar'
 * toSpaceCase('foo_bar')        // 'foo bar'
 * toSpaceCase('foo bar code')   // 'foo bar code'
 * toSpaceCase('foo-bar-code')   // 'foo bar code'
 * toSpaceCase('fooBarCode')     // 'foo bar code'
 * toSpaceCase('foo_bar_code')   // 'foo bar code'
 * toSpaceCase('FOO_BAR_CODE')   // 'foo bar code'
 * toSpaceCase('FOO BAR CODE')   // 'foo bar code'
 * toSpaceCase('foo_ -BaRC ode') // 'foo ba rc ode'
 * toSpaceCase('ThisIs-fullstacksjs radio__and--I-loveCoding') // 'this is fullstacksjs radio and i love coding'
 */
export function toSpaceCase(str: string): string {
  return changeCase(str, { delimiter: ' ' });
}
