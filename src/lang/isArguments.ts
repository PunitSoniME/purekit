/**
 * Determines whether the given item is an `arguments` object.
 *
 * @since 1.0.0
 *
 * @param {*} item - The item to check.
 * @returns {boolean} - `true` if the item is an `arguments` object, `false` otherwise.
 *
 * @example
 * const args = (function() { return arguments; })();
 * isArguments(args); // returns true
 *
 * const arr = [1, 2, 3];
 * isArguments(arr); // returns false
 */
const isArguments = (item: any): Boolean =>
	Object.prototype.toString.call(item) === '[object Arguments]';
export default isArguments;
