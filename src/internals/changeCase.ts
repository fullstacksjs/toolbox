export interface Options {
  delimiter?: string;
  map?: (part: string, index: number, parts: string[]) => string;
}

const nonWordCharsRegex = /[^0-9a-z]+/gi;

const wordRegex = /([0-9a-z])([A-Z])|([A-Z]+)([A-Z][a-z])/g;

export function changeCase(
  input: string,
  { map = s => s.toLowerCase(), delimiter = ' ' }: Options = {},
) {
  return input
    .replace(wordRegex, (match, p1, p2, p3, p4) => {
      /* eslint-disable @typescript-eslint/restrict-template-expressions */
      if (p1 && p2) return `${p1} ${p2}`;
      if (p3 && p4) return `${p3} ${p4}`;
      /* eslint-enable @typescript-eslint/restrict-template-expressions */

      return match;
    })
    .replace(nonWordCharsRegex, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(map)
    .join(delimiter);
}
