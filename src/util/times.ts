import identity from './identity';

/**
 * Calls a function n times and returns an array of the results.
 *
 * @since 1.0.0
 *
 * @param {number} n - The number of times to call the function.
 * @param {Function} [func=identity] - The function to call. If not provided, returns an array of indices.
 *
 * @returns {Array} - An array of the results of calling the function.
 *
 * @example
 * const result = times(3, i => i + 1); // [1, 2, 3]
 *
 */
const times = (
	n: number,
	func: Function = (i: any = identity) => i
): Array<any> => Array.from({ length: n }).map((_, i) => func(i));

export default times;
