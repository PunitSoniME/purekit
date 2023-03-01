/**
 * Inverts the keys and values of an object. If multiple keys have the same value,
 * only the last key will be kept in the result.
 *
 * @param {Object} object - The object to invert.
 * @returns {Object} - The new object with inverted keys and values.
 *
 * @example
 *
 * const object = { a: 1, b: 2, c: 1 };
 * const inverted = invert(object);
 *
 * console.log(inverted);
 * // Output: { '1': 'c', '2': 'b' }
 *
 * @example
 *
 * const object = { a: 'x', b: 'y', c: 'z' };
 * const inverted = invert(object);
 *
 * console.log(inverted);
 * // Output: { 'x': 'a', 'y': 'b', 'z': 'c' }
 */
const invert = (object: Object): Object =>
	Object.entries(object as Object).reduce(
		(acc, [key, value]) => ({
			...acc,
			[value]: key,
		}),
		{}
	);

export default invert;
