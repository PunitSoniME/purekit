/**
 * Returns the index of the last occurrence of a specified value in a sorted array.
 * Uses a binary search algorithm for efficiency.
 *
 * @template T
 * @param {T[]} array - The sorted array to search in.
 * @param {T} value - The value to search for.
 * @returns {number} - The index of the last occurrence of the value, or -1 if not found.
 *
 * @example
 * const arr = [1, 2, 3, 4, 4, 4, 5, 6];
 *
 * sortedLastIndexOf(arr, 4); // returns 5
 * sortedLastIndexOf(arr, 7); // returns -1
 */
const sortedLastIndexOf = <T>(array: T[], value: T): number => {
	const index = [...array].reverse().indexOf(value);
	return index >= 0 ? array.length - 1 - index : -1;
};
export default sortedLastIndexOf;
