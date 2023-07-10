/**
 * Returns true when runtime is a browser
 *
 * @returns {boolean} whether runtime is browser or not
 *
 * @example
 *
 * if (isBrowser()) alert('I will run in the client only');
 * if (!isBrowser()) console.log('This runs in server environment');
 */
export function isBrowser(): boolean {
  return globalThis.constructor.name === 'Window' && !('Deno' in globalThis);
}
