import applyArrayFn from '../helpers/applyArrayFn';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Finds the first element in the given collection that satisfies the provided predicate.
 *
 * @template T
 * @param {T} collection - The collection to iterate over.
 * @param {Function} [iteratee=identity] - The function invoked per iteration.
 * @param {number} [fromIndex=0] - The index to start searching from.
 * @returns {Object} - Returns the found element, else undefined.
 *
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1, 'active': true }
 * ];
 *
 * find(users, o => o.age < 40);
 * // => { 'user': 'barney', 'age': 36, 'active': true }
 *
 * find(users, { 'age': 1, 'active': true });
 * // => { 'user': 'pebbles', 'age': 1, 'active': true }
 *
 * find(users, 'active');
 * // => { 'user': 'barney', 'age': 36, 'active': true }
 */
const find = <T>(
	collection: T[],
	iteratee: predicateType = identity,
	fromIndex: number = 0
): Object => {
	return applyArrayFn({
		collection: collection,
		fnName: 'find',
		iteratee: iteratee,
		fromIndex: fromIndex,
	});
};

export default find;
