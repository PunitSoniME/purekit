/**
 * Checks if the given object has the specified property path. Property path may be specified as a string
 * or an array of keys.
 *
 * @param {Object} object - The object to query.
 * @param {(string|Array|*)} path - The property path to check.
 * @returns {boolean} Returns `true` if the property exists, else `false`.
 * @since 1.0.0
 *
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * has(object, 'a[0].b.c');
 * // => true
 *
 * has(object, ['a', '0', 'b', 'c']);
 * // => true
 *
 * has(object, 'a.b.c');
 * // => false
 */
const has = <T>(object: T, path: string | any[] | any): boolean => {
	if (Object.keys(object as Object).length === 0) return false;
	// it might not work for some edge cases. Test your code!
	const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
	return !!pathArray.reduce(
		(prevObj: T, key: string) => prevObj && (prevObj as any)[key],
		object
	);
};

export default has;
