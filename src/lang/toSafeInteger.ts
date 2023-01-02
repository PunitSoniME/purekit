/**
 * Converts value to a safe integer. A safe integer can be compared and represented correctly.
 * @param value The value to convert.
 * @returns Returns the converted integer.
 */
const toSafeInteger = (value: any): number => {
	var minimum = Math.min(value, Number.MAX_SAFE_INTEGER);
	var maximum = Math.max(minimum, Number.MIN_SAFE_INTEGER);
	return Math.round(maximum);
};
export default toSafeInteger;
