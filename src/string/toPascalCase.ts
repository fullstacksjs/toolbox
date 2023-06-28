import { capitalize } from '../internals/capitalize';
import { changeCase } from '../internals/changeCase';

/**
 * Converts any casing to PascalCase
 *
 * @param {string} str any string
 * @returns {string} PascalCase version of the input
 *
 * @example
 *
 * toPascalCase('')              '// '
 * toPascalCase(' ')             '// '
 * toPascalCase('foo')            // 'Foo'
 * toPascalCase('foo bar')        // 'FooBar'
 * toPascalCase('foo-bar')        // 'FooBar'
 * toPascalCase('fooBar')         // 'FooBar'
 * toPascalCase('foo_bar')        // 'FooBar'
 * toPascalCase('foo bar code')   // 'FooBarCode'
 * toPascalCase('foo-bar-code')   // 'FooBarCode'
 * toPascalCase('fooBarCode')     // 'FooBarCode'
 * toPascalCase('foo_bar_code')   // 'FooBarCode'
 * toPascalCase('FOO_BAR_CODE')   // 'FooBarCode'
 * toPascalCase('foo_ -BaRC ode') // 'FooBaRcOde'
 * toPascalCase('ThisIs-fullstacksjs radio__and--I-loveCoding') // 'ThisIsFullstacksjsRadioAndILoveCoding'
 */
export function toPascalCase(str: string): string {
  return changeCase(str, { delimiter: '', map: capitalize });
}
