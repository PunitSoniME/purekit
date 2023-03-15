/**
 * Creates an array of unique values, in order, from all given arrays using Set.
 *
 * @param {T[]} array - The first array.
 * @param {T[][]} restArray - The rest of the arrays.
 *
 * @returns {T[]} - The new array of combined unique values.
 *
 * @example
 * const result = union([2], [1, 2]);
 * console.log(result);
 * // => [2, 1]
 */
const union = <T>(array: T[], ...restArray: T[][]): T[] => [
	...new Set(array.concat(...restArray)),
];
export default union;
