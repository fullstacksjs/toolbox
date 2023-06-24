import { testRegex } from '../regex.ts';

export const isWordOrWords = (x: string) => testRegex(/(^.+ .)|(^\S+$)/, x);
