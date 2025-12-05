/**
 * Creates a function that is restricted to invoking the given function once.
 * Repeat calls to the function return the value of the first invocation.
 *
 * @template {T} type of the function being wrapped.
 * @param {T} fn The function to restrict.
 * @returns {T} Returns the new restricted function.
 *
 * @example
 *
 * const initialize = once(() => {
 *   console.log('Initializing...');
 *   return { initialized: true };
 * });
 *
 * initialize(); // Logs: 'Initializing...' and returns { initialized: true }
 * initialize(); // Returns { initialized: true } without logging
 * initialize(); // Returns { initialized: true } without logging
 *
 * @example
 *
 * const greet = once((name: string) => {
 *   console.log(`Hello, ${name}!`);
 *   return `Welcome ${name}`;
 * });
 *
 * greet('Alice'); // Logs: 'Hello, Alice!' and returns 'Welcome Alice'
 * greet('Bob');   // Returns 'Welcome Alice' (uses cached result)
 */
export function once<T extends (...args: any[]) => any>(fn: T): T {
  let called = false;
  let result: ReturnType<T>;

  return function onceWrapper(
    this: unknown,
    ...args: Parameters<T>
  ): ReturnType<T> {
    if (!called) {
      called = true;
      result = fn.apply(this, args) as ReturnType<T>;
      return result;
    }
    return result;
  } as T;
}
