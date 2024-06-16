/**
 * Return whether an array is empty or not
 *
 * @param {unknown[]} x any value
 * @returns {boolean} true when the value length is zero
 *
 * @example
 *
 * isEmpty([])            // true
 * isEmpty([1])           // false
 * isEmpty([undefined])   // false
 * isEmpty([null])        // false
 * isEmpty([,])           // false
 * isEmpty([, null])      // false
 * isEmpty([, undefined]) // false
 */
export function isEmpty(x: unknown[] | readonly unknown[]): boolean {
  return x.length === 0;
}
