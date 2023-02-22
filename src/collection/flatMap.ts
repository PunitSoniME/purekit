import applyArrayFn from '../helpers/applyArrayFn';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Applies the provided function to each element of an array and then flattens the result.
 *
 * @since 1.0.0
 *
 * @param {Array|Object} collection - The array to iterate over.
 * @param {Function} iteratee - The function to apply to each element of the array.
 *
 * @returns {Array} - A new flattened array.
 *
 * @example
 * flatMap([1, 2, 3], (n) => [n, n * 2]);
 * // Returns [1, 2, 2, 4, 3, 6]
 *
 * flatMap(['hello', 'world'], (word) => word.split(''));
 * // Returns ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
 */
const flatMap = <T>(
	collection: T,
	iteratee: predicateType<T> = identity
): T => {
	return applyArrayFn({
		collection: collection,
		fnName: 'map',
		iteratee: iteratee,
	}).flat();
};

export default flatMap;
