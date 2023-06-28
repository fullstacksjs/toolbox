import { tokenize } from '../internals/tokenize';

/**
 * Separates words by space and makes them lowercase.
 *
 * @export
 * @param {string} str
 * @returns {string}
 *
 * @example
 *
 * toSpaceCase('')               // ''
 * toSpaceCase(' ')              // ' '
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
 * toSpaceCase('foo_ -BaRC ode') // 'foo_ -BaRC ode'
 */
export const toSpaceCase = tokenize;
