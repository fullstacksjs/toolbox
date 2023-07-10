/**
 * Returns true when runtime is Deno
 *
 * @returns {boolean} whether runtime is Deno or not
 *
 * @example
 *
 * if (isDeno()) Deno.cwd();
 * if (!isDeno()) console.log('NodeJS, bun, or browser?');
 */
export function isDeno(): boolean {
  return 'Deno' in globalThis;
}
