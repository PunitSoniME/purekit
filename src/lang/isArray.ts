/**
 * Determines whether the given value is an array.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - `true` if the value is an array, `false` otherwise.
 *
 * @example
 * isArray([]); // => true
 * isArray([1, 2, 3]); // => true
 * isArray({}); // => false
 * isArray(null); // => false
 */
const isArray = (value: any): boolean => Array.isArray(value);
export default isArray;
