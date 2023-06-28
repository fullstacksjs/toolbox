import { testRegex } from '../regex/regex.js';

export function isWordOrWords(x: string) {
  return testRegex(/(^.+ .)|(^\S+$)/, x);
}
