import get from '../object/get';

/**
 * The opposite of `property` function. This method creates a function that returns the value at a given path of an object.
 *
 * @since 1.0.0
 *
 * @param {Object} obj - The object to query.
 * @param {Array|string} path - The path of the property to get.
 * @returns {Function} - Returns the new function.
 *
 * @example
 *
 * const user = { name: 'John', address: { street: '123 Main St.' } };
 * const street = propertyOf(user)(['address', 'street']);
 * console.log(street); // => '123 Main St.'
 */
const propertyOf =
	(obj: any): Function =>
	(path: string | any[]) =>
		get(obj, path);
export default propertyOf;
