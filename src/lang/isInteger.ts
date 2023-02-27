/**
 * Checks if a value is an integer.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Whether or not the value is an integer.
 *
 * @example
 *
 * isInteger(5); // true
 * isInteger('5'); // false
 * isInteger(5.1); // false
 */
const isInteger = (value: any): boolean => Number.isInteger(value);
export default isInteger;
