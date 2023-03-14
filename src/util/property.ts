import get from '../object/get';

/**
 * Creates a function that returns the value at the specified path of an object.
 *
 * @since 1.0.0
 *
 * @param {string|any[]} path - The path of the property to get.
 * @returns {Function} - Returns the new function.
 *
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] };
 * const getValue = property('a[0].b.c');
 *
 * getValue(object);
 * // => 3
 */
const property =
	(path: string | any[]): Function =>
	(obj: any) =>
		get(obj, path);
export default property;
