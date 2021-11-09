import { testRegex } from '../regex.js';

export const isWordOrWords = (x: string) => testRegex(/(^.+ .)|(^\S+$)/, x);
