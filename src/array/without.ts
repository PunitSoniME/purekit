/**
 * Returns a new array with all instances of the provided values removed.
 *
 * @template T
 * @param {T[]} array - The source array.
 * @param {...T} exception - The values to exclude from the returned array.
 * @returns {T[]} - A new array without the specified values.
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const result = without(arr, 2, 4); // result = [1, 3, 5]
 */
const without = <T>(array: T[], ...exception: T[]): T[] =>
	array.filter(f => !exception.includes(f));
export default without;
