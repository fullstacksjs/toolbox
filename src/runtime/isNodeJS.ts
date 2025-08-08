/**
 * Returns true when runtime is NodeJS
 *
 * @returns {boolean} whether runtime is NodeJS or not
 *
 * @example
 *
 * if (isNodeJS()) global.process.env;
 * if (!isNodeJS()) console.log('Deno, bun, or browser?');
 */
export function isNodeJS(): boolean {
  return (
    !('Bun' in globalThis) &&
    'process' in globalThis &&
    'versions' in globalThis.process &&
    !!global.process.versions.node
  );
}
