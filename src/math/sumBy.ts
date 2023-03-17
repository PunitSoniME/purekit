import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';

/**
 * Returns the sum of all the values obtained by applying the iteratee function to each element in the array.
 *
 * @since 1.0.0
 *
 * @param {T[]} numbers - The array of numbers to sum.
 * @param {Function} iteratee - The function to apply to each element to get its value for summing.
 *
 * @returns {number} - The sum of all the values obtained by applying the iteratee function to each element in the array.
 *
 * @example
 *
 * // returns 15
 * sumBy([1, 2, 3, 4, 5], (num) => num);
 *
 * // returns 3
 * sumBy([{ val: 1 }, { val: 2 }, { val: 0 }], (obj) => obj.val);
 */
const sumBy = <T>(numbers: T[], iteratee: predicateType<T>): number => {
	const fn = createPredicate(iteratee);
	return numbers.reduce(
		(oldValue, nextValue) => oldValue + (fn as any)(nextValue),
		0
	);
};

export default sumBy;
