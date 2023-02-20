/**
 * Creates a slice of an array with `n` elements dropped from the end.
 *
 * @since 1.0.0
 *
 * @param {Array} array - The array to query.
 * @param {number} [n=1] - The number of elements to drop from the end.
 *
 * @returns {Array} - Returns the slice of `array`.
 *
 * @example
 *
 * dropRight([1, 2, 3, 4, 5], 2);
 * // => [1, 2, 3]
 *
 * dropRight([1, 2, 3, 4, 5]);
 * // => [1, 2, 3, 4]
 */

const dropRight = <T>(array: T[], n: number = 1): T[] =>
	array.slice(0, -n || array.length);
export default dropRight;
