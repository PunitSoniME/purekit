/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @template T
 * @param {T[]} array - The array to inspect.
 * @param {number} [n=1] - The number of elements to drop.
 * @returns {T[]} - Returns the slice of `array`.
 */
const dropRight = <T>(array: T[], n: number = 1): T[] =>
	array.slice(0, -n || array.length);
export default dropRight;
