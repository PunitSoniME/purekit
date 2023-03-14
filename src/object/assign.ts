/**
 * Creates a new object that combines the properties of the specified objects.
 *
 * @since 1.0.0
 *
 * @param {object} object - The object to which the properties of the other objects will be assigned.
 * @param {...object} sources - The objects whose properties will be assigned to the `object`.
 *
 * @returns {object} - A new object that combines the properties of the specified objects.
 *
 * @example
 *
 * // returns { a: 1, b: 2, c: 3 }
 * assign({ a: 1 }, { b: 2 }, { c: 3 });
 *
 * // returns { a: 1, b: 2, c: 3, d: 4 }
 * assign({ a: 1, b: 2 }, { c: 3, d: 4 });
 */
const assign = <T>(object: T, ...sources: any[]): T => {
	let data = { ...object };
	sources.map(m => Object.assign(data as object, { ...m }));
	return data;
};

export default assign;
