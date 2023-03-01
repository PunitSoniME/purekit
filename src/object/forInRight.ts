import reverseCollection from '../helpers/reverseCollection';
import assignIn from './assignIn';

/**
 * Iterates over an object's own and inherited enumerable string keyed properties in reverse order,
 * calling `iteratee` for each property. The `iteratee` is invoked with three arguments:
 * (value, key, object). Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T} object - The object to iterate over.
 * @param {Function} iteratee - The function invoked per iteration.
 * @returns {T} Returns the object.
 *
 * @example
 *
 * const object = { 'a': 1, 'b': 2 };
 *
 * forInRight(object, (value, key) => {
 *   console.log(key);
 * });
 * // => Logs 'b' then 'a'.
 */
const forInRight = <T>(object: T, iteratee: any): T => {
	const collection = assignIn({}, object);
	const reverseData = reverseCollection(collection);

	return (reverseData as any).forEach((value: any, key: any, index: number) => {
		iteratee(value, key, reverseData, index);
	});
};
export default forInRight;
