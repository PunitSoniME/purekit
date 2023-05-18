import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Creates a new array of unique values, based on the result of the given iteratee function.
 *
 * @template T
 * @param {T[]} array - The input array.
 * @param {Function} [iteratee=identity] - The function used to get the unique value for each element.
 * @returns {T[]} - The new array of unique values.
 *
 * @example
 * const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 1, name: 'Jim' }];
 * const result = uniqBy(array, 'id');
 * console.log(result);
 * // => [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
 */

const uniqBy = <T>(array: T[], iteratee: predicateType = identity): T[] => {
	if (typeof iteratee === 'string') {
		const prop = iteratee;
		iteratee = (item: any) => item[prop];
	}

	return array.filter(
		(x, i, self) =>
			i ===
			self.findIndex(
				y => (iteratee as Function)(x) === (iteratee as Function)(y)
			)
	);
};

export default uniqBy;
