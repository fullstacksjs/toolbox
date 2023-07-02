import { testRegex } from '../regex/testRegex.ts';

export function isWordOrWords(x: string) {
  return testRegex(/(^.+ .)|(^\S+$)/, x);
}
