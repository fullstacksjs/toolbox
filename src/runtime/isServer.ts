/**
 * Returns true when runtime is a server-side
 *
 * @returns {boolean} whether runtime is server or not
 *
 * @example
 *
 * if (isServer()) console.log('This runs in server environment');
 * if (!isServer()) alert('I will run in the client only');
 */
export function isServer(): boolean {
  return globalThis.constructor.name !== 'Window' || 'Deno' in globalThis;
}
