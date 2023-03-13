import nth from './nth';

/**
 * Removes elements from an array corresponding to the specified indexes, and returns an array of removed elements.
 *
 * @since 1.0.0
 * 
 * @template T
 * @param {T[]} array - The array to modify.
 * @param {number|number[]} indexes - The indexes of the elements to remove from the array.
 * @returns {T[]} - An array of removed elements.
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const removed = pullAt(arr, [1, 3]);
 * console.log(arr); // [1, 3, 5]
 * console.log(removed); // [2, 4]
 */
const pullAt = <T>(array: T[], indexes: number | number[]): T[] => {
	if (Array.isArray(indexes)) {
		return indexes
			.reverse()
			.map(indexes => array.splice(indexes, 1)[0])
			.reverse();
	}

	const element = [nth(array, indexes) as T];
	array.splice(indexes, 1);
	return element;
};

export default pullAt;
