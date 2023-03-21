/**
 * Checks if a value is null, undefined or NaN and returns the default value if it is.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @param {*} defaultValue - The default value to return if `value` is null, undefined or NaN.
 *
 * @return {*} - Returns the `value` or the `defaultValue` if `value` is null, undefined or NaN.
 *
 * @example
 *
 * defaultTo(null, 'default');
 * // => 'default'
 *
 * defaultTo(undefined, 'default');
 * // => 'default'
 *
 * defaultTo(NaN, 'default');
 * // => 'default'
 *
 * defaultTo('hello', 'default');
 * // => 'hello'
 */
const defaultTo = (value: any, defaultValue: any): any =>
	value == null || Object.is(value, NaN) ? defaultValue : value;
export default defaultTo;
