/**
 * Converts a value to a safe integer. Returns a safe integer that is at least -9007199254740991 and at most 9007199254740991.
 *
 * @since 1.0.0
 *
 * @param {any} value - The value to convert.
 * @returns {number} Returns the converted safe integer.
 *
 * @example
 *
 * toSafeInteger(3.2) // => 3
 * toSafeInteger(Infinity) // => 9007199254740991
 * toSafeInteger('3.2') // => 3
 * toSafeInteger(Number.MIN_VALUE) // => 0
 */
const toSafeInteger = (value: any): number => {
	var minimum = Math.min(value, Number.MAX_SAFE_INTEGER);
	var maximum = Math.max(minimum, Number.MIN_SAFE_INTEGER);
	return Math.round(maximum);
};
export default toSafeInteger;
