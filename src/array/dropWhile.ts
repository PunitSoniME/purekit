import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Creates a new array with elements dropped until the predicate returns false.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The input array.
 * @param {Function} [predicate=identity] - The function invoked per iteration.
 * @returns {T[]} - Returns the slice of the array.
 *
 * @example
 * dropWhile([1, 2, 3], n => n < 3); // => [3]
 *
 * dropWhile(['foo', 'bar', 'baz'], str => str.startsWith('f')); // => ['bar', 'baz']
 */
const dropWhile = <T>(array: T[], predicate: predicateType = identity): T[] => {
	const fn = createPredicate(predicate);

	for (let i = 0; i < array.length; i++) {
		if (!(fn as any)(array[i])) {
			return array.slice(i);
		}
	}

	return array;
};

export default dropWhile;
