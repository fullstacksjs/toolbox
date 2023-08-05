/**
 * Return a function which will only call {@link cb} when a delay is passed after its last call
 * @example
 * function test(id: number) {
 *    console.log(id);
 * }
 * const debounced = debounce(test, 1000);
 * debounced(1);
 * debounced(2);
 * debounced(3);
 * debounced(4);
 * debounced(5);
 * // will log 5 after 1 second
 * @param {Function} cb function to be executed after the delay
 * @param {number} delay delay in milliseconds
 * @param {boolean} immediate if *true*, will execute {@link cb} immediately
 * if it hasn't been called in the last {@link delay} milliseconds. Default is *false*
 *
 * #### Example
 * ```ts
 * function test(id: number) {
 *    console.log(id);
 * }
 * const debounced = debounce(test, 1000, true);
 * debounced(1); // immediately logs 1
 * debounced(2);
 * debounced(3);
 * debounced(4);
 * debounced(5); // will log 5 after 1 second
 * ```
 *
 * @returns {Function} sdf
 *
 */
export function debounce<F extends (...args: any[]) => any>(
  cb: F,
  delay: number,
  immediate: boolean = false,
): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout> | null;
  return ((...args: any[]) => {
    if (timeout) clearTimeout(timeout);
    const immediateCall = immediate && !timeout;

    if (immediateCall) cb(...args);

    timeout = setTimeout(() => {
      timeout = null;
      if (!immediateCall) cb(...args);
    }, delay);
  }) as (...args: Parameters<F>) => void;
}
