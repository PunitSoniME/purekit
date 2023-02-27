/**
 * Checks if a given value is a regular expression.
 *
 * @since 1.0.0
 *
 * @param {any} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is a regular expression, else `false`.
 *
 * @example
 * isRegExp(/ab+c/i); // => true
 */
const isRegExp = (value: any): boolean => value instanceof RegExp;
export default isRegExp;
