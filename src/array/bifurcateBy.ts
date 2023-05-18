import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group.
 *
 * @since 1.0.3
 *
 * @param {Array} array - The input array to be bifurcated.
 * @param {predicateType} [predicate = identity] - The predicate function used to determine the split.
 *
 * @returns {Array<Array>} - An array containing two arrays, the first one containing elements that satisfy the predicate, and the second one containing elements that do not.
 *
 * @example
 * const array = [1, 2, 3, 4, 5];
 * const isEven = (num: number) => num % 2 === 0;
 * const result = bifurcateBy(array, isEven);
 * console.log(result);
 * // => [[2, 4], [1, 3, 5]]
 *
 * const words = ['apple', 'banana', 'cherry', 'date'];
 * const startsWithB = (word: string) => word.startsWith('b');
 * const result = bifurcateBy(words, startsWithB);
 * console.log(result);
 * // => [['banana'], ['apple', 'cherry', 'date']]
 */
const bifurcateBy = <T>(
	array: Array<T>,
	predicate: predicateType = identity
): Array<Array<T>> => {
	const fn = createPredicate(predicate);
	return array.reduce(
		(acc: T[][], val, i) => (
			acc[(fn as Function)(val, i) ? 0 : 1].push(val), acc
		),
		[[], []]
	);
};
export default bifurcateBy;
