/**
 * Checks if a value is a valid array-like length.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if the value is a valid length, else `false`.
 *
 * @example
 *
 * isLength(3); // => true
 *
 * isLength(Number.MIN_VALUE); // => false
 *
 * isLength(Infinity); // => false
 *
 * isLength('3'); // => false
 */
const isLength = (value: any): boolean =>
	typeof value === 'number' &&
	value > -1 &&
	value % 1 === 0 &&
	value <= Number.MAX_SAFE_INTEGER;
export default isLength;
