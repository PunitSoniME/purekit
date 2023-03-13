import applyArrayFn from '../helpers/applyArrayFn';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Returns the index of the first element in the array that satisfies the provided predicate function.
 *
 * @since 1.0.0
 *
 * @param {Array} array - The array to search.
 * @param {Function} [predicate=identity] - The function invoked per iteration.
 * @param {number} [fromIndex=0] - The index to search from.
 * @returns {number} - Returns the index of the found element, else -1.
 *
 * @example
 *
 * const users = [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'Jane' },
 *   { id: 3, name: 'Bob' }
 * ];
 *
 * findIndex(users, ({ id }) => id === 2);
 * // => 1
 *
 * findIndex(users, ({ name }) => name === 'Mary');
 * // => -1
 */
const findIndex = <T>(
	array: T,
	predicate: predicateType<T> = identity,
	fromIndex: number = 0
): number => {
	return applyArrayFn({
		collection: array,
		fnName: 'findIndex',
		iteratee: predicate,
		fromIndex: fromIndex,
	});
};

export default findIndex;
