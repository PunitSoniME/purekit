/**
 * Returns the index of the last occurrence of the specified element in the array, searching backwards from the given index.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The input array to search in.
 * @param {T} element - The element to search for.
 * @param {number} [fromIndex=array.length - 1] - The index to start the search from.
 *
 * @returns {number} - The index of the last occurrence of the element in the array, or -1 if not found.
 *
 * @example
 * const fruits = ['apple', 'banana', 'orange', 'banana', 'orange'];
 * const lastIndex1 = lastIndexOf(fruits, 'banana'); // => 3
 * const lastIndex2 = lastIndexOf(fruits, 'orange', 2); // => 2
 */
const lastIndexOf = <T>(
	array: T[],
	element: T,
	fromIndex: number = array.length - 1
): number => array.lastIndexOf(element, fromIndex);
export default lastIndexOf;
