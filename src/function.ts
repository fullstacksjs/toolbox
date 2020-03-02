/**
 * noop ¯\_(ツ)_/¯
 * @returns {void}
 */
export const noop = (): void => undefined;

/**
 * call ginen functions with an args
 * @param {function[]} fns function to call
 * @returns {function} function that takes arguments
 */
export const callAll = (...fns: Function[]) => (...args: any) =>
  fns.forEach(fn => typeof fn === 'function' && fn(...args));
