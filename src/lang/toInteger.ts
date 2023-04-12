/**
 * Converts a value to an integer.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to convert.
 * @returns {number} - The converted integer.
 *
 * @example
 *
 * toInteger(3.2);
 * // => 3
 *
 * toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2');
 * // => 3
 */

const toInteger = (value: any): number => {
	// If the input is already an integer, just return it
	if (typeof value === 'number' && Number.isInteger(value)) {
		return value;
	}

	// If the input is not a number or string, return NaN
	if (typeof value !== 'number' && typeof value !== 'string') {
		return NaN;
	}

	// Convert the input to a number
	const num = Number(value);

	// If the input is NaN or Infinity, return 0 or Infinity respectively
	if (isNaN(num)) {
		return 0;
	} else if (num === Infinity) {
		return Number.MAX_VALUE;
	} else if (num === -Infinity) {
		return Number.MIN_VALUE;
	}

	// Round the number down to the nearest integer
	return Math.floor(num);
};
export default toInteger;
