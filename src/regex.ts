/**
 * test regex without worrying about mutation on global regexes
 */
export const testRegex = (regex: RegExp, str: string) => {
  regex.lastIndex = 0;
  const result = regex.test(str);
  regex.lastIndex = 0;
  return result;
};

/**
 * escape regex chars
 * Read more on {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping MDN}
 */
export const escapeRegExp = (s: string) =>
  s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
