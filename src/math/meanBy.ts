import predicateType from '../helpers/predicateType';
import sumBy from './sumBy';

/**
 * Calculates the mean value of an array of objects using the given iteratee.
 *
 * @since 1.0.0
 *
 * @template T
 *
 * @param {T[]} collection - The array of objects to calculate the mean for.
 * @param {predicateType<T>} iteratee - The iteratee to use for extracting the values to calculate the mean.
 *
 * @returns {number} - The mean value of the array.
 *
 * @example
 *
 * // returns 2
 * meanBy([{ value: 1 }, { value: 2 }, { value: 3 }], (obj) => obj.value);
 *
 * // returns 5
 * meanBy([{ value: 5 }, { value: 5 }, { value: 5 }, { value: 5 }], (obj) => obj.value);
 */
const meanBy = <T>(collection: T[], iteratee: predicateType<T>): number =>
	sumBy(collection as any[], iteratee) / collection.length;

export default meanBy;
