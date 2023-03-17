import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Creates an array or object of values by running each element in `collection` through `iteratee`.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {Array<T> | Object} collection - The collection to iterate over.
 * @param {Function} [iteratee=identity] - The function invoked per iteration.
 *
 * @returns {T} - Returns the new mapped array or object.
 *
 * @example
 *
 * map([1, 2, 3], n => n * 2);
 * // => [2, 4, 6]
 *
 * map({a: 1, b: 2, c: 3}, n => n * 2);
 * // => {a: 2, b: 4, c: 6}
 */
const map = <T>(
	collection: Array<T> | Object,
	iteratee: predicateType<T> = identity
): T => {
	const updatedIteratee: any = createPredicate(iteratee);

	if (Array.isArray(collection)) {
		return (collection as any).map((rest: any) => updatedIteratee(rest));
	}

	if (collection && typeof collection === 'object') {
		return (Object.entries(collection).map as any)(
			([key, value]: any[], index: number) =>
				updatedIteratee(value, key, collection, index)
		);
	}

	return (collection as any).map(iteratee);
};

export default map;
