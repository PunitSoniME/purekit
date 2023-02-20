import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * This function is similar to `findIndex` except that it iterates over elements of the array from right to left.
 *
 * @template T
 * @param {T[]} array - The array to iterate over.
 * @param {predicateType<T>} [predicate=identity] - The function invoked per iteration.
 * @param {number} [fromIndex=0] - The index to search from, defaults to the last index of the array.
 * @param {number} [toIndex=array.length - 1] - The index to search to, defaults to 0.
 * @returns {number} - The index of the found element, else -1.
 */

const findLastIndex = <T>(
	array: T[],
	predicate: predicateType<T> = identity,
	fromIndex = 0,
	toIndex = array.length - 1
): number => {
	const fn = createPredicate(predicate);

	if (fn === undefined) return array.lastIndexOf(predicate as T);

	for (let i = toIndex; i >= fromIndex; i--) {
		if ((fn as any)(array[i])) {
			return i;
		}
	}
	return -1;
};

export default findLastIndex;
