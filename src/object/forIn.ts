import applyArrayFn from '../helpers/applyArrayFn';
import assignIn from './assignIn';

/**
 * Iterates over own and inherited enumerable string keyed properties of an object and invokes iteratee for each property.
 *
 * @since 1.0.0
 *
 * @param {Object} object - The object to iterate over.
 * @param {Function} iteratee - The function to invoke per iteration.
 * @returns {Object} - Returns object.
 *
 * @example
 * const object = { 'a': 1, 'b': 2 };
 *
 * forIn(object, function(value, key) {
 *   console.log(key);
 * });
 * // Output: 'a' (iteration order is not guaranteed)
 * // Output: 'b' (iteration order is not guaranteed)
 *
 * forIn(object, function(value, key) {
 *   object[key] = value * 2;
 * });
 * console.log(object);
 * // Output: { 'a': 2, 'b': 4 }
 */
const forIn = (object: Object, iteratee: any): Object => {
	const collection = assignIn({}, object);

	return applyArrayFn({
		collection: collection,
		fnName: 'forEach',
		iteratee: iteratee,
	});
};
export default forIn;
