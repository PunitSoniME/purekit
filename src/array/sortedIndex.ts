import baseSortedIndex from '../helpers/baseSortedIndex';

/**
 * Returns the index at which the specified value should be inserted into the
 * array in order to maintain its sorted order.
 *
 * @template T The type of the array elements.
 * @param {T[]} array The sorted array to search in.
 * @param {T} value The value to search for.
 * @returns {number} The index at which the specified value should be inserted.
 *
 * @example
 * sortedIndex([10, 20, 30, 40], 35); // Returns 3
 */
const sortedIndex = <T>(array: T[], value: T): number =>
	baseSortedIndex(array, value);

export default sortedIndex;
