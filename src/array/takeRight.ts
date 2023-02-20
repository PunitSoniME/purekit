/**
 * Creates a new array with the last `n` elements of `array`.
 * 
 * @param {Array} array - The input array.
 * @param {number} [length=1] - The number of elements to take.
 * @returns {Array} Returns the new array.
 *
 * @example
 * takeRight([1, 2, 3, 4, 5], 3);
 * // => [3, 4, 5]
 *
 * takeRight([1, 2, 3, 4, 5]);
 * // => [5]
 */
const takeRight = <T>(array: T[], length: number = 1): T[] =>
	[...array].splice(-length, length);
export default takeRight;
