import baseSortedLastIndex from '../helpers/baseSortedLastIndex';
import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Returns the highest index at which value should be inserted into array
 * in order to maintain its sorted order, based on a provided iteratee function.
 *
 * @template T
 * @param {T[]} array - The sorted array to inspect.
 * @param {T} value - The value to evaluate.
 * @param {predicateType<T>} [iteratee=identity] - The iteratee invoked per element.
 * @returns {number} - Returns the index at which value should be inserted into array.
 *
 * @example
 * const users = [{ id: 1, name: 'Jane' }, { id: 2, name: 'John' }, { id: 3, name: 'Mary' }];
 * sortedLastIndexBy(users, { id: 2 }, ({ id }) => id); // 3
 */
const sortedLastIndexBy = <T>(
	array: T[],
	value: T,
	iteratee: predicateType<T> = identity
): number => {
	const fn = createPredicate(iteratee);
	return baseSortedLastIndex(array, value, fn);
};

export default sortedLastIndexBy;
