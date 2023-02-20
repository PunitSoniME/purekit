/**
 * Returns the index of the first occurrence of a value in an array, or -1 if not found.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The input array to search.
 * @param {T} value - The value to search for.
 * @param {number} [startIndex=0] - The index to start the search from.
 * @returns {number} - The index of the first occurrence of the value, or -1 if not found.
 *
 * @example
 *
 * const fruits = ['apple', 'banana', 'mango', 'orange'];
 * const index1 = indexOf(fruits, 'banana'); // 1
 * const index2 = indexOf(fruits, 'papaya'); // -1
 */
const indexOf = <T>(array: T[], value: T, startIndex: number = 0): number =>
	array.indexOf(value, startIndex);

export default indexOf;
