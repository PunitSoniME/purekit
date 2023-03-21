/**
 * Returns the size of the given collection.
 *
 * @since 1.0.0
 *
 * @param {Array|Object|string} collection - The collection to determine the size of.
 * @returns {number} - The size of the collection.
 *
 * @example
 * size([1, 2, 3]); // => 3
 * size({a: 1, b: 2, c: 3}); // => 3
 * size('hello'); // => 5
 */
const size = (collection: any[] | Object | string): number => {
	if (Array.isArray(collection)) return collection.length;
	else if (typeof collection === 'object')
		return Object.keys(collection as Object).length;

	return (collection as 'string').length;
};
export default size;
