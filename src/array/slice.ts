/**
 * Returns a new array containing the elements of the original array starting from `start` up to, but not including, `end`.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The original array.
 * @param {number} [start=0] - The start index (inclusive). Defaults to 0.
 * @param {number} [end=array.length] - The end index (exclusive). Defaults to the length of the array.
 * @returns {T[]} - A new array containing the elements from the original array between the specified start and end indexes.
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 *
 * slice(arr);         // [1, 2, 3, 4, 5]
 * slice(arr, 2);      // [3, 4, 5]
 * slice(arr, 2, 4);   // [3, 4]
 */
const slice = <T>(
	array: T[],
	start: number = 0,
	end: number = array.length
): T[] => array.slice(start, end);
export default slice;
