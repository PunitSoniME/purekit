/**
 * Returns the index of the first occurrence of the specified value in a sorted array, or -1 if not found.
 *
 * @template T
 * @param {T[]} array - The sorted input array to search.
 * @param {T} value - The value to search for.
 * @returns {number} - The index of the first occurrence of the value, or -1 if not found.
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * console.log(sortedIndexOf(arr, 3)); // => 2
 * console.log(sortedIndexOf(arr, 6)); // => -1
 */
const sortedIndexOf = <T>(array: T[], value: T): number =>
	[...array].sort().indexOf(value);

export default sortedIndexOf;
