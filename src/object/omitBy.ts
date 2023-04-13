import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Creates an object composed of the object properties predicate does not return truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @since 1.0.0
 *
 * @template T
 * @param {Object} object - The source object.
 * @param {Function} [predicate = identity] - The function invoked per iteration.
 * @returns {Object} - Returns the new object.
 *
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * omitBy(object, (value) => typeof value === 'number');
 * // => { 'b': '2' }
 */
const omitBy = (object: Object, predicate: predicateType = identity): any => {
	const fn = createPredicate(predicate);
	Object.entries(object).forEach(
		([key, value]) => (fn as any)(value) && delete (object as any)[key]
	);
	return object;
};
export default omitBy;
