const hasSpaceRegex = /\s/;
const hasSeparatorRegex = /(_|-|\.|:)/;
const hasCamelRegex = /([a-z][A-Z]|[A-Z][a-z])/;
const camelSplitterRegex = /(.)([A-Z]+)/g;
const separatorSplitterRegex = /[\W_]+(.|$)/g;

const unSeparate = (str: string) =>
  str.replace(separatorSplitterRegex, (_, next) => (next ? ` ${next}` : ''));

const unCamelize = (str: string) =>
  str.replace(
    camelSplitterRegex,
    (_, previous, uppers) =>
      `${previous} ${uppers.toLowerCase().split('').join(' ')}`,
  );

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 * @internal
 * @param {string} str
 * @return {string}
 */
export const tokenize = (str: string): string => {
  if (hasSpaceRegex.test(str)) return str.toLowerCase();
  if (hasSeparatorRegex.test(str))
    return (unSeparate(str) || str).toLowerCase();
  if (hasCamelRegex.test(str)) return unCamelize(str).toLowerCase();
  return str.toLowerCase();
};
