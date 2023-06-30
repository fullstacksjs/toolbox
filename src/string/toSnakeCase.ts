import { changeCase } from '../internals/changeCase.ts';

/**
 * Converts any casing to snake_case
 *
 * @param {string} str any string
 * @returns {string} snake_case version of the input
 *
 * @example
 *
 * toSnakeCase('')             // ''
 * toSnakeCase(' ')            // ''
 * toSnakeCase('foo')          // 'foo'
 * toSnakeCase('foo bar')      // 'foo_bar'
 * toSnakeCase('foo-bar')      // 'foo_bar'
 * toSnakeCase('fooBar')       // 'foo_bar'
 * toSnakeCase('foo_bar')      // 'foo_bar'
 * toSnakeCase('foo bar code') // 'foo_bar_code'
 * toSnakeCase('foo-bar-code') // 'foo_bar_code'
 * toSnakeCase('fooBarCode')   // 'foo_bar_code'
 * toSnakeCase('foo_bar_code') // 'foo_bar_code'
 * toSnakeCase('FOO_BAR_CODE') // 'foo_bar_code'
 * toSnakeCase('ThisIs-fullstacksjs radio__and--I-loveCoding') // 'this_is_fullstacksjs_radio_and_i_love_coding'
 */
export function toSnakeCase(str: string): string {
  return changeCase(str, { delimiter: '_' });
}
