/**
 * Updates the value of a property at the specified path in the provided object using the given updater function
 * and a customizer function if provided.
 *
 * @since 1.0.0
 *
 * @template T - Type of the input object.
 *
 * @param {T} object - The input object to update.
 * @param {string|any} path - The path to the property to update. Can be an array or a string.
 * @param {Function} updater - The function that will be used to update the property value.
 * @param {any} customizer - The function that will be used to customize the updated value. Optional.
 *
 * @returns {Object} - The updated object.
 *
 * @example
 * const obj = { a: { b: { c: 1 } } };
 * updateWith(obj, 'a.b.c', (val) => val + 1); // { a: { b: { c: 2 } } }
 *
 * const obj2 = { a: { b: { c: 1 } } };
 * updateWith(obj2, 'a.b.d', (val) => 2); // { a: { b: { c: 1, d: 2 } } }
*/
const updateWith = <T>(
	object: T,
	path: string | any,
	updater: Function,
	customizer?: any
): Object => {
	const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);

	pathArray.reduce((acc: any, key: string, i: number) => {
		if (acc[key] === undefined) acc[key] = {};
		if (i === pathArray.length - 1)
			acc[key] = customizer ? updater(customizer(acc[key])) : updater(acc[key]);
		return acc[key];
	}, object);

	return object as Object;
};
export default updateWith;
