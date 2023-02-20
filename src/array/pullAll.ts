import pullAt from './pullAt';

/**
 * Removes all instances of specified elements from an array.
 *
 * @template T
 * @param {T[]} array - The array to modify.
 * @param {T[]} elementsToRemove - The elements to remove from the array.
 * @returns {T[]} The modified array with specified elements removed.
 *
 * @example
 *
 * const arr = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * pullAll(arr, ['a', 'c']);
 *
 * console.log(arr);
 * // expected output: ['b', 'b']
 */
const pullAll = <T>(array: T[], elementsToRemove: T[]): T[] => {
	let indexesToRemove: number[] = [];

	array.forEach((f: T, index: number) => {
		if (elementsToRemove.some(s => s === f)) indexesToRemove.push(index);
	});

	return pullAt(array, indexesToRemove);
};

export default pullAll;
