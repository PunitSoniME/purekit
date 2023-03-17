import applyArrayFn from '../helpers/applyArrayFn';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Filters the elements of a collection based on the truth value of a provided function.
 *
 * @template T
 * @param {T} collection - The collection to iterate over.
 * @param {Function} [iteratee=identity] - The function invoked per iteration.
 * @returns {T} - The new filtered collection.
 *
 * @example
 * const nums = [1, 2, 3, 4, 5];
 * const isEven = (num) => num % 2 === 0;
 * const filteredNums = filter(nums, isEven); // [2, 4]
 */
const filter = <T>(collection: T, iteratee: predicateType<T> = identity): T => {
	return applyArrayFn({
		collection: collection,
		fnName: 'filter',
		iteratee: iteratee,
	});
};

export default filter;
