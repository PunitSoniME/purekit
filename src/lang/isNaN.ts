/**
 * Determines whether a value is NaN (Not-A-Number).
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the value is NaN, else `false`.
 *
 * @example
 *
 * isNaN(NaN); // true
 * isNaN('string'); // true
 * isNaN(1); // false
 */

const isNaN = (value: any): boolean =>
	value instanceof Number || Number.isNaN(value);
export default isNaN;
