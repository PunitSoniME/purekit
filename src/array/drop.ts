/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @template T
 * @param {T[]} array - The array to query.
 * @param {number} [n=1] - The number of elements to drop.
 * @returns {T[]} Returns the slice of `array`.
 */
const drop = <T>(array: T[], n: number = 1): T[] => array.slice(n);
export default drop;
