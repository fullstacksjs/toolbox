export interface Options {
  delimiter?: string;
  map?: (part: string, index: number, parts: string[]) => string;
}

const nonWordCharsRegex = /[^A-Z0-9]+/gi;
const wordRegex = /([a-z0-9])([A-Z])|([A-Z])([A-Z][a-z])/g;

export function changeCase(
  input: string,
  { map = s => s.toLowerCase(), delimiter = ' ' }: Options = {},
) {
  return input
    .replace(wordRegex, '$1 $2')
    .replace(nonWordCharsRegex, ' ')
    .trim()
    .split(' ')
    .map(map)
    .join(delimiter);
}
