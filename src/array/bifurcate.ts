/**
 * Splits values into two groups and then puts a truthy element of filtering the first group, and in the second group otherwise.
 *
 * @since 1.0.3
 *
 * @param {Array} array - The input array to be bifurcated.
 * @param {Array<boolean>} filter - The filter array used to determine the split.
 * @returns {Array<Array>} - An array containing two arrays, the first one containing elements that correspond to `true` values in the filter, and the second one containing elements that correspond to `false` values.
 *
 * @example
 * const array = [1, 2, 3, 4, 5];
 * const filter = [true, false, true, false, true];
 * const result = bifurcate(array, filter);
 * console.log(result);
 * // => [[1, 3, 5], [2, 4]]
 *
 * const words = ['apple', 'banana', 'cherry', 'date'];
 * const filter = [false, true, true, false];
 * const result = bifurcate(words, filter);
 * console.log(result);
 * // => [['banana', 'cherry'], ['apple', 'date']]
 */
const bifurcate = <T>(
	array: Array<T>,
	filter: Array<boolean>
): Array<Array<T>> =>
	array.reduce(
		(acc: T[][], val: T, i) => (acc[filter[i] ? 0 : 1].push(val), acc),
		[[], []]
	);
export default bifurcate;
