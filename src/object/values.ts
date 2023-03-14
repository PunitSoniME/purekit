/**
 * Returns an array of the values of the own enumerable string-keyed properties of an object.
 *
 * @since 1.0.0
 *
 * @param {Object} object - The object to extract the values from.
 *
 * @returns {any[]} - An array of the object's values.
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * values(obj); // [1, 2, 3]
 */
const values = (object: Object): any[] => Object.values(object);
export default values;
