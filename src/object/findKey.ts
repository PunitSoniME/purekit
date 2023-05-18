import find from '../collection/find';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Iterates over an object's own and inherited enumerable properties, returning the first key that the predicate function returns truthy for.
 *
 * @since 1.0.0
 *
 * @param {object} object - The object to iterate over.
 * @param {Function} [predicate = identity] - The function invoked per iteration.
 * @returns {any} - The key of the first element that satisfies the predicate function, otherwise undefined.
 *
 * @example
 * const users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * };
 *
 * const isActive = (value) => value.active;
 * const result = findKey(users, isActive);
 * console.log(result);
 * // => 'barney'
 */
const findKey = <T>(object: T, predicate: predicateType = identity): any => {
	const dataInArray = Object.entries(object as object).map(m => {
		return { __key__: m[0], ...m[1] };
	});
	const record: any = find(dataInArray, predicate);

	if (record) return record.__key__;
	return undefined;
};
export default findKey;
