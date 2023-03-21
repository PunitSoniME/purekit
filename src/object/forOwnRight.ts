import reverseCollection from '../helpers/reverseCollection';
import identity from '../util/identity';

/**
 * Iterates over own enumerable string keyed properties of an object in reverse order
 * invoking `iteratee` for each property. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @since 1.0.0
 *
 * @param {Object} object - The object to iterate over.
 * @param {Function} [iteratee = identity] - The function invoked per iteration.
 * @returns {Object} - Returns `object`.
 *
 * @example
 *
 * const object = { 'a': 1, 'b': 2 };
 *
 * forOwnRight(object, (value, key) => {
 *   console.log(key, value);
 * });
 * // => Logs 'b 2' then 'a 1'.
 */
const forOwnRight = <T>(object: T, iteratee: Function = identity): T => {
	const reverseData = reverseCollection(object);

	return (reverseData as any).forEach((value: any, key: any, index: number) => {
		iteratee(value, key, reverseData, index);
	});
};
export default forOwnRight;
