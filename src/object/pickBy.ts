import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Creates an object composed of the object properties predicate returns truthy for.
 *
 * @since 1.0.0
 *
 * @param {Object} object - The source object.
 * @param {Function} [predicate = identity] - The function invoked per iteration.
 * @returns {Object} - The new object.
 *
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * pickBy(object, (value) => typeof value === 'number');
 * // => { 'a': 1, 'c': 3 }
 */
const pickBy = <T>(
	object: Object,
	predicate: predicateType<T> = identity
): Object => {
	const fn = createPredicate(predicate);
	let newObject: Object = {};
	Object.entries(object).forEach(([key, value]) => {
		if ((fn as any)(value)) {
			(newObject as any)[key] = value;
		}
	});
	return newObject;
};
export default pickBy;
