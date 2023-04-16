/**
 * Sets the value at path of object. If a portion of path doesn't exist, it's created.
 *
 * @since 1.0.0
 *
 * @param {Object} object - The object to modify.
 * @param {Array<string>|string} path - The path of the property to set.
 * @param {*} value - The value to set.
 * @returns {Object} - The modified object.
 *
 * @example
 *
 * const object = { a: { b: { c: 3 } } };
 *
 * set(object, 'a.b.c', 4);
 * // => { a: { b: { c: 4 } } }
 *
 * set(object, ['x', '0', 'y', 'z'], 5);
 * // => { a: { b: { c: 3 } }, x: [{ y: { z: 5 } }] }
 */
const set = <T>(object: T, path: any[] | string, value: any): T => {
	const pathArray =
		(Array.isArray(path) ? path : path.match(/([^[.\]])+/g)) ?? [];

	pathArray.reduce((acc: any, key: string, i: number) => {
		if (acc[key] === undefined) acc[key] = {};
		if (i === pathArray.length - 1) acc[key] = value;
		return acc[key];
	}, object);

	return object;
};
export default set;
