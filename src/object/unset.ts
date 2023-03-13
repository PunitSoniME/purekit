/**
 * Removes the specified property at the given path from the provided object.
 *
 * @since 1.0.0
 * 
 * @template T - Type of the input object.
 * 
 * @param {T} object - The input object from which the property needs to be removed.
 * @param {any} path - The path to the property that needs to be removed. Can be an array or a string.
 * 
 * @returns {boolean} - Returns true if the property was successfully removed, false otherwise.
 *
 * @example
 * const obj = { a: { b: { c: 1 } } };
 * unset(obj, 'a.b.c'); // true
 * // obj is now { a: { b: {} } }
 * 
 * const obj2 = { a: { b: { c: 1 } } };
 * unset(obj2, 'a.b.d'); // false
 * // obj2 remains { a: { b: { c: 1 } } }
 */
const unset = <T>(object: T, path: any): boolean => {
	let isKeyRemoved = false;
	const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);

	pathArray.reduce((acc: any, key: string, i: number) => {
		if (i === pathArray.length - 1) {
			delete acc[key];
			isKeyRemoved = true;
		}
		return acc[key];
	}, object);

	return isKeyRemoved;
};
export default unset;
