/**
 * Adds one or more elements to the beginning of an array and returns the new length of the array.
 *
 * @template T
 * @param {T[]} array - The array to add elements to.
 * @param {...T[]} elements - The elements to add to the beginning of the array.
 * @returns {T[]} - The modified array with new elements added to the beginning.
 *
 * @example
 *
 * unshift([1, 2, 3], 4); // => [4, 1, 2, 3]
 * unshift(['a', 'b'], 'c', 'd'); // => ['c', 'd', 'a', 'b']
 */

const unshift = <T>(array: T[], ...elements: any): T[] => {
	array.unshift(...elements.flat());
	return array;
};

export default unshift;
