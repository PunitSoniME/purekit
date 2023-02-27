/**
 * Checks if a value is a function.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if the value is a function, else `false`.
 *
 * @example
 *
 * isFunction(function() {}) // true
 * isFunction(() => {}) // true
 * isFunction(1) // false
 */
const isFunction = (value: any): boolean =>
	value instanceof Function && typeof value === 'function';
export default isFunction;
