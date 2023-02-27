/**
 * Determines whether the given value is an array.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - `true` if the value is an array, `false` otherwise.
 *
 * @example
 * isArray([]); // returns true
 * isArray([1, 2, 3]); // returns true
 * isArray({}); // returns false
 * isArray(null); // returns false
 */
const isArray = (value: any): boolean => Array.isArray(value);
export default isArray;
