import { testRegex } from '../regex/testRegex.js';

export function isWordOrWords(x: string) {
  return testRegex(/(^.+ .)|(^\S+$)/, x);
}
