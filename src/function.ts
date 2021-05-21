import { isFunction } from './guards';

/**
 * noop ¯\_(ツ)_/¯
 */
export const noop = (): void => undefined;

/**
 * call given functions with an args safely
 */
export const callAll =
  (...fns: Function[]) =>
  (...args: any) =>
    fns.forEach(fn => {
      if (isFunction(fn)) fn(...args);
    });
