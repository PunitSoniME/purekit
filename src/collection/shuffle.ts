import sampleSize from './sampleSize';

/**
 * Shuffles the given collection by returning a new array or object with the same elements in a randomized order.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T} collection - The collection to shuffle.
 * @returns {T} - The shuffled collection.
 *
 * @example
 * const result = shuffle([1, 2, 3, 4, 5]); // [4, 5, 1, 3, 2]
 * const result2 = shuffle({a: 1, b: 2, c: 3, d: 4, e: 5}); // {e: 5, a: 1, d: 4, b: 2, c: 3}
 */
const shuffle = <T>(collection: T): T => {
	if (Array.isArray(collection))
		return sampleSize(collection, collection.length) as T;
	else if (typeof collection === 'object')
		return sampleSize(
			collection,
			Object.keys(collection as Object).length
		) as T;

	return collection;
};
export default shuffle;
