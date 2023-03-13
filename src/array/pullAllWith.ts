import pullAt from './pullAt';

/**
 * Removes all given elements from the array using a custom comparator function.
 *
 * @since 1.0.0
 * 
 * @template T
 * @param {T[]} array - The input array.
 * @param {T[]} elementsToRemove - The elements to be removed from the array.
 * @param {Function} comparator - The comparator function to be used for comparison.
 * 
 * @returns {T[]} - The modified array.
 *
 * @example
 *
 * const arr = [{ id: 1, name: 'John' }, { id: 2, name: 'Mary' }, { id: 3, name: 'Peter' }];
 * const result = pullAllWith(arr, [{ id: 1, name: 'John' }, { id: 3, name: 'Peter' }], (a, b) => a.id === b.id);
 * console.log(result); // [{ id: 2, name: 'Mary' }]
 */
const pullAllWith = <T>(
	array: T[],
	elementsToRemove: T[],
	comparator: Function
): T[] => {
	let indexesToRemove: number[] = [];

	array.forEach((f: T, index: number) => {
		if (elementsToRemove.some(s => comparator(s, f)))
			indexesToRemove.push(index);
	});

	return pullAt(array, indexesToRemove);
};

export default pullAllWith;
