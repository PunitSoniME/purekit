/**
 * Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned.
 *
 * @param {Object} object - The object to query.
 * @param {(string|Array|*)} path - The path of the property to get.
 * @param {*} [defaultValue] - The value returned for undefined resolved values.
 * @returns {*} - Returns the resolved value.
 * @since 1.0.0
 *
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * get(object, 'a[0].b.c');
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * get(object, 'a.b.c', 'default');
 * // => 'default'
 */

const get = (object: any, path: string | any[] | any, defaultValue?: any) => {
	//	One Way
	// return path
	// 	.split(/[\.\[\]\'\"]/)
	// 	.filter((p: any) => p)
	// 	.reduce((o: any, p: any) => o ? o[p] : defaultValue, object);

	// If path is not defined or it has false value
	if (!path) return undefined;
	// Check if path is string or array. Regex : ensure that we do not have '.' and brackets.
	// Regex explained: https://regexr.com/58j0k
	const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);

	if (pathArray === null) return defaultValue;
	// Find value
	const result = (pathArray as any[]).reduce(
		(prevObj, key) => prevObj && prevObj[key],
		object
	);
	// If found value is undefined return default value; otherwise return the value
	return result === undefined ? defaultValue : result;

	// //	Faster Way
	// if (typeof object === 'undefined' || object === null) return;
	// let newPath = path.split(/[\.\[\]\"\']{1,2}/);
	// for (var i = 0, l = newPath.length; i < l; i++) {
	// 	if (newPath[i] === '') continue;
	// 	object = object[newPath[i]];
	// 	if (typeof object === 'undefined' || object === null) return;
	// }

	// return object ?? defaultValue;
};

export default get;
