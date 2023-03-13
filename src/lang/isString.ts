/**
 * Checks if a value is a string.
 *
 * @since 1.0.0
 *
 * @param {*} value The value to check.
 * @returns {boolean} - Returns `true` if `value` is a string, else `false`.
 *
 * @example
 *
 * isString('hello'); // => true
 * isString(123); // => false
 */
const isString = (value: any): boolean => typeof value === 'string';
export default isString;
