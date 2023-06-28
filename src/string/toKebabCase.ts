import { changeCase } from '../internals/tokenize';

/**
 * Converts any casing to kebab-case
 *
 * @param {string} str
 * @returns {string}
 *
 * @example
 *
 * toKebabCase('')             // ''
 * toKebabCase(' ')            // ''
 * toKebabCase('foo')          // 'foo'
 * toKebabCase('foo bar')      // 'foo-bar'
 * toKebabCase('foo-bar')      // 'foo-bar'
 * toKebabCase('fooBar')       // 'foo-bar'
 * toKebabCase('foo_bar')      // 'foo-bar'
 * toKebabCase('foo bar code') // 'foo-bar-code'
 * toKebabCase('foo-bar-code') // 'foo-bar-code'
 * toKebabCase('fooBarCode')   // 'foo-bar-code'
 * toKebabCase('foo_bar_code') // 'foo-bar-code'
 * toKebabCase('FOO_BAR_CODE') // 'foo-bar-code'
 * toKebabCase('ThisIs-fullstacksjs radio__and--I-loveCoding') // 'this-is-fullstacksjs-radio-and-i-love-coding',
 */
export function toKebabCase(str: string): string {
  return changeCase(str, { delimiter: '-' });
}
