/**
 * Creates an object composed of the picked object properties.
 *
 * @since 1.0.0
 *
 * @param {Object} object - The source object.
 * @param {string|string[]} paths - The property path(s) to pick.
 * @returns {Object} - Returns the new object.
 *
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 *
 * pick(object, 'a', 'c');
 * // => { 'a': 1, 'c': 3 }
 */
const pick = (object: Object, paths: string | string[]): Object => {
	return (typeof paths === 'string' ? [paths] : paths).reduce((obj, key) => {
		if (object && object.hasOwnProperty(key)) {
			(obj as any)[key] = (object as any)[key];
		}
		return obj;
	}, {});
};
export default pick;
