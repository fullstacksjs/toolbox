/**
 * Gets some nullable arrays and returns concatenation of existing ones.
 *
 * @template T
 * @param {...T} mas arrays or nulls
 * @returns {T[]} concatenation of all provided arrays
 *
 * @examples
 *
 * concatArrays(undefined)                       // []
 * concatArrays(null, undefined)                 // []
 * concatArrays([])                              // []
 * concatArrays(undefined, [1, 2], null)         // [1, 2]
 * concatArrays(undefined, [1, 2], null, [3, 4]) // [1, 2, 3, 4]
 * concatArrays([1, 2], ['3', '4'])              // [1, 2, '3', '4']
 * concatArrays([1, 2])                          // [1, 2]
 */
export function concatArrays<T extends any[]>(
  ...mas: T
): Exclude<T[number], null | undefined>[number][] {
  let result: unknown[] = [];

  for (let i = 0; i < mas.length; i++) {
    if (mas[i]) result = result.concat(mas[i]);
  }

  return result;
}
