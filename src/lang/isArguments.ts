/**
 * Determines whether the given value is an `arguments` object.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - `true` if the value is an `arguments` object, `false` otherwise.
 *
 * @example
 * const args = (function() { return arguments; })();
 * isArguments(args); // => true
 *
 * const arr = [1, 2, 3];
 * isArguments(arr); // => false
 */
const isArguments = (value: any): Boolean =>
	Object.prototype.toString.call(value) === '[object Arguments]';
export default isArguments;
