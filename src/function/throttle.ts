/**
 * Throttles a function to only be executed once per delay.
 *
 * @template F - The type of the function being throttled.
 * @param {Object} options - The throttling options.
 * @param {F} cb - The function to throttle.
 * @returns {Funcion} - The throttled function.
 *
 * @example
 *
 * // callback function
 * function test(id: number) {
 *   console.log(id);
 * }
 *
 * // Logs id at most once per 100ms
 * const throttled = throttle({ delay: 100 }, test);
 *
 * setTimeout(function () {
 *   throttled(0); // 0
 *   throttled(1); // ignored
 * }, 0);
 *
 * setTimeout(function () {
 *  throttled(2); // ignored
 *  throttled(3); // ignored
 * }, 50);
 *
 * setTimeout(function () {
 *  throttled(4); // 4
 *  throttled(5); // ignored
 * }, 150)
 */
export function throttle<F extends (...args: any[]) => any>(
  options: {
    delay: number;
  },
  cb: F,
): (...args: Parameters<F>) => void {
  const { delay } = options;
  let shouldExecute = true;
  return (...args) => {
    if (!shouldExecute) return;
    cb(...args);
    shouldExecute = false;
    setTimeout(() => {
      shouldExecute = true;
    }, delay);
  };
}
