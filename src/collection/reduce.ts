import applyArrayFn from '../helpers/applyArrayFn';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Reduces a collection to a single value by iterating over the elements of the collection.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {Array<T> | Object} collection The collection to iterate over.
 * @param {Function} [iteratee=identity] The function invoked per iteration.
 * @param {*} [initialValue] The initial value.
 * @returns {*} Returns the accumulated value.
 *
 * @example
 * reduce([1, 2, 3], (acc, n) => acc + n); // Returns: 6
 *
 * @example
 * reduce(
 *  { a: 1, b: 2, c: 1 },
 *  (result, value, key) => {
 *    (result[value] || (result[value] = [])).push(key);
 *    return result;
 *  },
 *  {}
 * );
 * // Returns: { '1': ['a', 'c'], '2': ['b'] }
 */
const reduce = <T>(
	collection: Array<T> | Object,
	iteratee: predicateType<T> = identity,
	initialValue: any
): T => {
	return applyArrayFn({
		collection: collection,
		fnName: 'reduce',
		iteratee: iteratee,
		initialValue: initialValue,
	});
};

export default reduce;
