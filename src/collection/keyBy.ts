import predicateType from '../helpers/predicateType';
import prepareObject, { prepareObjectTypes } from '../helpers/prepareObject';
import identity from '../util/identity';

/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} collection The collection to iterate over.
 * @param {predicateType<T>} [predicate=identity] The function invoked per iteration.
 * @returns {Object} - Returns the composed aggregate object.
 *
 * @example
 *
 * const users = [
 *   { 'id': '1', 'name': 'Alice' },
 *   { 'id': '2', 'name': 'Bob' },
 *   { 'id': '3', 'name': 'Alice' }
 * ];
 *
 * keyBy(users, 'id');
 * // => { '1': { 'id': '1', 'name': 'Alice' }, '2': { 'id': '2', 'name': 'Bob' }, '3': { 'id': '3', 'name': 'Alice' } }
 *
 * keyBy(users, (user) => user.name);
 * // => { 'Alice': { 'id': '3', 'name': 'Alice' }, 'Bob': { 'id': '2', 'name': 'Bob'
 */
const keyBy = <T>(
	collection: T[],
	predicate: predicateType<T> = identity
): Object => {
	const { result } = prepareObject({
		collection: collection,
		predicate: predicate,
		operation: prepareObjectTypes.replace,
	});
	return result;
};

export default keyBy;
