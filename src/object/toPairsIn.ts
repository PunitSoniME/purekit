import assignIn from './assignIn';

/**
 * Creates an array of key-value pairs for the given object, including inherited properties.
 *
 * @since 1.0.0
 *
 * @param {object} object - The object to convert to pairs.
 * @returns {Array<[string, any]>} - An array of key-value pairs for the given object.
 *
 * @example
 * const proto = { a: 1 };
 * const obj = Object.create(proto, {
 *   b: { value: 2 }
 * });
 *
 * const result = toPairsIn(obj);
 * console.log(result);
 * // => [['b', 2], ['a', 1]]
 */
const toPairsIn = (object: object): Array<[string, any]> => {
	const newObject = assignIn({}, object);
	return Object.entries(newObject);
};
export default toPairsIn;
