/**
 * Return a function which will only call {@link cb} when a delay is passed after its last call
 * // will log 5 after 1 second
 * @param {Object} options debounce options
 * @param {Function} cb function to be executed after the delay
 * @returns {Function} a wrapper function
 *
 * @example
 * function test(id: number) {
 *    console.log(id);
 * }
 * const debounced = debounce({ delay: 1000 } , test);
 * debounced(1);
 * debounced(2);
 * debounced(3);
 * debounced(4);
 * debounced(5);
 */
export function debounce<F extends (...args: any[]) => any>(
  options: {
    delay: number;
    immediate?: boolean;
  },
  cb: F,
): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout> | null;

  return (...args: Parameters<F>) => {
    if (timeout) clearTimeout(timeout);
    const immediateCall = options.immediate && !timeout;

    if (immediateCall) cb(...args);

    timeout = setTimeout(() => {
      timeout = null;
      if (!immediateCall) cb(...args);
    }, options.delay);
  };
}
