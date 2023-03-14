/**
 * Checks if a value is `null`.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - `true` if the value is `null`, else `false`.
 *
 * @example
 *
 * isNull(null); // true
 * isNull(undefined); // false
 * isNull(''); // false
 */

const isNull = (value: any): boolean => value === null;
export default isNull;
