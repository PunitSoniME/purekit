import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Creates a slice of the `array` with elements dropped from the end.
 * Elements are dropped until `predicate` returns falsey.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The array to inspect.
 * @param {Function} [predicate=identity] - The function invoked per iteration.
 * @returns {T[]} - Returns the slice of `array`.
 *
 * @example
 *
 * dropRightWhile([1, 2, 3, 4], n => n > 2);
 * // => [1, 2]
 *
 * dropRightWhile([{ 'user': 'barney', 'active': true }, { 'user': 'fred', 'active': false }, { 'user': 'pebbles', 'active': false }], o => !o.active);
 * // => [{ 'user': 'barney', 'active': true }]
 */

const dropRightWhile = <T>(
	array: T[],
	predicate: predicateType<T> = identity
): T[] => {
	const fn = createPredicate(predicate);

	for (let i = array.length - 1; i >= 0; i--) {
		if (!(fn as Function)(array[i])) {
			return array.slice(0, i + 1);
		}
	}

	return array;
};

export default dropRightWhile;
