/**
 * Returns the minimum value in an array of numbers.
 *
 * @since 1.0.0
 *
 * @param {number[]} collection - The array of numbers to search for the minimum value.
 * @returns {number|undefined} - The minimum value in the array, or undefined if the array is empty.
 *
 * @example
 *
 * min([1, 2, 3]);
 * // => 1
 *
 * min([]);
 * // => undefined
 */
const min = (collection: number[]): number | undefined => {
	return collection.length === 0 ? undefined : Math.min(...collection);
};

export default min;
