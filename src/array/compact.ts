/**
 * Creates a new array with all falsey values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The array to compact.
 * @returns {T[]} - Returns the new array of filtered values.
 *
 * @example
 * const arr = [0, 1, false, 2, '', 3];
 * const result = compact(arr);
 * console.log(result);
 * // expected output: [1, 2, 3]
 */

const compact = <T>(array: T[]): T[] => array.filter(x => !!x);
export default compact;
