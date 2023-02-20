/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The array to query.
 * @param {number} [n=1] - The number of elements to drop.
 *
 * @returns {T[]} - Returns the slice of `array`.
 *
 * @example
 * drop([1, 2, 3, 4]); // returns [2, 3, 4]
 * drop([1, 2, 3, 4], 2); // returns [3, 4]
 */
const drop = <T>(array: T[], n: number = 1): T[] => array.slice(n);
export default drop;
