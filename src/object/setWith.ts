/**
 * This method is like `set` except that it accepts `customizer` which is invoked to produce the
 * value to be set. If `customizer` returns `undefined` the value is not set.
 *
 * @since 1.3.0
 *
 * @template T The type of the object.
 * @param {T} object The object to modify.
 * @param {(any[] | string)} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {T} Returns the modified object.
 *
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * setWith(object, '[0].a.b.c', 4, (value) => value === 3 ? 1 : value);
 * // => { 'a': [{ 'b': { 'c': 1 } }] }
 */
const setWith = <T>(
	object: T,
	path: any[] | string,
	value: any,
	customizer: Function
): T => {
	const pathArray =
		(Array.isArray(path) ? path : path.match(/([^[.\]])+/g)) ?? [];

	pathArray.reduce((acc: any, key: string, i: number) => {
		if (acc[key] === undefined) acc[key] = {};
		if (i === pathArray.length - 1) acc[key] = customizer(value);
		return acc[key];
	}, object);

	return object;
};
export default setWith;
