import toPlainObject from '../lang/toPlainObject';

/**
 * Checks if the given object has the specified property path. Property path may be specified as a string
 * or an array of keys. Unlike `has`, this method accepts a second argument `object` to specify the object to
 * query instead of using `Object(object)` to coerce the `object` to an object.
 *
 * @param {*} object - The value to query.
 * @param {(string|Array|*)} path - The property path to check.
 * @returns {boolean} Returns `true` if the property exists, else `false`.
 * @since 1.0.0
 *
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * hasIn(object, 'a[0].b.c');
 * // => true
 *
 * hasIn(object, ['a', '0', 'b', 'c']);
 * // => true
 *
 * hasIn(object, 'a.b.c');
 * // => false
 */
const hasIn = <T>(object: T, path: string | any[] | any): boolean => {
	const plainObject = toPlainObject(object);
	if (Object.keys(plainObject as Object).length === 0) return false;

	// it might not work for some edge cases. Test your code!
	const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
	return !!pathArray.reduce(
		(prevObj: T, key: string) => prevObj && (prevObj as any)[key],
		plainObject
	);
};

export default hasIn;
