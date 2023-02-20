import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Creates a new array with elements dropped until predicate returns falsey.
 *
 * @template T
 * @param {T[]} array - The input array.
 * @param {predicateType<T>} [predicate=identity] - The function invoked per iteration.
 * @returns {T[]} - Returns the slice of `array`.
 */
const dropWhile = <T>(
	array: T[],
	predicate: predicateType<T> = identity
): T[] => {
	const fn = createPredicate(predicate);

	for (let i = 0; i < array.length; i++) {
		if (!(fn as any)(array[i])) {
			return array.slice(i);
		}
	}

	return array;
};

export default dropWhile;
