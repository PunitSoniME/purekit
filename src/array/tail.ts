/**
 * Returns all the elements of an array except for the first one.
 *
 * @template T
 * @param {T[]} array - The input array.
 * @returns {T[]} - A new array containing all elements of the input array except the first one.
 *
 * @example
 * const arr = [1, 2, 3, 4];
 * const result = tail(arr);
 * console.log(result);
 * // => [2, 3, 4]
 */
const tail = <T>(array: T[]): T[] => {
	const [, ...rest] = array;
	return rest;
};
export default tail;
