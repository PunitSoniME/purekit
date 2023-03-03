import assignIn from './assignIn';

/**
 * This method returns all the own and inherited enumerable property names of an object.
 *
 * @since 1.0.0
 *
 * @param {object} object - The object to query.
 * @returns {Array} Returns the array of property names.
 *
 * @example
 *
 * keysIn({a: 1, b: 2})  // => ['a', 'b']
 */
const keysIn = (object: any): any[] => {
	const collection = assignIn({}, object);
	return Object.keys(collection);
};
export default keysIn;
