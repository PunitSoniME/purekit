import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Creates a new array containing the elements of the input array, up until the predicate returns false.
 *
 * @template T
 * @param {T[]} array - The input array.
 * @param {predicateType<T>} [predicate=identity] - The predicate function to be called on each element.
 * @returns {T[]} - The new array of elements that passed the predicate, until the first that returned false.
 *
 * @example
 *
 * takeWhile([1, 2, 3, 4], n => n < 3);
 * // Returns: [1, 2]
 *
 * takeWhile(['cat', 'dog', 'emu'], animal => animal.length <= 3);
 * // Returns: ['cat', 'dog']
 */
const takeWhile = <T>(
	array: T[],
	predicate: predicateType<T> = identity
): T[] => {
	if (array.length === 0) return array;

	const fn = createPredicate(predicate);
	let collectionToReturn: T[] = [];

	for (let i = 0; i < array.length; i++) {
		if ((fn as any)(array[i])) {
			collectionToReturn.push(array[i]);
		} else {
			return collectionToReturn;
		}
	}

	return [];
};
export default takeWhile;
