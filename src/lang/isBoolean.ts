/**
 * Determines whether the given value is a boolean.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - `true` if the value is a boolean, `false` otherwise.
 *
 * @example
 * isBoolean(true); // => true
 * isBoolean(false); // => true
 * isBoolean(0); // => false
 * isBoolean('true'); // => false
 * isBoolean(null); // => false
 */
const isBoolean = (value: any): boolean => value === true || value === false;
export default isBoolean;
