import assignIn from './assignIn';

/**
 * Returns an array of the values of all enumerable properties, including inherited properties, of an object.
 *
 * @since 1.0.0
 *
 * @param {Object} object - The object to extract the values from.
 *
 * @returns {any[]} - An array of the object's values, including inherited properties.
 *
 * @example
 * const obj = { a: 1 };
 * const child = Object.create(obj);
 * child.b = 2;
 * valuesIn(child); // [1, 2]
 */
const valuesIn = (object: Object): any[] => {
	const newObject = assignIn({}, object);
	return Object.values(newObject);
};
export default valuesIn;
