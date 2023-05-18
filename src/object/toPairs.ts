/**
 * Creates an array of key-value pairs for the given object.
 *
 * @since 1.0.0
 *
 * @param {object} object - The object to convert to pairs.
 * @returns {Array<[string, any]>} - An array of key-value pairs for the given object.
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 *
 * const result = toPairs(obj);
 * console.log(result);
 * // => [['a', 1], ['b', 2], ['c', 3]]
 */
const toPairs = (object: object): Array<[string, any]> =>
	Object.entries(object);
export default toPairs;
