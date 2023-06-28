import { capitalize } from '../internals/capitalize';
import { changeCase } from '../internals/changeCase';

export function camelCaseTransform(input: string, index: number) {
  return index === 0 ? input.toLowerCase() : capitalize(input);
}

/**
 * Converts any casing to camelCase
 *
 * @param {string} str any string
 * @returns {string} camelCase version of input
 *
 * @example
 *
 * toCamelCase('')             // ''
 * toCamelCase(' ')            // ''
 * toCamelCase('foo')          // 'foo'
 * toCamelCase('foo bar')      // 'fooBar'
 * toCamelCase('foo-bar')      // 'fooBar'
 * toCamelCase('fooBar')       // 'fooBar'
 * toCamelCase('foo_bar')      // 'fooBar'
 * toCamelCase('foo bar code') // 'fooBarCode'
 * toCamelCase('foo-bar-code') // 'fooBarCode'
 * toCamelCase('fooBarCode')   // 'fooBarCode'
 * toCamelCase('foo_bar_code') // 'fooBarCode'
 * toCamelCase('FOO_BAR_CODE') // 'fooBarCode'
 * toCamelCase('ThisIs-fullstacksjs radio__and--I-loveCoding') // 'thisIsFullstacksjsRadioAndILoveCoding'
 */
export function toCamelCase(str: string): string {
  return changeCase(str, { map: camelCaseTransform, delimiter: '' });
}
