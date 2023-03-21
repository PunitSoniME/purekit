/**
 * Converts a value to a string.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to convert to a string.
 * @returns {string} - The string representation of the given value.
 *
 * @example
 * toString('Hello') // => 'Hello'
 * toString(123) // => '123'
 * toString(null) // => ''
 * toString(undefined) // => ''
 * toString(-0) // => '-0'
 * toString(0) // => '0'
 */
const toString = (value: any): string => {
	if (typeof value === 'string') return value;
	if (value === null || value === undefined) return '';
	if (value === -0) return `-0`;
	if (value === 0) return '0';
	return new String(value).toString();
};
export default toString;
