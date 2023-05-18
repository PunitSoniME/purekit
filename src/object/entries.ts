import toPairs from './toPairs';

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
 * const result = entries(obj);
 * console.log(result);
 * // => [['a', 1], ['b', 2], ['c', 3]]
 */
const entries = toPairs;
export default entries;
