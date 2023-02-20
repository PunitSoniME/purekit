import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Returns the index of the last element in the array that satisfies the provided testing function.
 *
 * @since 1.0.0
 *
 * @param {Array} array - The array to search in.
 * @param {Function} [predicate=identity] - The function invoked per iteration.
 * @param {number} [fromIndex=0] - The index to start searching from.
 * @param {number} [toIndex=array.length-1] - The index to stop searching at.
 *
 * @returns {number} - Returns the index of the found element, else -1.
 *
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': false },
 *   { 'user': 'fred', 'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * const result = findLastIndex(users, user => user.user === 'fred');
 * console.log(result);
 * // => 1
 */
const findLastIndex = <T>(
	array: T[],
	predicate: predicateType<T> = identity,
	fromIndex: number = 0,
	toIndex: number = array.length - 1
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
