import applyArrayFn from '../helpers/applyArrayFn';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * This method is like `reduce`, except that it iterates over elements of a collection from right to left.
 *
 * @since 1.0.0
 *
 * @param {Array} collection - The collection to iterate over.
 * @param {Function} iteratee - The function invoked per iteration.
 * @param {*} initialValue - The initial value.
 * @returns {*} - Returns the accumulated value.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 *
 * const sum = reduceRight(numbers, (accumulator, value) => accumulator + value, 0);
 * // => 15
 *
 * const product = reduceRight(numbers, (accumulator, value) => accumulator * value, 1);
 * // => 120
 */
const reduceRight = <T>(
	collection: T,
	iteratee: predicateType<T> = identity,
	initialValue: any
): T => {
	return applyArrayFn({
		collection: collection,
		fnName: 'reduceRight',
		iteratee: iteratee,
		initialValue: initialValue,
	});
};

export default reduceRight;
