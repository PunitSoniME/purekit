/**
 * Checks if a value is undefined.
 *
 * @since 1.0.0
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns `true` if `value` is undefined, else `false`.
 *
 * @example
 *
 * isUndefined(undefined); // true
 * isUndefined(null); // false
 * isUndefined(0); // false
 * isUndefined(''); // false
 * isUndefined(false); // false
 */
const isUndefined = (value: any): boolean => value === undefined;
export default isUndefined;
