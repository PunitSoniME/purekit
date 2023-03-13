import baseSortedIndex from '../helpers/baseSortedIndex';
import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Uses a function to determine the sort order of the input array and returns the index at which the input value should be inserted in order to maintain that sort order.
 * @template T
 * @param {T[]} array - The sorted array to inspect.
 * @param {T} value - The value to evaluate.
 * @param {Function} [iteratee=identity] - The iteratee invoked per element.
 * @returns {number} - Returns the index at which the value should be inserted into the array.
 * 
 * @example
 * 
 * var objects = [{ 'x': 4 }, { 'x': 5 }];
 * 
 * sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
 * // => 0
 * 
 * sortedIndexBy(objects, { 'x': 4 }, 'x');
 * // => 0
 */
const sortedIndexBy = <T>(
	array: T[],
	value: T,
	iteratee: predicateType<T> = identity
): number => {
	const fn = createPredicate(iteratee);
	return baseSortedIndex(array, value, fn);
};

export default sortedIndexBy;
