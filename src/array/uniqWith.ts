import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Creates a duplicate-free version of an array, using a comparator function to compare the elements.
 *
 * @template T
 * @param {T[]} array - The array to inspect.
 * @param {Function} [comparator=identity] - The function invoked per iteration to compare elements.
 * @returns {T[]} - Returns the new duplicate free array.
 *
 * @example
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * uniqWith(objects, isEqual); // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 */
const uniqWith = <T>(
	array: T[],
	comparator: predicateType<T> = identity
): T[] => {
	return array.filter(
		(x, i, self) => i === self.findIndex(y => (comparator as Function)(x, y))
	);
};

export default uniqWith;
