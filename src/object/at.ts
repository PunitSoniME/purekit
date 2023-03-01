import get from './get';

/**
 * Creates an array of values corresponding to the specified paths of an object.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T} object - The object to retrieve the values from.
 * @param {any[]} paths - The property paths to retrieve the values from.
 * @returns {any[]} - An array of values corresponding to the specified paths of the object.
 *
 * @example
 * const object = { a: [{ b: { c: 3 } }, 4] };
 * const result = at(object, ['a[0].b.c', 'a[1]']);
 *
 * console.log(result); // [3, 4]
 */
const at = <T>(object: T, paths: any[]): any[] => {
	let data: any[] = [];
	paths.forEach(f => {
		const value = get(object, f);
		if (value) data.push(value);
	});
	return data;
};

export default at;
