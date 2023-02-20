import applyArrayFn from '../helpers/applyArrayFn';
import identity from '../util/identity';

/**
 * Applies a function to each element in a collection.
 *
 * @template T
 * @param {T} collection - The collection to iterate over.
 * @param {Function} [iteratee=identity] - The function to apply to each element.
 * @returns {T} The original collection.
 *
 * @example
 * const arr = [1, 2, 3];
 * forEach(arr, n => console.log(n)); // logs 1, 2, 3
 *
 * const obj = { a: 1, b: 2, c: 3 };
 * forEach(obj, (value, key) => console.log(key, value)); // logs "a 1", "b 2", "c 3"
 */
const forEach = <T>(collection: T, iteratee: Function = identity): T => {
	applyArrayFn({
		collection: collection,
		fnName: 'forEach',
		iteratee: iteratee,
	});
	return collection;
};

export default forEach;
