import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Creates a function that invokes `iteratee` with arguments taken from the
 * element at the end of `array` until the predicate returns falsey. The predicate
 * is invoked with one argument: (value).
 *
 * @template T
 * @param {T[]} array - The array to query.
 * @param {predicateType<T>} [predicate=identity] - The function invoked per iteration.
 * @returns {T[]} - Returns the slice of `array`.
 */
const dropRightWhile = <T>(
	array: T[],
	predicate: predicateType<T> = identity
): T[] => {
	const fn = createPredicate(predicate);

	for (let i = array.length - 1; i >= 0; i--) {
		if (!(fn as any)(array[i])) {
			return array.slice(0, i + 1);
		}
	}

	return array;
};

export default dropRightWhile;
