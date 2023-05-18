import findLastIndex from '../array/findLastIndex';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * This method is like `findKey` except that it iterates over elements of a collection from right to left.
 *
 * @since 1.0.0
 *
 * @param {object} object - The object to iterate over.
 * @param {Function} [predicate = identity] - The function invoked per iteration.
 * @returns {any} - The key of the last element that satisfies the predicate function, otherwise undefined.
 *
 * @example
 * const users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * };
 *
 * const isActive = (value) => value.active;
 * const result = findLastKey(users, isActive);
 * console.log(result);
 * // => 'pebbles'
 */
const findLastKey = <T>(
	object: T,
	predicate: predicateType = identity
): any => {
	const dataInArray = Object.entries(object as object).map(m => {
		return { __key__: m[0], ...m[1] };
	});
	const indexOfRecord: number = findLastIndex(dataInArray, predicate);

	if (indexOfRecord > -1) return dataInArray[indexOfRecord].__key__;
	return undefined;
};
export default findLastKey;
