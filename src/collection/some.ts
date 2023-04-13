import applyArrayFn from '../helpers/applyArrayFn';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Checks if `predicate` returns truthy for any element of `collection`.
 *
 * @since 1.0.0
 *
 * @param {Array|Object} collection - The collection to iterate over.
 * @param {Function} [iteratee=identity] - The function invoked per iteration.
 * @returns {boolean} - Returns `true` if any element passes the predicate check, else `false`.
 *
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * some(users, ({ active }) => active) // => true
 *
 * some(users, { 'user': 'barney', 'active': false }) // => false
 *
 * some(users, 'active') // => true
 */
const some = <T>(
	collection: T,
	iteratee: predicateType = identity
): boolean => {
	return applyArrayFn({
		collection: collection,
		fnName: 'some',
		iteratee: iteratee,
	});
};

export default some;
