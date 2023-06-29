/**
 * Escapes regex chars
 *
 * If you need to use any of the special characters literally (actually searching for a "*", for instance),
 * you must escape it by putting a backslash in front of it. For instance, to search for "a" followed by "*" followed by "b",
 * you'd use /a\*b/ — the backslash "escapes" the "*", making it literal instead of special.
 * Read more on {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping MDN}
 *
 * @param {string} s string
 * @returns {string} escaped string
 *
 * @example
 *
 * new RegExp(escapeRegex('^[](){}$')).test('^[](){}$') // true
 * new RegExp(escapeRegex('^a$')).test('a')             // false
 */
export function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
