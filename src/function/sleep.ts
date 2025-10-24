/// <reference lib="DOM" />

/**
 * Returns a promise that resolves after a certain milliseconds.
 *
 * @param {number} ms timeout in milliseconds
 * @returns {Promise<void>} a Promise that resolves after timeout
 *
 * @example
 *
 * sleep(1000).then(() => console.log("Hi")) // Logs hi after 1 second
 * await sleep(1000); console.log("Hi")      // Logs hi after 1 second
 */
export function sleep(ms: number): Promise<void> {
  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), ms);
  });
}
