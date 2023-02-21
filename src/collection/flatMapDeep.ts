import applyArrayFn from '../helpers/applyArrayFn';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Creates a flattened array of values by running each element of a collection through a map function and flattening the mapped results.
 *
 * @since 1.0.0
 *
 * @param collection The collection to iterate over.
 * @param iteratee The function to apply to each element in the collection.
 * @returns Returns the new flattened array.
 *
 * @example
 *
 * flatMapDeep([1, 2, 3], num => [[num * 2]])
 * // => [2, 4, 6]
 */
const flatMapDeep = <T>(
	collection: T,
	iteratee: predicateType<T> = identity
): T => {
	return applyArrayFn({
		collection: collection,
		fnName: 'map',
		iteratee: iteratee,
	}).flat(Infinity);
};

export default flatMapDeep;
