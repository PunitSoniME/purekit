import applyArrayFn from '../helpers/applyArrayFn';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Checks if the provided value is in the collection. If the collection is an object, the values of the object will be searched.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T} collection - The collection to inspect.
 * @param {Function} [iteratee=identity] - The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {boolean} - Returns `true` if `predicate` is found, else `false`.
 *
 * @example
 *
 * includes([1, 2, 3], 1);
 * // => true
 *
 * includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * includes('hello', 'e');
 * // => true
 */
const includes = <T>(
	collection: T,
	iteratee: predicateType<T> = identity,
	fromIndex: number = 0
): boolean => {
	if (typeof collection === 'object') {
		return Object.values(collection as any).includes(iteratee, fromIndex);
	}
	return applyArrayFn({
		collection: collection,
		fnName: 'includes',
		iteratee: iteratee,
		fromIndex: fromIndex,
		equalyCompare: false,
	});
};

export default includes;
