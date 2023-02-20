import applyArrayFn from '../helpers/applyArrayFn';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Checks if every element in the collection passes the predicate check
 *
 * @template T
 * @param {T[]} collection - The collection to iterate over
 * @param {predicateType<T>} [iteratee=identity] - The function invoked per iteration
 * @returns {boolean} - Returns true if all elements pass the predicate check, else false
 *
 * @example
 *
 * const arr = [1, 2, 3, 4, 5];
 * const isGreaterThanZero = (num) => num > 0;
 * const isEven = (num) => num % 2 === 0;
 *
 * every(arr, isGreaterThanZero); // true
 * every(arr, isEven); // false
 */

const every = <T>(collection: T, iteratee: predicateType<T> = identity): T => {
	return applyArrayFn({
		collection: collection,
		fnName: 'every',
		iteratee: iteratee,
	});
};

export default every;
