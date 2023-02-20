/**
 * Returns the index of the first occurrence of a value in an array, starting from a given index.
 *
 * @template T
 * @param {T[]} array - The array to search.
 * @param {T} value - The value to search for.
 * @param {number} [startIndex=0] - The index to start the search from. Defaults to 0.
 * @returns {number} The index of the first occurrence of the value in the array, or -1 if the value is not found.
 */
const indexOf = <T>(array: T[], value: T, startIndex: number = 0): number =>
	array.indexOf(value, startIndex);

export default indexOf;
