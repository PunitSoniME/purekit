import applyArrayFn from '../helpers/applyArrayFn';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Applies a function to each element of a collection and then flattens the result up to a certain depth.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T} collection - The collection to iterate over.
 * @param {Function} [iteratee=identity] - The function invoked per iteration.
 * @param {number} [depth=1] - The maximum recursion depth.
 * @returns {T} - The new flattened array.
 *
 * @example
 * flatMapDepth([1, 2, 3], (n) => [n, n], 2);
 * // => [1, 1, 2, 2, 3, 3]
 *
 * flatMapDepth([1, [2, [3, [4]], 5]], identity, 2);
 * // => [1, 2, [3, [4]], 5]
 */
const flatMapDepth = <T>(
	collection: T,
	iteratee: predicateType<T> = identity,
	depth: number = 1
): T => {
	return applyArrayFn({
		collection: collection,
		fnName: 'map',
		iteratee: iteratee,
	}).flat(depth);
};

export default flatMapDepth;
