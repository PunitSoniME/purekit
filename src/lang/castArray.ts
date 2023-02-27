/**
 * Casts the given value as an array if it's not already an array.
 *
 * @since 1.0.0
 *
 * @param {any} input - The value to cast as an array.
 * @returns {Array} - The input value as an array, or an array with the input value as the only element.
 *
 * @example
 *
 * castArray('hello')
 * // => ['hello']
 *
 * castArray([1, 2, 3])
 * // => [1, 2, 3]
 *
 * castArray({ a: 1 })
 * // => [{ a: 1 }]
 */
const castArray = <T>(input: T): T | T[] => {
	if (Array.isArray(input)) return input;
	return [input];
};

export default castArray;
