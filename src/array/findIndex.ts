import applyArrayFn from '../helpers/applyArrayFn';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Returns the index of the first element in the array that satisfies the provided predicate function.
 *
 * @template T
 * @param {T[]} array - The array to search.
 * @param {predicateType<T>} [predicate=identity] - The function invoked per iteration.
 * @param {number} [fromIndex=0] - The index to start searching from.
 * @returns {number} - The index of the found element, or -1 if not found.
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
