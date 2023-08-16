/**
 * Returns true when runtime is Bun
 *
 * @returns {boolean} whether runtime is Bun or not
 *
 * @example
 *
 * if (isBun()) console.log(Bun.version);
 * if (!isBun()) console.log('Node, Deno, or browser?');
 */
export function isBun(): boolean {
  return 'Bun' in globalThis;
}
