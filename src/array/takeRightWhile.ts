import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Creates a new array with the elements from the end of the given array
 * that satisfy the provided predicate function, stopping as soon as an element
 * does not satisfy it.
 *
 * @param {Array} array - The source array to query.
 * @param {Function} [predicate=identity] - The function invoked per iteration.
 * @returns {Array} - Returns the new array of elements.
 *
 * @example
 * takeRightWhile([1, 2, 3, 4, 5], n => n > 3);
 * // => [4, 5]
 *
 * takeRightWhile([{ name: 'John', active: false }, { name: 'Mary', active: true }], { active: true });
 * // => [{ name: 'Mary', active: true }]
 */
const takeRightWhile = <T>(
	array: T[],
	predicate: predicateType = identity
): T[] => {
	if (array.length === 0) return array;

	const fn = createPredicate(predicate);
	let arrayToReturn: T[] = [];

	for (let i = array.length - 1; i >= 0; i--) {
		if ((fn as any)(array[i])) {
			arrayToReturn.push(array[i]);
		} else {
			return arrayToReturn.reverse();
		}
	}

	return [];
};
export default takeRightWhile;
