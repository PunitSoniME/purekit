/**
 * Checks if a value is null, undefined or NaN and returns the default value if it is.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @param {*} defaultValue - The default value to return if `value` is null, undefined or NaN.
 *
 * @return {*} Returns the `value` or the `defaultValue` if `value` is null, undefined or NaN.
 *
 * @example
 *
 * // returns 'default'
 * defaultTo(null, 'default');
 *
 * // returns 'default'
 * defaultTo(undefined, 'default');
 *
 * // returns 'default'
 * defaultTo(NaN, 'default');
 *
 * // returns 'hello'
 * defaultTo('hello', 'default');
 */
const defaultTo = (value: any, defaultValue: any): any =>
	value == null || Object.is(value, NaN) ? defaultValue : value;
export default defaultTo;
