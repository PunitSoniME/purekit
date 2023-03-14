import findLastIndex from '../array/findLastIndex';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Returns the last element in the `collection` that satisfies the `iteratee` function.
 *
 * @since 1.0.0
 *
 * @param {Array|Object} collection - The collection to iterate over.
 * @param {Function} [iteratee=identity] - The iteratee invoked per element.
 * @param {number} [fromIndex=0] - The index to search from.
 * @returns {*} - Returns the matched element, else `undefined`.
 *
 * @example
 *
 * findLast([1, 2, 3, 4], (n) => n % 2 === 1);
 * // => 3
 *
 * findLast({a: 1, b: 2, c: 3, d: 4}, (n) => n % 2 === 1);
 * // => 3
 *
 * findLast([1, 2, 3, 4], (n) => n === 5);
 * // => undefined
 */
const findLast = <T>(
	collection: T,
	iteratee: predicateType<T> = identity,
	fromIndex: number = Array.isArray(collection) ? collection.length - 1 : 0
): T | undefined => {
	const lastIndexOfRecord = findLastIndex(
		collection as T[],
		iteratee,
		0,
		fromIndex
	);
	if (lastIndexOfRecord > -1) return (collection as T[])[lastIndexOfRecord];
	return undefined;
};

export default findLast;
