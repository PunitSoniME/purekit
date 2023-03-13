import identity from '../util/identity';

/**
 * Removes all elements from an array that satisfy the predicate and returns an array with the removed elements.
 *
 * @since 1.0.0
 * 
 * @template T
 * @param {T[]} array - The array to modify.
 * @param {Function} [predicate=identity] - The function invoked per iteration.
 * @returns {T[]} - An array of removed elements.
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const removed = remove(arr, n => n % 2 === 0);
 * console.log(arr); // [1, 3, 5]
 * console.log(removed); // [2, 4]
 */
const remove = <T>(array: T[], predicate: Function = identity): T[] => {
	// in order to not mutate the original array until the very end
	// we want to cache the indexes to remove while preparing the result to return
	const toRemove: any[] = [];
	const result = array.filter((item, i) => predicate(item) && toRemove.push(i));

	// just before returning, we can then remove the items, making sure we start
	// from the higher indexes: otherwise they would shift at each removal
	toRemove.reverse().forEach(i => array.splice(i, 1));
	return result;

	// const fn = createPredicate(predicate);

	// let removedArray: T[] = [];
	// let updatedArray: T[] = [];

	// array.forEach((element, index) => {
	// 	if ((fn as any)(array[index])) {
	// 		removedArray.push(element);
	// 	} else {
	// 		updatedArray.push(element);
	// 	}
	// });

	// array = [...updatedArray];
	// return removedArray;
};

export default remove;
