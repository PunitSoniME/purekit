/**
 * Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.
 *
 * @since 1.0.0
 *
 * @param {T[]} array - The array to query.
 * @param {number} [index=0] - The index of the element to return.
 *
 * @returns {T | undefined} - Returns the nth element of `array`.
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * console.log(nth(arr));
 * // => 1
 *
 * console.log(nth(arr, 2));
 * // => 3
 *
 * console.log(nth(arr, -1));
 * // => 5
 */
const nth = <T>(array: T[], index: number = 0): T | undefined =>
	index >= 0 ? array[index] : array[array.length + index];
// array.slice(index, index + 1)[0];

export default nth;
