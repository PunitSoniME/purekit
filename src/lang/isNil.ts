/**
 * Checks if a value is null or undefined.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the value is null or undefined, else `false`.
 *
 * @example
 *
 * isNil(null); // true
 * isNil(undefined); // true
 * isNil(0); // false
 * isNil(''); // false
 */
const isNil = (value: any): boolean => value === null || value === undefined;
export default isNil;
