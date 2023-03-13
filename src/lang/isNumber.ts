/**
 * Checks if a value is a number.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a number, false otherwise.
 *
 * @example
 *
 * isNumber(42); // true
 * isNumber(NaN); // true
 * isNumber('42'); // false
 * isNumber(null); // false
 */

const isNumber = (value: any): boolean =>
	typeof value === 'number' || value instanceof Number;
export default isNumber;
