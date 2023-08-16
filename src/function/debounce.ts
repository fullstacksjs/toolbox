/**
 * Return a function which will only call {@link cb} when a delay is passed after its last call
 *
 * @template {F} type of the function being debounced.
 * @param {Object} options debounce options
 * @param {F} cb function to be executed after the delay
 * @returns {Function} a wrapper function
 *
 * @example
 *
 * function log(id: number) {
 *    console.log(id);
 * }
 *
 * const debounced = debounce({ delay: 1000 } , log);
 *
 * debounced(1); // ignored
 * debounced(2); // ignored
 * debounced(3); // ignored
 *
 * setTimeout(function () {
 *  throttled(4); // 4
 *  throttled(5); // ignored
 * }, 1000)
 *
 * const debounced = debounce({ delay: 1000, immediate: true }, log);
 *
 * debounced(1); // 1
 * debounced(2); // ignored
 * debounced(3); // ignored
 *
 * setTimeout(function () {
 *   throttled(4); // 4
 *   throttled(5); // ignored
 * }, 1000)
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
