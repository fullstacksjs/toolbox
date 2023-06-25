import { testRegex } from '../regex/regex.js';

export const isWordOrWords = (x: string) => testRegex(/(^.+ .)|(^\S+$)/, x);
