import applyArrayFn from '../helpers/applyArrayFn';
import identity from '../util/identity';

/**
 * Iterates over an object's own enumerable string keyed properties, calling `iteratee` for each property.
 * The `iteratee` is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @since 1.0.0
 *
 * @param {Object} object - The object to iterate over.
 * @param {Function} [iteratee = identity] - The function invoked per iteration.
 * @returns {Object} - Returns the object.
 *
 * @example
 *
 * const object = { 'a': 1, 'b': 2 };
 *
 * forOwn(object, (value, key) => {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b'.
 */

const forOwn = (object: Object, iteratee: Function = identity): Object => {
	return applyArrayFn({
		collection: object,
		fnName: 'forEach',
		iteratee: iteratee,
	});
};
export default forOwn;
