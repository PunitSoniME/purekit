/**
 * Converts value to an integer suitable for use as the length of an array-like object.
 *
 * @since 1.0.1
 *
 * @param {any} value - The value to process.
 *
 * @returns {number} - Returns the converted integer.
 *
 * @example
 *
 * toLength(3.2);
 * // => 3
 *
 * toLength(Number.MIN_VALUE);
 * // => 0
 *
 * toLength(Infinity);
 * // => 4294967295
 *
 * toLength('3.2');
 * // => 3
 */
const toLength = (value: any): number => {
	// Convert the value to an integer suitable for use as the length of an array-like object
	const len = Math.floor(Number(value));

	// Return 0 if the input is NaN or negative, or the maximum array length if the input is Infinity or greater
	return len >= 0 ? Math.min(len, 2 ** 32 - 1) : 0;
};
export default toLength;
