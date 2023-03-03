/**
 * Creates an object composed of the object properties that are not included in the given `paths`.
 *
 * @since 1.0.0
 *
 * @param {Object} object - The source object.
 * @param {Array} paths - The property paths to omit.
 * @returns {Object} - Returns the new object.
 *
 * @example
 *
 * omit({a: 1, b: 2, c: 3}, ['a', 'c']);
 * // => {b: 2}
 */
const omit = (object: Object, paths: any[]): Object =>
	Object.fromEntries(
		Object.entries(object as Object).filter(([key]) => !paths.includes(key))
	);
export default omit;
