/**
 * Determines whether the given value is a boolean.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - `true` if the value is a boolean, `false` otherwise.
 *
 * @example
 * isBoolean(true); // returns true
 * isBoolean(false); // returns true
 * isBoolean(0); // returns false
 * isBoolean('true'); // returns false
 * isBoolean(null); // returns false
 */
const isBoolean = (value: any): boolean => value === true || value === false;
export default isBoolean;
